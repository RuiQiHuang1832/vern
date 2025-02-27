import Navigation from "@/components/Navigation";
import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import classNames from "classnames";
import { WEBSITE_NAME } from "@/global/global";

//allows painless use of bootstrap without worrying about client/server components
//doesn't require useEffect/dynamic
//works with server components, however, if I choose to use 'use client' & useEffect, it would work as well because any componenet inside children tree can be a server component
import Script from "next/script";

const lexendDeca = Lexend_Deca({ subsets: ["latin"], display:'swap' });
//Defaults
export const metadata: Metadata = {
  title: `${WEBSITE_NAME} - Your Playlist Playground`,
  description: "Personal Media Catalog & Reviews Hub",
};

const body = classNames("default-bg-color overflow-x-hidden")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html className="h-100" lang="en">
      <body  className={`${lexendDeca.className} ${body}`}>
        <Navigation hidden={true} />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
