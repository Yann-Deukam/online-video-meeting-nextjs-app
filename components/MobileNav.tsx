"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="text-white sm:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1 my-1">
            <Image
              src="/icons/logo.svg"
              width={28}
              height={28}
              alt="meetingz logo"
              className="max-sm:h-10"
            />
            <p className="mx-5 text-xl font-bold text-white">Meetingz</p>
          </Link>
          <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
            <SheetClose>
              <section className="flex h-full flex-col gap-6 pt-16 text-white ml-4">
                {sidebarLinks.map((link) => {
                  const isActive =
                    // pathname === link.route || pathname.startsWith(link.route);
                    pathname === link.route ||
                    (link.route !== "/" && pathname.startsWith(link.route));

                  const Icon = link.icon;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center -mx-2 p-4 rounded-lg w-full max-w-60 hover:bg-slate-800 transition-all ease-in-out duration-100",
                          {
                            "bg-blue-500 hover:bg-blue-600": isActive,
                          }
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
