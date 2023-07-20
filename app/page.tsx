import Image from "next/image";
import { Metadata } from "next";

import Card from "./components/Card";

export default function Home() {
  return (
    <div className="home">
      <div className="card">
        {/* <Card name="RUTGERS UNIVERSITY" url="/rutgers.jpg" alt="Rutgers" />
        <Card name="CALIFORNIA STATE UNIVERSITY" url="/csu.jpg" alt="CSU" />
        <Card name="PENN STATE" url="/psu.jpg" alt="Penn State" /> */}
        <Card />
      </div>
    </div>
  );
}

const APP_NAME = "next-pwa example";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

export const metadata: Metadata = {
  title: "VIIE",
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};
