import React from "react";

const Hero = ({ onPlayNow }) => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-text-focus-in">
        Welcome to <br /> Kaun Banega Codeapti
      </h1>
      <p className="mt-4 text-lg text-cyan-200 animate-slide-in-top">
        Kaun Banega Codeapti is a thrilling quiz application game where users
        test their coding knowledge by answering.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-float">
        <button 
          onClick={onPlayNow}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 animate-pulse-slow border border-cyan-300"
        >
          Play Now
        </button>
        <button className="px-8 py-3 bg-transparent text-cyan-300 font-semibold rounded-lg shadow-lg hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300 animate-pulse-slow border-2 border-cyan-500">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
