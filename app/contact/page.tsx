"use client";

import React from "react";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Button } from "@heroui/react";

const ContactPage: React.FC = () => {
  const toDiscord = () => {
    window.location.href = "https://discord.gg/KV9zD7bDjw";
  };

  const toInstagram = () => {
    window.location.href = "https://www.instagram.com/clubrobotic41/";
  };

  const toWhatsapp = () => {
    window.location.href = "https://wa.me";
  };

  return (
    <div className="min-h-screen justify-between flex flex-col w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 gap-4 flex flex-col items-start justify-center">
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">Contact us</h2>
        <p className="text-current text-sm md:text-base max-w-sm">
          Robotics Club! Build robots, learn tech, and compete in Europe! Join
          us at ICT_2040.
        </p>
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
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
