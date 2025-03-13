"use client";

import React from "react";
import { Timeline } from "@/components/effects/timeline";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Image } from "@heroui/react";

const AboutPage: React.FC = () => {
  const data = [
    {
      title: "Late 2024",
      content: (
        <div>
          <p className=" text-xs md:text-sm font-normal mb-8">
            Iuri came up with the idea of Robotics Club to let every student in
            the university be able to utilize the resources from the university
            to collbarate and build projects to advance their learning to the
            next level
          </p>

          <div className="flex flex-wrap w-full gap-4">
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/iuri_looking_at_board.jpg?raw=true"
              alt="Images"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/monitor-working.jpg?raw=true"
              alt="Images"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/working2.jpg?raw=true"
              alt="Images"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/wonderful_working_culture.jpg?raw=true"
              alt="Images"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className=" text-xs md:text-sm font-normal mb-8">
            Robotic club is launched!
          </p>
          <p className=" text-xs md:text-sm font-normal mb-8">
            Since then we are running multiple projects in the club
          </p>
          <div className="flex flex-wrap w-full gap-4">
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/2peopleworking.jpg?raw=true"
              alt="hero template"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/arduino.jpg?raw=true"
              alt="feature template"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/crowded_room.jpg?raw=true"
              alt="bento template"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://github.com/yuehanjohn/robotics-club/blob/main/images/david_drawing.jpg?raw=true"
              alt="cards template"
              width={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div>
          <h1 className="text-3xl">We need you!</h1>
          <p className="font-normal mb-8">
            To build the future of robotics club with us!
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-fit">
        <Timeline data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
