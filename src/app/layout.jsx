"use client";

import "./globals.css";
import React from "react";
import PropTypes from "prop-types";
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
      <html lang="en">
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
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is a required node
};
