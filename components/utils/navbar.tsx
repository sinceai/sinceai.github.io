"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu as NextUINavbarMenu,
  NavbarContent,
  NavbarItem,
  Badge,
} from "@heroui/react";
import Logo from "./logo";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@heroui/button";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer color-text-surface hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="color-surface backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="w-auto gap-10 relative rounded-full border bg-[--surface, 8] border-white/[0.2] shadow-input flex justify-center px-2 py-6 backdrop-blur-3xl"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 color-text-surface hover:text-[--primary]">
          {title}
        </h4>
        <p className="color-text-info text-sm max-w-[10rem]">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="color-text-surface hover:text-[--primary]">
      {children}
    </Link>
  );
};

import { FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const toHome = () => {
    router.push("/");
  };

  const toAbout = () => {
    router.push("/about");
  };

  const toEvents = () => {
    router.push("/events");
  };

  const toContact = () => {
    router.push("/contact");
  };

  const toProjects = () => {
    router.push("/projects");
  };

  const toTeam = () => {
    router.push("/team");
  };

  const toDiscord = () => {
    window.location.href = "https://discord.gg/KV9zD7bDjw";
  };

  const toInstagram = () => {
    window.location.href = "https://www.instagram.com/clubrobotic41/";
  };

  const toWhatsapp = () => {
    window.location.href = "https://wa.me";
  };

  const toApply = () => {
    window.location.href = "https://lu.ma/2vs4wsjr";
  };


  const toPartners = () => {
    window.location.href = "https://wa.me";
  };



  return (
    <>
      <NextUINavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand onClick={toHome} className="cursor-pointer">
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="center">
          <ButtonGroup variant="light">
            <Button onPress={toDiscord}>Community</Button>
            <Button onPress={toApply}>Apply</Button>
          </ButtonGroup>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <div className="flex flex-row items-center gap-4">
            <Button variant="light" isIconOnly onPress={toInstagram}>
              <FaInstagram size={24} />
            </Button>
            <Button variant="light" isIconOnly onPress={toDiscord}>
              <FaDiscord size={24} />
            </Button>
            <Button variant="light" isIconOnly onPress={toWhatsapp}>
              <FaWhatsapp size={24} />
            </Button>
          </div>
        </NavbarContent>

        <NextUINavbarMenu>
          <>
            <NavbarMenuItem onClick={toHome}>Home</NavbarMenuItem>
            <NavbarMenuItem onClick={toDiscord}>Community</NavbarMenuItem>
            <NavbarMenuItem onClick={toApply}>Apply</NavbarMenuItem>

            <NavbarMenuItem className="color-primary" onClick={toDiscord}>
              Discord
            </NavbarMenuItem>
            <NavbarMenuItem className="color-primary" onClick={toInstagram}>
              Instagram
            </NavbarMenuItem>
            <NavbarMenuItem className="color-primary" onClick={toWhatsapp}>
              Whatsapp
            </NavbarMenuItem>
          </>
        </NextUINavbarMenu>
      </NextUINavbar>
    </>
  );
}

export default Navbar;
