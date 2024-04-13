"use client";
import { React } from "react";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

export default function NotFoundPage() {
  return (
    <div className="not-found-page-bg flex min-h-[100vh] flex-col items-center justify-center space-y-4 bg-black px-4 pb-12 text-center md:px-6">
      <div className="flex flex-col items-center gap-4 space-y-4">
        <Typography
          variant="h1"
          className="tracking-loose to-gray max-w-[600px] bg-gradient-to-b from-red-800  to-black bg-clip-text py-4  font-bold text-transparent blur-sm md:text-4xl/relaxed  lg:text-5xl/relaxed xl:text-9xl/relaxed"
        >
          404
        </Typography>
        <Typography
          variant="h1"
          className="to-gray max-w-[600px] bg-gradient-to-r from-gray-400 bg-clip-text  font-bold tracking-tighter text-transparent  md:text-4xl/relaxed lg:text-5xl/relaxed xl:text-6xl/relaxed"
        >
          This page does not exist.
        </Typography>
        <div className="flex flex-col items-center gap-4">
          <p className="my-0 max-w-[600px] py-0 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
          <Link href="/">
            <Button
              size="md"
              color="white"
              variant="text"
              className="text-small flex items-center gap-2 rounded-lg px-4 py-3 font-medium normal-case text-gray-500 transition-all  hover:bg-gray-900 hover:text-white "
            >
              <Typography variant="small" className="font-bold tracking-wide ">
                Go Home
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
