"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/react";
import React from "react";
import {
  CardHeader,
  CardFooter,
  HeroUIProvider,
  Image,
  Divider,
  Input,
  Avatar,
} from "@heroui/react";
import { NumberTicker } from "@/components/effects/number_ticker";
import { MdAttachMoney } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const weatherData = {
  temp: 25,
  condition: "Cloudy",
  location: "Ban Pa Chi",
  high: 30,
  low: 25,
  forecast: [
    { day: "Sat", temp: 30, icon: "🌥️" },
    { day: "Sun", temp: 32, icon: "🌦️" },
    { day: "Mon", temp: 31, icon: "🌧️" },
    { day: "Tue", temp: 31, icon: "🌦️" },
    { day: "Wed", temp: 30, icon: "🌥️" },
  ],
};

const stocks = [
  { symbol: "NVDA", price: 131.29, change: -1.16 },
  { symbol: "GOOGL", price: 168.47, change: -1.4 },
];

const news = [
  {
    title: "Google's realistic Veo 3 AI videos unsettle...",
    url: "#",
  },
  {
    title: "Trump mixes praise and politics in West...",
    url: "#",
  },
  {
    title: "X experiences widespread outage...",
    url: "#",
  },
];

export default function ChatGptPage() {
  return (
    <div className="h.screen bg flex flex-col items-center justify-center px-4">
        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-5xl font-semibold text-white flex items-center gap-2">
            Since AI
            <span className="ml-1 px-2 py-1 rounded-md border border-cyan-400 text-cyan-400 text-lg font-medium align-middle">
              hackathon
            </span>
          </h1>
        </div>
        <div className="w-full max-w-2xl">
          <div className="bg-content1 rounded-xl p-6 flex flex-col gap-4 shadow-lg">
            <input
              className="bg-transparent border-none outline-none text-white text-lg placeholder-gray-400"
              placeholder="Ask anything"
            />
            <div className="flex gap-2">
              <div className="flex-1" />
              <div className="flex gap-2 items-center">
                <Button color="primary">Search</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full ">
          {/* <Card>
          <CardBody>hihihi</CardBody>
        </Card>
         */}
          <div className="flex flex-row gap-2">
            <Card
              isHoverable
              className="flex w-full md:w-fits max-w-[500px] shadow-white"
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
              className="flex w-full md:w-fits max-w-[500px] shadow-white"
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
              isHoverable
              className="flex w-full md:w-fits max-w-[500px] shadow-white"
              shadow="lg"
            >
              {" "}
              <CardBody>
                <div className="flex flex-row items-end">
                  <NumberTicker
                    value={3}
                    className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-white"
                    delay={3.5}
                  />
                  <GoPlus size={60} />
                  <span className="text-3xl pb-2">Days</span>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* News */}
          {/* <div className="flex flex-col gap-2">
          {news.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="bg-[#232526] rounded-xl p-3 text-white hover:bg-[#2c2e30] transition"
            >
              {item.title}
            </a>
          ))}
        </div> */}
        </div>

      {/* Material Icons CDN */}
    </div>
  );
}
