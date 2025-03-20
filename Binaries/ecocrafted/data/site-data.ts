import {
  BoxIcon,
  FileClockIcon,
  GlobeLockIcon,
  HandshakeIcon,
  HouseIcon,
  ImagePlayIcon,
  LucideIcon,
  PenLineIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react"

type SiteMeta = {
  title: string
  description: string
  href: string
  category?: category[]
  pos?: number
  external?: boolean
  icon?: LucideIcon
}

export type category = "Site" | "Resources" | "Support" | "Legal" | "More"

export const SiteData = {
  name: "EcoCrafted",
  description:
    "Experience the artistry of handcrafted creations — Unique Handmade Items.",
  keywords: [
    "Handcrafted",
    "Artisanal",
    "Sustainable",
    "Eco-Friendly",
    "Unique",
    "Handmade",
    "Crafts",
  ],
}

export const SiteMeta: SiteMeta[] = [
  {
    title: "Home",
    description: "Unique Handmade Items",
    href: "/",
    category: ["Site"],
    pos: 1,
    icon: HouseIcon,
  },
  {
    title: "Products",
    description: "Browse through the collection of handcrafted items.",
    href: "/products",
    category: ["Resources"],
    pos: 2,
    icon: BoxIcon,
  },
  {
    title: "Contact",
    description: "Contact for any queries or collaborations.",
    href: "/contact",
    category: ["Support"],
    pos: 5,
    icon: PhoneIcon,
  },
  {
    title: "Privacy Policy",
    description: "Read the privacy policy and data protection guidelines.",
    href: "/privacy-policy",
    category: ["Legal"],
    icon: GlobeLockIcon,
  },
  {
    title: "Terms of Use",
    description: "Read the terms of use and service guidelines.",
    href: "/terms-of-use",
    category: ["Legal"],
    icon: HandshakeIcon,
  },
]
