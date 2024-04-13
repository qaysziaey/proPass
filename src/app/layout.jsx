"use client";

import "./globals.css";
import React from "react";
import PropTypes from "prop-types";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "ProPass",
  description: "A project management tool",
};

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key");
}
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          {/* <link rel="icon" href="/boxed-logo.png" /> */}
        </head>
        <body className={inter.className}>
          <main>
            <NavBar />
          </main>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is a required node
};
