"use client";

import React, { useState, useEffect } from "react";
import { Button, HeroUIProvider, Image } from "@heroui/react";
import { LampContainer } from "@/components/effects/lamp";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Accordion, AccordionItem } from "@heroui/react";
import logo from "@/public/assets/logo/logo.svg";

export default function Home() {
  

  return (
    <HeroUIProvider>
      <div className="min-h-screen justify-between flex flex-col w-full items-center">
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full ">
          <LampContainer>
            <div className="w-full flex flex-row">
              <div>
                <div>New: something something</div>
                <div>Join and get extra credits from school!</div>
                <div>
                  JOint us amaizn grobotic dsaalkhflwdahfkni vlksdfjlk iwf hsdk
                  nfkw hvkw nvkow hilsddw hvjo jfhdsovh sdo njo fhidsosh fon fd
                </div>
                <Button size="lg">Join us now!</Button>
              </div>
              

            </div>
          </LampContainer>
        </div>
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
                  in our discord or whatsapp group , we'll be in touch with you!
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="What kind of project can I start?"
                  subtitle="All kind of ideas are welcome"
                  title="What kind of project can I start?"
                >
                  We're pretty much open to all kind of ideas, software,
                  hardware, events, music or anything? Just reach out to us and
                  we'll discuss the possibilities. Don't be shy, we wno't bite
                  you,.. I think
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </HeroUIProvider>
  );
}
