"use client";
import { React } from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center align-middle">
      <SignUp />
      <div className="signin-background absolute inset-0 z-[-10] bg-cover bg-center pt-32 text-gray-900"></div>
    </div>
  );
}
