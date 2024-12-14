import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-md shadow-md space-y-4"
    >
      <div>
        <label htmlFor="username" className="block font-medium">
          Username/Keyword:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter username or keyword"
        />
      </div>
      <div>
        <label htmlFor="location" className="block font-medium">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter location"
        />
      </div>
      <div>
        <label htmlFor="minRepos" className="block font-medium">
          Minimum Repositories:
        </label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter minimum repository count"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
