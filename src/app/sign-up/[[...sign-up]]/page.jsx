"use client";
import { React } from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center align-middle">
      <SignUp path="/sign-up" />
    </div>
  );
}
