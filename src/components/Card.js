import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, date, model, image }) => {
  return (
    <motion.div
      className="border rounded-lg p-4 shadow-md bg-white cursor-pointer transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md"
      />
      <h2 className="mt-3 text-lg md:text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">Generated on: {date}</p>
      <p className="text-sm text-gray-600">Model: {model}</p>
    </motion.div>
  );
};

export default Card;
