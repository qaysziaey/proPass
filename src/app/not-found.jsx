"use client";
import "./home.css";
import { React } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center space-y-4 bg-black px-4 pb-12 text-center md:px-6">
      <div className="flex flex-col items-center gap-4 space-y-4">
        <h1 className="gradient py-4 text-9xl font-normal tracking-tighter text-transparent ">
          404
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="pt-4 text-3xl font-normal tracking-tighter text-gray-500">
            This page does not exist.
          </h1>
          <p className="text-xs text-gray-700">
            Sorry, can not find the page you were looking for.
          </p>
        </div>
        <Button
          size="sm"
          className="rounded-full border-[1px] border-gray-800/30 bg-black font-bold normal-case shadow-none hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
        >
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
