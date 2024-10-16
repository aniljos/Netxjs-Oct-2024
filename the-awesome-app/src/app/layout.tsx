import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ReduxProvider from "@/redux/ReduxProvider";
import AppBar from "@/components/AppBar";
import { AppThemeContextProvider } from "@/context/AppThemeContext";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextjs Training",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <ReduxProvider>
          <AppThemeContextProvider>
            <div className="container">
              <AppBar />
              <main>
                {children}
              </main>
            </div>
          </AppThemeContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
