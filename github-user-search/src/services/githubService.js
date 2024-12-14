const BASE_URL = "https://api.github.com";
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `q=${username ? `${username}` : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await fetch(`${BASE_URL}/search/users?${query}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

