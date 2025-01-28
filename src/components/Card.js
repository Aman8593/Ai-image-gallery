import React from "react";

const Card = ({ title, date, model, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">Generated on: {date}</p>
      <p className="text-sm text-gray-600">Model: {model}</p>
    </div>
  );
};

export default Card;
