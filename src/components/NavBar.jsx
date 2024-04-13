"use client";
import { useState, useEffect, React } from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";
import appLogoWhite from "../../public/logo-white.png";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import {
  UserIcon,
  UserGroupIcon,
  HomeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import { Bars_Fas as HamBurger } from "iconview/svgs/Bars_Fas";

import { Xmark_Fas as XMark } from "iconview/svgs/Xmark_Fas";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  const handleOpen = () => setOpen((cur) => !cur);

  // On resize, if the screen is wider than 960px, close the navbar if it's open.
  // This is to prevent the navbar from staying open when the user resizes the
  // window from a small mobile size to a larger size.
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [open]);

  const navItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
      icon: <HomeIcon className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 2,
      name: "Dashboard",
      href: "/dashboard",
      icon: <Squares2X2Icon className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 3,
      name: "Users",
      href: "/user/users",
      icon: <UserIcon className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 4,
      name: "Groups",
      href: "/groups",
      icon: <UserGroupIcon className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 5,
      name: "Form",
      href: "/user-form",
      icon: <UserGroupIcon className="h-5 w-5 text-gray-600" />,
    },
  ];

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="fixed top-0 z-50 border-0 border-b border-gray-900 bg-black px-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={appLogoWhite}
            alt="ProPass logo"
            width={100}
            height={10}
          />
        </Link>

        {isLoaded && isSignedIn && (
          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li className="flex flex-row items-center gap-2" key={item.id}>
                <Link
                  href={item.href}
                  className="flex flex-row items-center gap-2"
                >
                  {item.icon}
                  <Typography
                    href={item.href}
                    variant="h6"
                    className="text-gray-400 transition-all hover:text-white"
                  >
                    {item.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="hidden items-center gap-2 lg:flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="flex items-center gap-2 lg:hidden ">
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
          <div>
            <IconButton
              variant="filled"
              color="white"
              onClick={handleOpen}
              className="ml-auto inline-block rounded-full bg-gray-900 text-white lg:hidden"
            >
              {open ? <XMark /> : <HamBurger />}
            </IconButton>
          </div>
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-900 px-0 py-0">
          <ul className="flex flex-col gap-0">
            {navItems.map((item) => (
              <li
                className="flex flex-row items-center gap-2 py-5 pl-8 transition-all hover:bg-gray-900/40 "
                key={item.id}
              >
                <Link
                  href={item.href}
                  className="flex flex-row items-center gap-2"
                >
                  {item.icon}
                  <Typography
                    href={item.href}
                    variant="h6"
                    className="text-gray-400 transition-all hover:text-white"
                  >
                    {item.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}
