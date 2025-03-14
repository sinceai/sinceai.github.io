"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  HeroUIProvider,
  Image,
  Link,
  Divider,
  Input,
  Avatar,
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
import educity from "@/public/assets/images/educity.jpg";
import { IoIosSend } from "react-icons/io";

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
    initialPosition: { lat: 60.454510, lng: 22.264824},
    autoRotate: true,
    autoRotateSpeed: 0.2,
  };

  return (
    <HeroUIProvider>
      <AnimatePresence mode="wait">
        {startLoading && <Preloader />}
      </AnimatePresence>
      
        <div className="min-h-screen justify-between flex flex-col w-full items-center">
          <Navbar />
          <section
            className="flex flex-row w-full h-fit items-center justify-center"
            style={{ maxWidth: "1536px" }}
          >
            <div className="flex flex-row flex-wrap w-full h-full items-center justify-center p-8 py-16 gap-4">
              <div className="flex flex-col flex-[2] justify-between w-full h-full gap-4 items-center md:items-start">
                <span className="flex flex-col gap-4">
                  <span className="flex flex-row items-end gap-2">
                    <Logo className="text-6xl" />
                    <span className="text-4xl">is Here</span>
                  </span>
                  <span className="flex flex-row gap-2">
                    <span className="text-3xl font-bold items-center justify-center">
                      Why not{" "}
                      <Link
                        color="secondary"
                        className="text-3xl z-20"
                        underline="hover"
                      >
                        Join
                      </Link>
                      ?
                    </span>
                  </span>

                  <Card
                    isBlurred
                    className="z-20 border border-content1 bg-background/60 dark:bg-default-100/50 max-w-[400px]"
                  >
                    <CardHeader>
                      <span className="text-sm font-bold">
                        3 days AI Hackathon
                      </span>
                    </CardHeader>
                    <CardBody>
                      <div className="text-sm flex flex-col gap-4">
                        We cover GPUs, APIs, Foods, Drinks, and more! All you
                        need is passion and knowledge
                      </div>
                    </CardBody>
                  </Card>
                </span>
                <div>
                  <Card
                    isBlurred
                    className="z-20 border border-content1 bg-background/60 max-w-[400px] shadow-white"
                    shadow="lg"
                  >
                    <CardBody className="flex flex-col gap-2">
                      <div className="flex flex-row items-start gap-2">
                        <div>
                          <Avatar
                            className="bg-gradient-to-r from-primary to-secondary"
                            name="SA"
                          />
                        </div>
                        <Card>
                          <CardBody>
                            Watch here, Ask me anything, there's nothing much on
                            this website, and don't even compare me with any
                            other stupid chatbot on other website, WE ARE NOT
                            THE SAME. you got questions? ask me.
                          </CardBody>
                        </Card>
                        <div>
                          <Avatar className="bg-transparent" name=" " />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-end gap-2 w-full">
                        <div>
                          <Avatar className="bg-transparent" name=" " />
                        </div>
                        <Card className="bg-transparent" shadow="none">
                          <CardBody>Okay? understand..</CardBody>
                        </Card>
                        <div>
                          <Avatar
                            className="bg-gradient-to-r from-secondary to-primary"
                            name="You"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start gap-2">
                        <div>
                          <Avatar
                            className="bg-gradient-to-r from-primary to-secondary"
                            name="SA"
                          />
                        </div>
                        <Card>
                          <CardBody>Good, so how can I help?</CardBody>
                        </Card>
                        <div>
                          <Avatar className="bg-transparent" name=" " />
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Input
                        endContent={
                          <Button isIconOnly variant="light">
                            <IoIosSend />
                          </Button>
                        }
                      />
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col flex-[1] w-full h-fit justify-start gap-4 items-center md:items-end">
              <Card
                  isHoverable
                  isBlurred
                  className="flex w-full md:w-fit  z-20 border border-content1 bg-background/60 max-w-[500px] shadow-white"
                  shadow="lg"
                >
                  {" "}
                  <CardBody>
                    <div className="flex flex-row items-end">
                      <NumberTicker
                        value={10000}
                        className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-white"
                        delay={3.5}
                      />
                      <MdAttachMoney size={60} />
                      <span className="text-3xl pb-2">Prize Pool</span>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  isHoverable
                  isBlurred
                  className="flex w-full md:w-fit z-20 border border-content1 bg-background/60 max-w-[450px] shadow-white"
                  shadow="lg"
                >
                  {" "}
                  <CardBody>
                    <div className="flex flex-row items-end">
                      <NumberTicker
                        value={200}
                        className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-white"
                        delay={3.5}
                      />
                      <GoPlus size={60} />
                      <span className="text-3xl pb-2"> AI Enthusiast</span>
                    </div>
                  </CardBody>
                </Card>
                
                <Card
                  isFooterBlurred
                  className="w-fit h-[300px] col-span-12 sm:col-span-7 z-20"
                >
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      Your day your way
                    </p>
                    <h4 className="text-white/90 font-medium text-xl">
                      Your checklist for better sleep
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    src={educity.src}
                    className="z-30 object-cover w-full h-full"
                  />
                  <CardFooter className="flex flex-col items-start absolute bg-black/40 bottom-0 z-40 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-row items-center gap-2">
                      <Button isIconOnly variant="light">
                        <IoLocationSharp size={24} />
                      </Button>
                      <span>Edu city, Turku, Finland</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Button isIconOnly variant="light">
                        <MdDateRange size={24} />
                      </Button>
                      <span>In 3 - 5 months</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card
                  isHoverable
                  isBlurred
                  className="flex w-full z-20 border border-content1 bg-background/60 dark:bg-default-100/50 max-w-[400px]"
                >
                  {" "}
                  <CardHeader>What's included?</CardHeader>
                  <CardBody className="flex flex-row flex-wrap  gap-1">
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

          <Footer />
        </div>
      
    </HeroUIProvider>
  );
}
