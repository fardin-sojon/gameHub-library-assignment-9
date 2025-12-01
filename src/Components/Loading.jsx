// src/Components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
