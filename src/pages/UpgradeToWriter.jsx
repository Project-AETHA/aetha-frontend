import React from "react";
import { Crown, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const UpgradeToWriter = () => {
  const navigate = useNavigate();

  async function handleUpgrade() {
    const response = await axios.get("/api/user/upgrade");
    if (response.status === 200) {

        if(response.data.code === "00") {
            localStorage.setItem("user", JSON.stringify(response.data.content));
            navigate("/author");
        } else {
            toast.error("Failed to upgrade account", {
                description: response.data.message,
            });
        }
      
    } else {
      toast.error("Failed to upgrade to writer", {
        description: "Please try again later",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <Crown className="w-20 h-20 text-white relative z-10" />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Upgrade to Writer
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Unlock the power to create and share your stories with the world
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {[
              "Create and publish unlimited stories",
              "Access to premium writing tools",
              "Join exclusive writer communities",
              "Earn from your content",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            {localStorage.getItem("user") ? (
              <button
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transform transition duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                onClick={() => handleUpgrade()}
              >
                Upgrade to Writer
              </button>
            ) : (
              <button
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transform transition duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            <button
              className="w-full py-3 px-6 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold flex items-center justify-center space-x-2 transform transition duration-200 hover:border-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5" />
              <span>Back to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeToWriter;
