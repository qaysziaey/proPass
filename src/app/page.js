"use client";

import { React } from "react";
import ProPassSlogan from "../components/ProPassSlogan";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="bg-blurry relative flex h-full w-full items-center  justify-center pt-32 align-middle">
      <div className="container mx-auto text-center sm:px-0 md:px-0 lg:px-40">
        <Typography
          variant="h1"
          className="font-bol py-4 text-5xl tracking-tight"
        >
          Enhance your digital safety with ease.
        </Typography>
        <Typography variant="h6" className="mx-auto w-full text-gray-700">
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </Typography>
        <div className="grid place-items-center  py-12 md:justify-center">
          <div className="flex w-full flex-col items-center gap-2 align-middle md:flex-row md:justify-center">
            <Button
              size="md"
              color="black"
              className="group flex items-center gap-2 rounded-full align-middle normal-case transition-all hover:bg-gray-800"
            >
              <Link href="/sign-in">
                <Typography variant="h6" className=" tracking-wide">
                  Get started
                </Typography>
              </Link>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Button>
          </div>
        </div>
        <ProPassSlogan />
      </div>
      <div className="landing-bg absolute inset-0 z-[-1] h-full w-full items-center justify-center border text-center align-middle"></div>
    </div>
  );
}
