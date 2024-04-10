"use client";
import { React } from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-bl from-black via-purple-500/30 to-black  align-middle">
      <SignIn />
      <div className="signin-background absolute inset-0 z-[-10] bg-cover bg-center pt-32 text-white"></div>
    </div>
  );
}
