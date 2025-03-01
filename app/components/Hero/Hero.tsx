import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[900] flex items-center justify-center text-center text-white bg-[url('/images/header-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Discover amazing content and enjoy the best experience with us.
        </p>
      </div>
    </section>
  );
};

export default Hero;
