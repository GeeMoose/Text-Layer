import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Header />
      <main className="flex flex-col items-center py-6">{children}</main>
      <Footer />
    </div>
  );
}

