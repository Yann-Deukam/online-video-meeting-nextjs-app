import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-[93%] md:w-[96%] lg:w-[97%] bg-dark-1 px-6 py-4 lg:px-10 m-5">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={28}
          height={28}
          alt="meetingz logo"
          className="max-sm:h-10"
        />
        <p className="mx-5 text-xl font-bold text-white max-sm:hidden">
          Meetingz
        </p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        {/* Clerk user management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
