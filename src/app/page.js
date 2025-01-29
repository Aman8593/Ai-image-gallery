"use client";
import Card from "@/components/Card";
import sampleData from "@/data/data.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [loading, setLoading] = useState(true);  // State for loading

  // Filtering logic
  let filteredData = sampleData.images.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // filtering based on ai model
  if (selectedModel) {
    filteredData = filteredData.filter((item) => item.aiModel === selectedModel);
  }

  const models = Array.from(new Set(sampleData.images.map((item) => item.aiModel)));

  useEffect(() => {
    setLoading(false);  // Set loading to false when data is ready
  }, [filteredData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner"></div> {/* Customize spinner here */}
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Image Gallery Dashboard</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title..."
          className="w-full md:w-1/2 border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full md:w-1/4 border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Models</option>
          {models.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredData.map((item) => (
          <Card
          key={item.id}
          id={item.id} // Pass the ID to the Card component
          title={item.title}
          date={new Date(item.generationDate).toLocaleString()}
          model={item.aiModel}
          image={item.imageUrl}
        />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
