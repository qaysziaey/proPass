"use client";
import { React } from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export default function NotFoundPage() {
  return (
    <div className="not-found-page-bg flex min-h-[100vh] flex-col items-center justify-center space-y-4 px-4 pb-12 text-center md:px-6">
      <div className="flex flex-col items-center gap-4 space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-200 sm:text-5xl/none md:text-6xl/none">
          404
        </h1>
        <Typography
          variant="h1"
          className="to-gray max-w-[600px] bg-gradient-to-r from-gray-300 bg-clip-text py-4 text-3xl font-bold tracking-tighter text-transparent md:text-7xl/relaxed lg:text-8xl/relaxed xl:text-9xl/relaxed"
        >
          This page does not exist.
        </Typography>
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sorry, we couldn't find the page you were looking for.
          </p>
          <Link href="/">
            <Button
              size="md"
              color="white"
              variant="text"
              className="text-small flex items-center gap-2 rounded-lg px-4 py-3 font-medium normal-case transition-all  hover:bg-white "
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
