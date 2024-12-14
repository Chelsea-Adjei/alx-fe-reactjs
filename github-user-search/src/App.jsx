import React, { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { fetchUsers } from "./services/githubService";

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (criteria) => {
    const users = await fetchUsers(criteria);
    setResults(users);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub Advanced Search</h1>
      <Search onSearch={handleSearch} />
      <div className="mt-6">
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default App;

