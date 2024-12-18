import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes on mount
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-4">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="mt-4">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>
    </div>
  </div>
</Link>

export default HomePage;

