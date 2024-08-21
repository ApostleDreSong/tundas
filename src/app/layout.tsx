import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tundas Technology",
  description:
    "We specialise in crafting innovative, bespoke payment solutions tailored to the unique needs of businesses across industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="bg-white" style={{ borderRadius: "0px 0px 84px 84px" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
