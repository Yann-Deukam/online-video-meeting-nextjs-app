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
