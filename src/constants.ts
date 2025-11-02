import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconX from "@/assets/icons/IconX.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconRss from "@/assets/icons/IconRss.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/ryan.parkr",
    linkTitle: `${SITE.title} on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "Github",
    href: "https://github.com/RyanParkr1",
    linkTitle: `${SITE.title} on Github`,
    icon: IconGithub,
  },
  {
    name: "Mail",
    href: "mailto:admin@ryanparkr.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "RSS",
    href: "https://ryanparkr.com/rss.xml",
    linkTitle: `${SITE.title} RSS Feed`,
    icon: IconRss,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
