import axios from "axios";

export const fetchUsers = async (query) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
};

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Build the query string based on provided parameters
    const queryParts = [];
    if (username) queryParts.push(`user:${username}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(" "); // Combine query parts with spaces
    console.log("Constructed query:", query);

    // Make the API call to GitHub Search API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    // Return the array of user results
    return response.data.items; // 'items' contains the list of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw error to handle it in the calling function
  }
};

try {
    const response = await fetchUsers('test');
    setData(response);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    setError('Something went wrong.');
}
