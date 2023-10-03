import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Goa Beyond",
  description: "Luxurious Villa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar></Navbar>
        {children}
        <Footer></Footer> 
      </body>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NNE2C915TF"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {
        `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NNE2C915TF');
        `}
      </Script>
    </html>
  );
}
