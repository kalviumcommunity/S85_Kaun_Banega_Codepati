import React from "react";

const About = () => {
  return (
    <section className="py-16 px-8 relative">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-text-focus-in">
        About the Game
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="max-w-md bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 shadow-lg p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/20 group">
          <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">How It Works</h3>
          <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            Kaun Banega Codeapti features a user-friendly interface, a wide
            range of coding-related questions.
          </p>
        </div>
        <div className="max-w-md bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 shadow-lg p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:border-purple-500 hover:shadow-purple-500/20 group">
          <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Mini-Games</h3>
          <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            Kaun Banega Codeapti offers a diverse selection of coding-themed
            mini-games and puzzles.
          </p>
        </div>
        <div className="max-w-md bg-gray-900/50 backdrop-blur-sm border border-pink-500/30 shadow-lg p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:border-pink-500 hover:shadow-pink-500/20 group">
          <h3 className="text-xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors duration-300">Join Now</h3>
          <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            Kaun Banega Codeapti is designed to be both educational and
            enjoyable.
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 animate-pulse-slow border border-cyan-300">
          Start Playing
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>
    </section>
  );
};

export default About;
