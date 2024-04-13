"use client";

import { React, useEffect } from "react";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

import { Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const COLORS = ["#445EF2", "#6B7FF2", "#263973", "#010E26", "#05C7F2"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #010E26 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="h-screen w-full  text-white "
    >
      <div className="mx-auto">
        <header className="landing-section h-screen bg-cover">
          <div className="grid min-h-[82vh] w-full place-items-center bg-contain bg-center bg-no-repeat md:h-[34rem] lg:h-[54rem]">
            <div className="container mx-auto px-4 text-center">
              <Typography
                variant="h5"
                className="inline-flex rounded-lg border-[1.5px] border-black/50 bg-gray-700/10 px-2  py-2 text-sm font-medium tracking-wide text-gray-200 ring-2 ring-gray-700/20 lg:px-4"
              >
                Exciting News! Introducing our latest innovation
              </Typography>
              <Typography
                variant="h1"
                className="mx-auto my-10 w-full pb-4 text-5xl leading-loose text-gray-300"
              >
                Enhance your digital safety with ease. Simplify passwords,
                amplify protection.
              </Typography>
              <Typography
                variant="h6"
                className="mx-auto w-full !text-gray-400 drop-shadow-lg lg:text-sm"
              >
                The time is now for it to be okay to be great. For being a
                bright color. For standing out.
              </Typography>
              <div className="mt-8 grid  place-items-center md:justify-center">
                <div className="flex w-full flex-col items-center gap-2 align-middle md:flex-row md:justify-center">
                  <Link href="/sign-in">
                    <motion.button
                      whileHover={{ color: "#fff" }}
                      whileTap={{ scale: 0.985 }}
                      className="w-flex group relative flex items-center gap-2 gap-2 rounded-[0.625rem] border-[1.5px] border-gray-200/10 px-4 py-2 text-gray-500"
                    >
                      <Typography variant="h6" className="text-md">
                        Get start
                      </Typography>
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </motion.section>
  );
}
