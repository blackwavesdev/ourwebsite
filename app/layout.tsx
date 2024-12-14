/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Waves",
  description:
    "Digital Marketing Agency, SEO Solutions Innovative Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Black Waves</title>
      <meta name="description" content="We are web developers specialized in designing and developing websites. Learn about our services and products." />
      <meta name="keywords" content="web development, website design, SEO, web applications, technical consulting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us - Web Developers" />
      <meta name="twitter:description" content="We are web developers specialized in designing and developing websites. Learn about our services and products." />
      <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`h-[100dvh] font-Poppins antialiased`}>{children}</body>
    </html>
  );
}
