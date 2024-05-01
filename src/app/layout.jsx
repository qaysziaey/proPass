"use client";

import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";
import "@fontsource/inter";

const metadata = {
  title: "ProPass",
  description: "A project management tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          {/* <link rel="icon" href="/boxed-logo.png" /> */}
        </head>
        <body>
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
