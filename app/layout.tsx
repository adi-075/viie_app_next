import "./globals.css";
import Navbar from "./Navbar";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
