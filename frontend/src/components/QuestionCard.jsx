// import React from "react";

// const QuestionCard = ({ questionData }) => {
//   return (
//     <div className="border-2 p-4 rounded-lg shadow-md w-96 bg-white">
//       <h2 className="text-xl font-bold text-blue-600">Level {questionData.level}</h2>
//       <p className="text-gray-700 font-semibold mt-2">{questionData.question}</p>
//       <div className="mt-3">
//         {questionData.options.map((option, index) => (
//           <button
//             key={index}
//             className="block w-full text-left px-4 py-2 mt-2 bg-gray-200 rounded-md hover:bg-gray-300"
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;


import React from "react";

const QuestionCard = ({ questionData }) => {
  if (!questionData || !questionData.question) {
    return <p>No question data available.</p>;
  }

  return (
    <div className="border-2 p-4 rounded-lg shadow-md w-96 bg-white">
      <h2 className="text-xl font-bold text-blue-600">Level {questionData.level || 1}</h2>
      <p className="text-gray-700 font-semibold mt-2">{questionData.question}</p>
      <div className="mt-3">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className="block w-full text-left px-4 py-2 mt-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
