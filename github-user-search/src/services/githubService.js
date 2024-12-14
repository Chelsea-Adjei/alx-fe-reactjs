const BASE_URL = "https://api.github.com";
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
};
