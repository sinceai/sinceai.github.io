"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HeroUIProvider,
  Image,
} from "@heroui/react";
import { LampContainer } from "@/components/effects/lamp";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Accordion, AccordionItem, Chip } from "@heroui/react";
import { AnimatePresence } from "framer-motion";
import Logo from "@/components/utils/logo";

import Preloader from "@/components/utils/Preloader";
import SmoothScroll from "@/components/utils/smoothScroll";
import Projects from "@/components/projects";
import dynamic from "next/dynamic";
import { Arcs } from "@/components/data/data";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { NumberTicker } from "@/components/effects/number_ticker";
import { GoPlus } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const World = dynamic(() => import("@/components/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [startLoading, setStartLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      await setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2100);

      await setTimeout(() => {
        setStartLoading(false);
      }, 2500);
    })();
  }, []);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <HeroUIProvider>
      <AnimatePresence mode="wait">
        {startLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <div className="min-h-screen justify-between flex flex-col w-full items-center">
          <Navbar />
          <section
            className="flex flex-row w-full h-[calc(100vh-4rem)] items-center justify-center"
            style={{ maxWidth: "1400px" }}
          >
            <div className="flex flex-row w-full h-full items-center justify-center p-8 py-16">
              <div className="flex flex-col flex-[2] justify-between w-full h-full gap-4">
                <span className="flex flex-col gap-4">
                  <span className="flex flex-row items-end gap-2">
                    <Logo className="text-7xl" />
                    <span className="text-5xl pb-2">is Here</span>
                  </span>
                  <span className="flex flex-row gap-2">
                    <span className="text-3xl font-bold">Why not join?</span>
                    <Button color="secondary" className="z-20">
                      Join Now
                    </Button>
                  </span>
                  <Card
                    isBlurred
                    className="z-20 border border-content1 bg-background/60 dark:bg-default-100/50 max-w-[400px]"
                  >
                    <CardHeader>
                      <span className="text-2xl font-bold">
                        3 days AI Hackathon
                      </span>
                    </CardHeader>
                    <CardBody>
                      <div className="flex flex-col gap-4">
                        We cover GPUs, APIs, Foods, Drinks, and more! All you
                        need is passion and knowledge
                      </div>
                    </CardBody>
                  </Card>
                </span>
              </div>
              <div className="flex flex-col flex-[1] w-full h-full justify-start gap-4 items-end">
                <Card
                  isHoverable
                  isBlurred
                  className="z-20 border border-content1 bg-background/60 max-w-[400px] shadow-white"
                  shadow="lg"
                >
                  {" "}
                  <CardBody>
                    <div className="flex flex-row items-end">
                      <NumberTicker
                        value={200}
                        className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
                        delay={1.5}
                      />
                      <GoPlus size={60} />
                      <span className="text-3xl pb-2"> AI Enthusiast</span>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  isHoverable
                  isBlurred
                  className="z-20 border border-content1 bg-background/60 dark:bg-default-100/50 max-w-[400px]"
                >
                  {" "}
                  <CardHeader>What's included?</CardHeader>
                  <CardBody className="flex flex-row flex-wrap w-[300] gap-1">
                    <Chip color="primary" variant="flat">
                      Foods
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Drinks
                    </Chip>

                    <Chip color="secondary" variant="flat">
                      GPUs
                    </Chip>

                    <Chip color="secondary" variant="flat">
                      APIs
                    </Chip>

                    <Chip color="primary" variant="flat">
                      Space
                    </Chip>

                    <span>more coming up...</span>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="absolute flex flex-row items-center justify-center h-[calc(100vh-4rem)] bg-transparent w-full">
              <div className="w-full mx-auto relative overflow-hidden h-full px-4">
                <div className="absolute w-full bottom-0 inset-x-0 h-full bg-gradient-to-b pointer-events-none select-none from-transparent to-primary/20 z-40" />
                <div className="absolute w-full h-full z-10">
                  <World data={Arcs} globeConfig={globeConfig} />
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center w-full max-w-[1300] ">
            <section className="flex flex-col items-center justify-center w-full gap-4 p-8">
              <span className="text-3xl font-bold ">
                Frequently asked questions
              </span>
              <div className="flex flex-col items-center justify-center w-full">
                <Accordion>
                  <AccordionItem
                    key="1"
                    aria-label="Is it free to join?"
                    subtitle="Good question."
                    title="Is it free to join?"
                  >
                    We don't charge anything, but I don't mind you buy me a shot
                    or two
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="How do I join?"
                    subtitle={<span>Just join the Whatsapp Group</span>}
                    title="How do I join?"
                  >
                    Yeah, Just join the whatsapp group
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="How do I start a project through Robotic Club?"
                    subtitle="Reach out to us"
                    title="How do I start a project through Robotic Club?"
                  >
                    Just reach out to any of our board members or send a message
                    in our discord or whatsapp group , we'll be in touch with
                    you!
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="What kind of project can I start?"
                    subtitle="All kind of ideas are welcome"
                    title="What kind of project can I start?"
                  >
                    We're pretty much open to all kind of ideas, software,
                    hardware, events, music or anything? Just reach out to us
                    and we'll discuss the possibilities. Don't be shy, we wno't
                    bite you,.. I think
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      )}
    </HeroUIProvider>
  );
}
