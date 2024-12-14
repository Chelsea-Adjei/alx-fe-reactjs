import React from "react";

const SearchResults = ({ results }) => {
  if (!results.length) return <p className="text-gray-500">No users found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((user) => (
        <div
          key={user.id}
          className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
        >
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-lg font-bold text-center">{user.login}</h3>
          <p className="text-sm text-center">{user.location || "N/A"}</p>
          <p className="text-sm text-center">
            Repositories: {user.public_repos || "N/A"}
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-500 mt-2"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
