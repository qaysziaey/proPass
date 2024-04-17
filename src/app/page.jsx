"use client";

import { React } from "react";
import ProPassSlogan from "../components/ProPassSlogan";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="bg-blurry relative flex h-full w-full items-center  justify-center pt-32 align-middle  sm:pb-12 md:pb-12">
      <div className="container mx-auto text-center sm:px-0 md:px-0 lg:px-40">
        <h1 className="gradient text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Enhance your digital safety with ease.
        </h1>
        <p className="text-md mt-2 pt-2 text-gray-700">
          Empower yourself online with our straightforward solutions. Stay
          secure effortlessly.
        </p>

        <div className="grid place-items-center  py-12 md:justify-center">
          <div className="flex w-full flex-col items-center gap-2 align-middle md:flex-row md:justify-center">
            <Button
              size="md"
              color="black"
              className="group flex items-center gap-2 rounded-lg  border-[1px] border-gray-400 bg-white normal-case text-gray-700 shadow-none transition-all hover:border-white hover:bg-white hover:text-gray-900 hover:shadow-md hover:shadow-cyan-800/20 hover:ring-4 hover:ring-gray-800/5"
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
    </div>
  );
}
