function UserProfile() {
    return (
      <div className="user-profile" bg-gray-100 md:p-8 sm:p-4  max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg>
        <img src="https://via.placeholder.com/150" alt="User" rounded-full md:w-36 h-36 sm:w-24 h-24 mx-auto />
        <h1 md:text-xl sm:text-lg text-blue-800 my-4>John Doe</h1>
        <p text-gray-600 sm:text-sm md:text-base>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }

  export default UserProfile;