"use client";

import styles from "./page.module.scss";
import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smoothScroll";
import Projects from "@/components/projects";

import Earth from "@/components/earth";

import { InView } from "@/components/motion-primitives/in-view";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <SmoothScroll>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Since AI
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
    </SmoothScroll>
  );
}
