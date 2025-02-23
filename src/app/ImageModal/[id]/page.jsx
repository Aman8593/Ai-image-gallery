// app/ImageModal/[id]/page.js
"use client"
import { motion } from "framer-motion";
import sampleData from "@/data/data.json";
import { use } from "react";
import { format } from 'date-fns';
import { useRouter } from "next/navigation";

const ImageModal = ({params}) => {
  
  const { id } = use(params);  // it is promise so we have to wrap it by use
  const router = useRouter();
  const item = sampleData.images.find((image) => image.id === id);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Image not found.</p>
      </div>
    );
  }
  

  const formattedDate = format(new Date(item.generationDate), "MM/dd/yyyy, HH:mm:ss");
  

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      {/* back to home page */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
      >
        ← Back to Home
      </button>
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="flex flex-col items-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto max-h-[500px] object-contain mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="text-lg">{item.aiModel}</p>
          <p className="text-sm text-gray-400 mt-2">
            {formattedDate}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageModal;  // Ensure this is a default export
