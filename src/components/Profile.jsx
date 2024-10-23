import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "N/A",
    picture: "N/A",
    email: "N/A",
    email_verified: "N/A",
    provider: "N/A",
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Check if it's a Firebase token or a custom token
        if (decoded.firebase) {
          // Firebase token
          setUserData({
            name: decoded.name || "N/A",
            picture: decoded.picture || "N/A",
            email: decoded.email || "N/A",
            email_verified: decoded.email_verified || "N/A",
            provider: decoded.firebase.sign_in_provider || "N/A",
            id: decoded.uid || "N/A", // uid for Firebase
            isAdmin: false, // or derive from your logic
          });
        } else {
          // Custom token
          setUserData({
            name: decoded.name || "N/A",
            picture: "N/A", // Assuming no picture in custom token
            email: decoded.email || "N/A",
            email_verified: "N/A", // Assuming no email_verified in custom token
            provider: "N/A", // Assuming no provider in custom token
            id: decoded.id || "N/A", // id from custom token
            isAdmin: decoded.isAdmin || false, // isAdmin from custom token
          });
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);



  const handleLogout = () => {
    // Remove token from localStorage and redirect to login
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <img
          src={userData.picture !== "N/A" ? userData.picture : "https://via.placeholder.com/96"}
          alt={userData.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
        />
        <h2 className="text-2xl font-semibold text-center">{userData.name}</h2>
        <p className="text-center text-gray-600 mt-2">{userData.email}</p>
        <p className="text-center mt-2">
          Email Verified:{" "}
          <span className={userData.email_verified ? "text-green-500" : "text-red-500"}>
            {userData.email_verified ? "Yes" : "No"}
          </span>
        </p>
        <p className="text-center mt-2 text-gray-500">Sign-in Provider: {userData.provider}</p>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile; // Make sure this line is present
