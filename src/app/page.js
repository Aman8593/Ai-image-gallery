"use client"
import Card from "@/components/Card";
import sampleData from "@/data/data.json";
import { useState } from "react";

const Home = () => {
  
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const filteredData = sampleData.images.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (selectedModel === "" || item.aiModel === selectedModel)
    );
  });

  
  const models = Array.from(new Set(sampleData.images.map((item) => item.aiModel)));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Image Gallery Dashboard</h1>
      <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by title..."
      className="w-full border rounded-lg p-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
      <select
      value={selectedModel}
      onChange={(e) => setSelectedModel(e.target.value)}
      className="border rounded-lg p-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">All Models</option>
      {models.map((model, index) => (
        <option key={index} value={model}>
          {model}
        </option>
      ))}
    </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={new Date(item.generationDate).toLocaleString()}
            model={item.aiModel}
            image={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
