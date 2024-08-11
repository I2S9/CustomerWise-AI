"use client"; 

import React, { useState } from "react";
import NavBar from "../../components/common/NavBar";
import Chatbot from "../../components/chatbot/Chatbot";
import { FaRegCommentDots } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; 

const FeedbackPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, surname, feedback, rating });
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border rounded w-full py-2 px-3"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating:</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Start: React.FC = () => {
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);

  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-5xl text-white font-bold text-center mt-12 mb-8">
          Talk with CustomerWise AI chatbot below
        </h1>
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col h-[500px] overflow-y-auto">
            <Chatbot />
          </div>
          <div className="flex items-center mt-4">
            <button
              onClick={() => setShowFeedbackPopup(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <FaRegCommentDots />
              <span>Feedback</span>
            </button>
          </div>
        </div>
        {showFeedbackPopup && <FeedbackPopup onClose={() => setShowFeedbackPopup(false)} />}
      </div>
    </div>
  );
};

export default Start;