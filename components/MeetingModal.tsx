import { LucideIcon } from "lucide-react";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleClick?: () => void;
  className?: string;
  children?: ReactNode;
  title: string;
  buttonText?: string;
  Icon?: LucideIcon;
  ButtonIcon?: LucideIcon;
}
const MeetingModal = ({
  isOpen,
  onClose,
  handleClick,
  className,
  children,
  title,
  buttonText,
  Icon,
  ButtonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white ">
        <div className="flex flex-col gap-6">
          {Icon && (
            <div className="flex justify-center">
              <Icon size={50} className="text-teal-400" />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-8", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-150 focus-visible:ring-0"
            onClick={handleClick}
          >
            {ButtonIcon && <ButtonIcon size={24} className="font-extrabold" />}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
