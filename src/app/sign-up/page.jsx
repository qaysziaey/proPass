"use client";
import { React } from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="via-gray-white flex h-screen items-center justify-center bg-gradient-to-bl from-white/20 to-white  align-middle">
      <SignUp />
      <div className="signin-background absolute inset-0 z-[-10] bg-gray-200 bg-cover bg-center pt-32 text-white"></div>
    </div>
  );
}
