"use client";

import React from "react";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { LampContainer } from "@/components/effects/lamp";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

const EventsPage: React.FC = () => {

  const apply = () => {
    alert("Here should be a google form or sth");
  }

  return (
    <div className="min-h-screen justify-between flex flex-col w-full">
      <Navbar />
      <div className="w-full">
        <div>
          <LampContainer>
            <div className="gap-4 flex flex-col justify-center items-center">
              <h1 className="text-5xl">We are planning something HUGE</h1>
              <span className="text-base">3 Days Intensive Hackathon</span>
              <Button color="primary" onPress={apply}>Apply here</Button>
              <section></section>
            </div>
          </LampContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
