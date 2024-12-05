import React, { useState } from "react";

const DictionaryApp = () => {
  // Initialize the dictionary
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for search term and result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Handle search logic
  const handleSearch = () => {
    const word = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (word) {
      setResult(word.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "5px", width: "75%" }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "5px 10px", marginLeft: "5px" }}
        >
          Search
        </button>
      </div>
      <p>Definition:</p>
      <p style={{ marginTop: "20px" }}>{result}</p>
    </div>
  );
};

export default DictionaryApp;
