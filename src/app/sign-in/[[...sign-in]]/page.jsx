"use client";
import { React } from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center align-middle">
      <SignIn path="/sign-in" />
    </div>
  );
}
