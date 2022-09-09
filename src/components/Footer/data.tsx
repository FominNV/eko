import { ReactComponent as Vkontakte } from "assets/icons/vkontakte.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook.svg";
import { ReactComponent as Youtube } from "assets/icons/youtube.svg";
import { ILink } from "./types";

export const dataLinks: ILink[] = [
  {
    path: "https://vk.com",
    icon: <Vkontakte />,
  },
  {
    path: "https://instagram.com",
    icon: <Instagram />,
  },
  {
    path: "https://facebook.com.vn",
    icon: <Facebook />,
  },
  {
    path: "https://www.youtube.com",
    icon: <Youtube />,
  },
];
