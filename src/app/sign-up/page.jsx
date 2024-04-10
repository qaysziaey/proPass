"use client";
import { React, useEffect } from "react";
import { SignUp } from "@clerk/nextjs";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
const COLORS = ["#445EF2", "#6B7FF2", "#263973", "#010E26", "#05C7F2"];

export default function Page() {
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
    <motion.div
      className="flex h-screen items-center justify-center bg-gray-900 align-middle"
      style={{ backgroundImage }}
    >
      <SignUp />
    </motion.div>
  );
}
