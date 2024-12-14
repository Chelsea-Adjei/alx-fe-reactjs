import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

// Function to fetch users based on advanced search criteria
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string
    let query = `${username ? username : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    // API endpoint with the query
    const url = `${BASE_URL}/search/users?q=${query}`;

    // Axios request with authorization
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    // Return the list of users
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

