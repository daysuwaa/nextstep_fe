import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Momento",
  description:
    "Capture Moments.Reflect.Grow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Momento",
    description:
      "Capture Moments.Reflect.Grow",
    url: "https://nextstep-fe.onrender.com",
    type: "website",
    images: [
      {
        url: "https://nextstep-fe.onrender.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Montent fka nexstep",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
     
    </html>
  );
}
