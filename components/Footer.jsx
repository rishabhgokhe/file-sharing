"use client";
import React from "react";
import { Eye } from "lucide-react";

const Footer = ({ visits = 0 }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="col-span-3 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md flex items-center justify-between px-6 text-white/80 text-sm w-[60%] max-w-[700px] absolute bottom-6 right-6 hover:shadow-xl transition-all duration-300">
      <p className="flex items-center gap-1">
        Made with
        <span className="animate-pulse text-red-400">❤️</span> by Rishabh &copy; {currentYear}
      </p>
      <p className="flex items-center gap-1 text-xs">
        <Eye className="w-4 h-4" />
        {visits.toLocaleString()} visits
      </p>
    </footer>
  );
};

export default Footer;