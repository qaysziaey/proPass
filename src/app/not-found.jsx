"use client";
import "./home.css";
import { React } from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center space-y-4 bg-white px-4 pb-12 text-center md:px-6">
      <div className="flex flex-col items-center gap-4 space-y-4">
        <Typography
          variant="h1"
          className="tracking-loose to-gray max-w-[600px] bg-gradient-to-b from-gray-400  to-white bg-clip-text py-4  font-bold text-transparent blur-sm md:text-4xl/relaxed  lg:text-5xl/relaxed xl:text-9xl/relaxed"
        >
          404
        </Typography>
        <h1 className="gradient py-4 text-3xl font-bold  tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl/none">
          This page does not exist.
        </h1>
        <p className="text-md mt-2 pt-2 text-gray-700">
          Sorry, can not find the page you were looking for.
        </p>
        <Link href="/">
          <Button
            size="sm"
            color="black"
            className="group flex items-center gap-2 rounded-full border-[1px] border-gray-300 bg-white normal-case text-gray-700 shadow-none ring-4 ring-gray-200/40 transition-all hover:border-white hover:bg-white hover:text-gray-900 hover:shadow-md hover:shadow-cyan-800/20 "
          >
            <Link href="/sign-in">
              <Typography variant="h6" className=" tracking-wide">
                Go Home
              </Typography>
            </Link>
          </Button>
        </Link>
      </div>
    </div>
  );
}
