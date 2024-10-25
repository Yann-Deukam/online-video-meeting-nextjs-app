import {
  Calendar,
  Home,
  Undo2,
  UserRoundCog,
  UserRoundPlus,
  Videotape,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    icon: Home,
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    icon: Calendar,
  },
  {
    label: "Previous",
    route: "/previous",
    icon: Undo2,
  },
  {
    label: "Recordings",
    route: "/recordings",
    icon: Videotape,
  },
  {
    label: "Personal room",
    route: "/personal-room",
    icon: UserRoundPlus,
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
