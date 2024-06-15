import jsonEn from "@/messages/en.json";
import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
const OPEN_SOURCE_URL = "https://github.com/Deniffer";
const baseSiteConfig = {
  name: jsonEn.MetaData.title,
  description: jsonEn.MetaData.description,
  url: "https://i18n-translate.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: jsonEn.MetaData.keywords,
  authors: [
    {
      name: "deniffer",
      url: "https://blog.deniffer.com",
      twitter: "https://twitter.com/deniffer_001",
    },
  ],
  creator: "@deniffer",

  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/deniffer_001",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/deniffer",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:deniffer.001@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/deniffer_001",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/Deniffer/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/deniffer",
      icon: SiBuymeacoffee,
    },
  ],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

