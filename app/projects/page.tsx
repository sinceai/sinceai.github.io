"use client";

import React from "react";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  const toContact = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen justify-between flex flex-col w-full items-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full max-w-[1300] ">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 w-full">
          <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">Projects</h2>
          <p className="text-current text-sm md:text-base max-w-sm">
            Robotics Club! Build robots, learn tech, and compete in Europe! Join
            us at ICT_2040.
          </p>
        </div>
        <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 p-8 max-w-[1300]">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                EU competition
              </p>
              <h4 className="text-white font-medium text-large">
                Arise Project
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-4.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Be polite
              </p>
              <h4 className="text-white font-medium text-large">
                Learning to respect each other
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Hackathon
              </p>
              <h4 className="text-white font-medium text-large">
                JunctionX Europe 3 days intensive hackathon
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                API system
              </p>
              <h4 className="text-white font-medium text-2xl">
                FixIt API platform collaborate with City of Turku
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://images.unsplash.com/photo-1543409485-2651dedce6ee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            {/* <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">Available soon.</p>
                <p className="text-white text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter> */}
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                have an idea?
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                reach out to us and start your very own project with support!
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">
                    Dm any of our board members
                  </p>
                  <p className="text-tiny text-white/60">
                    Or just send a random message in our group chat!
                  </p>
                </div>
              </div>
              <Button
                radius="full"
                size="sm"
                color="primary"
                onPress={toContact}
              >
                Discuss your idea!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
