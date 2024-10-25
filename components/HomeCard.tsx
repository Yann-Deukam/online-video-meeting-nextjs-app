import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  Icon?: LucideIcon; // Icon prop to accept any lucide-react icon component
  title: string;
  description: string;
  handleClick?: () => void;
  className: string;
}

const HomeCard = ({
  Icon,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "transition-all ease-in-out duration-150 cursor-pointer px-4 py-6 flex flex-col justify-between w-full xl:max-w-|270px] min-h-64 rounded-lg ",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-lg size-12 backdrop-blur-sm bg-gray-500/30">
        {Icon && <Icon size={32} />}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-normal opacity-2">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
