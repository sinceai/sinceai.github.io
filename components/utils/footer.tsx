"use client";

import type { NextPage } from "next";
import { FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/utils/logo";
import Copyright from "./copyright";
import Link from "next/link";
import { Divider } from "@heroui/react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import versionData from "@/version.json";
import { FaLinkedin } from "react-icons/fa";


const Footer: NextPage = () => {
  const router = useRouter();

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
  };

  const toInstagram = () => {
    window.location.href = "https://www.instagram.com/since_ai/";
  };

  const toLinkedin = () => {
    window.location.href = "https://www.linkedin.com/company/sinceai/about/?viewAsMember=true";
  };

  return (
    <div className="flex flex-col items-start justify-start w-full h-fit bg-black">
      <div className="flex flex-wrap items-start justify-start w-full h-fit px-8 py-8 gap-20">
        <div className="flex flex-col items-start justify-center w-fit h-fit p-4 gap-4">
          <div className="">
            <Logo />
          </div>
          <div className="color-text-background headingXXSmall">
            Build the future with us!
          </div>
          <div className="flex flex-wrap items-start justify-start w-full h-fit gap-2">
            <Button onPress={toInstagram} isIconOnly variant="ghost">
              <FaInstagram size={"18"} />
            </Button>
            <Button onPress={toDiscord} isIconOnly variant="ghost">
              <FaDiscord size={"18"} />
            </Button>
            <Button onPress={toLinkedin} isIconOnly variant="ghost">
              <FaLinkedin size={"18"} />
            </Button>
          </div>
        </div>
        {/* <div className="flex flex-col items-start justify-center w-fit h-fit p-4">
          <div className="color-text-background headingXXSmall pb-1">
            Contact
          </div>
          <div className="color-text-info paragraphSmall">
            Instagram: clubrobotic41
          </div>
          <div
            onClick={toContact}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            Contacts
          </div>
        </div> */}
        {/* <div className="flex flex-col items-start justify-center w-fit h-fit p-4 gap-1">
          <div className="color-text-background headingXXSmall pb-1">Pages</div>
          <div
            onClick={toHome}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            Home
          </div>
          <div
            onClick={toEvents}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            Events
          </div>
          <div
            onClick={toProjects}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            Projects
          </div>
          <div
            onClick={toTeam}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            Team
          </div>
          <div
            onClick={toAbout}
            className="color-text-info paragraphSmall cursor-pointer hover:underline"
          >
            About
          </div>
        </div> */}
      </div>
      <Divider />
      <div className="flex flex-row w-full items-center justify-between h-fit px-8">
        <div className="p-4">
          <Copyright />
        </div>
        <div className="p-4 color-text-info paragraphSmall">
          <span>Version {versionData.version}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
