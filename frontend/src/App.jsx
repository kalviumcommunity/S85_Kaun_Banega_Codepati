import React from "react";
import QuestionCard from "./components/Questioncard";
// import PlayerCard from "./components/PlayerCard";
// import QuestionCard from "../components/QuestionCard";

// const dummyPlayer = {
//   name: "Pushkar",
//   email: "pushkar@example.com",
//   score: 50000,
//   lifelinesUsed: ["50-50", "Audience Poll"],
//   currentLevel: 5,
// };

const dummyQuestion = {
  question: "Which programming language is used for React?",
  options: ["Python", "Java", "JavaScript", "C++"],
  correctAnswer: "JavaScript",
  difficulty: "medium",
  level: 3,
};

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎉 Welcome to Kaun Banega Codepati! 💻🚀</h1>
      <p>
        Test your coding knowledge and climb the leaderboard! 🎯💡  
        Answer coding questions, level up, and prove you're the ultimate Codepati! 🏆👨‍💻👩‍💻
      </p>

      <div className="flex justify-center gap-6 mt-8">
        {/* <PlayerCard player={dummyPlayer} /> */}
        <QuestionCard questionData={dummyQuestion} />
      </div>
    </div>
  );
}

