import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/api/questions");
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching questions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayNow = () => {
    setShowQuestions(true);
    fetchQuestions();
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-fixed bg-no-repeat bg-cover relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10">
        {!showQuestions ? (
          <>
            <Hero onPlayNow={handlePlayNow} />
            <About />
          </>
        ) : (
          <div className="container mx-auto px-4 py-8">
            {loading && (
              <div className="text-center text-cyan-300 text-xl">
                Loading questions... ⏳
              </div>
            )}
            {error && (
              <div className="text-center text-red-500 text-xl">
                Error: {error}
              </div>
            )}
            {!loading && !error && questions.length === 0 && (
              <div className="text-center text-cyan-300 text-xl">
                No questions available. Please try again later.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {questions.map((question, index) => (
                <QuestionCard key={index} questionData={question} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Glowing lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse-slow"></div>
    </div>
  );
}

export default App;
