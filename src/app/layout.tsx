import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irwanto — Data Analyst & BI Developer",
  description: "Data Analyst & BI Developer specializing in end-to-end analytics — from database engineering to full-stack BI dashboard development.",
  openGraph: {
    title: "Irwanto — Data Analyst & BI Developer",
    description: "Data Analyst & BI Developer specializing in end-to-end analytics — from database engineering to full-stack BI dashboard development.",
    url: "https://irwan-dev.web.app",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
