import React, { useState } from "react";
import { addApp } from "../../services/apiService";

const AddApp = ({ token, onAppAdded }) => {
  const [appName, setAppName] = useState("");

  const handleAddApp = async () => {
    try {
      const app = await addApp(appName, token);
      onAppAdded(app);
      setAppName("");
    } catch (error) {
      console.error("Error adding app:", error);
    }
  };

  return (
    <div className="bg-gray-50 shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">Add New App</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="App Name"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <button
          onClick={handleAddApp}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add App
        </button>
      </div>
    </div>

  );
};

export default AddApp;
