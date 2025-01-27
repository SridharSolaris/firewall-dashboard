import React, { useState, useEffect } from "react";
import axios from "axios";

const AppList = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/api/apps");
        setApps(response.data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      }
    };

    fetchApps();
  }, []);

  return (
    <div>
      <h2>Your Web Apps</h2>
      <ul>
        {apps.map((app, index) => (
          <li key={index}>
            {app.name} (API Key: {app.apiKey})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppList;
