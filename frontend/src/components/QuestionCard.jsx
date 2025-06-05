import React, { useState } from "react";

const QuestionCard = ({ questionData, onDelete, onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState({
    question: questionData.question,
    options: [...questionData.options],
    answer: questionData.answer,
    level: questionData.level
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    console.log('Selected Option:', selectedOption);
    console.log('Correct Answer:', questionData.answer);
    console.log('Are they equal?', selectedOption === questionData.answer);
    
    const normalizedSelected = selectedOption?.trim();
    const normalizedAnswer = questionData.answer?.trim();
    
    if (normalizedSelected === normalizedAnswer) {
      alert("Correct answer! 🎉");
    } else {
      alert(`Response sent! BTW, the correct answer is: ${questionData.answer} `);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await onUpdate(questionData._id, editedQuestion);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating question:", error);
      alert("Failed to update question");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await onDelete(questionData._id);
      } catch (error) {
        console.error("Error deleting question:", error);
        alert("Failed to delete question");
      }
    }
  };

  if (isEditing) {
    return (
      <div className="border-2 p-4 rounded-lg shadow-md w-96 bg-white">
        <input
          type="text"
          value={editedQuestion.question}
          onChange={(e) => setEditedQuestion({ ...editedQuestion, question: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        {editedQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...editedQuestion.options];
              newOptions[index] = e.target.value;
              setEditedQuestion({ ...editedQuestion, options: newOptions });
            }}
            className="w-full p-2 mb-2 border rounded"
          />
        ))}
        <input
          type="text"
          value={editedQuestion.answer}
          onChange={(e) => setEditedQuestion({ ...editedQuestion, answer: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Correct answer"
        />
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-2 p-4 rounded-lg shadow-md w-96 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">Level {questionData.level || 1}</h2>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700 font-semibold mt-2">{questionData.question}</p>
      <div className="mt-3">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`block w-full text-left px-4 py-2 mt-2 rounded-md transition-colors ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${
          selectedOption
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionCard;