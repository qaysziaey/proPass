"use client";
import { useState, useEffect, React } from "react";
import Link from "next/link";
import Image from "next/image";
import appLogoWhite from "../../public/logo.png";
import { Bars_Fas as HamBurger } from "iconview/svgs/Bars_Fas";
import { Xmark_Fas as XMark } from "iconview/svgs/Xmark_Fas";

// CLERK
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// MATERIAL TAILWIND
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";

// ICONS
import {
  UserGroupIcon,
  UsersIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

// NAVBAR
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
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Dashboard",
      href: "/dashboard",
      icon: SquaresPlusIcon,
    },
    {
      id: 3,
      name: "Member",
      href: "/user/users",
      icon: UsersIcon,
    },
    {
      id: 4,
      name: "Team",
      href: "/groups",
      icon: UserGroupIcon,
    },
    {
      id: 5,
      name: "Form",
      href: "/user-form",
    },
  ];

  return (
    <Navbar
      shadow={false}
      fullWidth
      className=" nav-bg fixed top-0 z-10 border-0 border-b border-gray-200/60 px-0"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/">
          <Image
            src={appLogoWhite}
            alt="ProPass logo"
            width={100}
            height={10}
          />
        </Link>

        {isLoaded && isSignedIn && (
          <ul className="flex hidden flex-1 items-center gap-2 pl-6 lg:flex">
            {navItems.map((item) => (
              <li
                className="relative flex flex-row items-center gap-2 rounded-full px-3 py-[0.4rem] text-sm text-gray-600 duration-300 ease-in-out  hover:bg-gray-300/40 hover:text-gray-900"
                key={item.id}
              >
                <Link
                  href={item.href}
                  className="group flex flex-row items-center gap-2"
                >
                  {item.icon && (
                    <item.icon className="h-5 w-5 rounded-md border-[0.5px] border-gray-900/10 bg-white text-gray-900 transition-all duration-300 ease-in-out" />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="hidden items-center gap-2 text-gray-600 lg:flex">
          <SignedOut>
            <SignInButton className="rounded-full  border-[1px] border-gray-900/5 px-4 py-1 text-gray-700 shadow-none transition-all hover:border-white hover:bg-white hover:text-gray-900 hover:shadow-md hover:ring-2 hover:ring-gray-800/5" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        <div className="flex items-center gap-2 lg:hidden ">
          <div className="flex items-center gap-2 ">
            <SignedOut>
              <SignInButton className="rounded-full bg-gray-900 px-4 py-2 text-white transition-all ease-in-out hover:bg-gray-800 hover:shadow-md" />
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
        <div className="container mx-auto mt-3 border-t border-gray-900 bg-white px-0 py-0">
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
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}
