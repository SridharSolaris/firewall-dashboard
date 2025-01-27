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
    <div>
      <h2>Add New App</h2>
      <input
        type="text"
        placeholder="App Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <button onClick={handleAddApp}>Add App</button>
    </div>
  );
};

export default AddApp;
