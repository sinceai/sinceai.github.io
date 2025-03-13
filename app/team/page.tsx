import React from "react";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen justify-between flex flex-col w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">Team</h2>
        <p className="text-current text-sm md:text-base max-w-sm">
          Coming soon....
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
