import React from "react";

const Navbar = () => {
  return (
    <section className="col-span-2 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md flex items-center justify-center absolute top-6 right-6 w-[40%] max-w-[500px]">
      <button className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition font-semibold">
        Upload & Generate QR
      </button>
    </section>
  );
};

export default Navbar;
