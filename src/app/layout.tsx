
import type {Metadata, Viewport} from "next";
import {Montserrat, Inter} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mcadesoftware.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "McAde Software | Technology That Moves Business Forward",
    template: "%s | McAde Software",
  },

  description:
    "McAde Software builds innovative mobile applications, web platforms and custom software solutions that help businesses grow and move forward.",

  applicationName: "McAde Software",

  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "custom software",
    "software engineering",
    "Nigeria",
  ],

  authors: [
    {
      name: "McAde Software",
    },
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "McAde Software",
    title:
      "McAde Software | Technology That Moves Business Forward",
    description:
      "Innovative software solutions for businesses, startups and individuals.",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "McAde Software",
    description:
      "Technology That Moves Business Forward.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07182E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
