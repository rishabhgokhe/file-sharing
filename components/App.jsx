'use client';

import React from "react";
import { Upload, Heart } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white">
      {/* 🔁 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/threads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[-1] backdrop-blur-sm" />

      <div className="p-6 grid grid-cols-5 gap-6 min-h-screen">
        <Sidebar/>
        <Navbar />
        <Footer visits={1300}/>
      </div>
    </div>
  );
};

export default App;