"use client";
import Card from "@/components/Card";
import sampleData from "@/data/data.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, selectedModel, currentPage]);

  // Filtering on search
  let filteredData = sampleData.images.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
 // filtering on models
  if (selectedModel) {
    filteredData = filteredData.filter((item) => item.aiModel === selectedModel);
  }

  // unique list of AI models from sampleData.images
  const models = Array.from(new Set(sampleData.images.map((item) => item.aiModel)));

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

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

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {paginatedData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                date={new Date(item.generationDate).toLocaleString()}
                model={item.aiModel}
                image={item.imageUrl}
              />
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
