import GoogleAnalytics from "@/app/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";

import { siteConfig } from "@/config/site";

import "@/styles/globals.css";
import "@/styles/loading.css";

import { Viewport } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";
import { getLangDir } from "rtl-detect";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};
export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  const langDir = getLangDir(locale);

  return (
    <html lang={locale} dir={langDir} suppressHydrationWarning>
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={siteConfig.nextThemeColor}
            enableSystem
          >
            <Suspense>{children}</Suspense>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      {process.env.NODE_ENV === "development" ? (
        <></>
      ) : (
        <>
          <GoogleAnalytics />
        </>
      )}
    </html>
  );
}

