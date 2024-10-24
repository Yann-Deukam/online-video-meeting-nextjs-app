"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 mt-[118px] flex h-[60vh] w-fit flex-col justify-between bg-dark-1 m-5 p-6 text-white max-sm:hidden lg:w-[260px] rounded-md">
      <div className="flex flex-1 flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive =
            // pathname === link.route || pathname.startsWith(link.route);
            pathname === link.route ||
            (link.route !== "/" && pathname.startsWith(link.route));

          const Icon = link.icon;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center -mx-2 p-4 rounded-lg justify-start hover:bg-slate-800 transition-all ease-in-out duration-100",
                {
                  "bg-blue-500 hover:bg-blue-600": isActive,
                }
              )}
            >
              <Icon className="w-6 h-6" />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
