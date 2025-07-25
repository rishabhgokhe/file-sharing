"use client";
import React from "react";
import { Heart, Upload, HelpCircle, User, MessageSquare, Info } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="col-span-1 h-[50vh] bg-white/10 backdrop-blur-md rounded-4xl border border-white/20 p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-8 tracking-tight text-white">
          FileFlow
        </h1>
        <nav className="flex flex-col gap-4">
          <SidebarButton icon={Upload} label="Share File" />
          <SidebarButton icon={HelpCircle} label="How it Works?" />
          <SidebarButton icon={User} label="Your Data" />
          <SidebarButton icon={Heart} label="Support Us" />
          <SidebarButton icon={MessageSquare} label="Drop Feedback" />
          <SidebarButton icon={Info} label="Know Us" />
        </nav>
      </div>
    </aside>
  );
};

const SidebarButton = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors duration-200">
    <Icon className="w-5 h-5" />
    <span className="text-lg font-medium">{label}</span>
  </button>
);

export default Sidebar;