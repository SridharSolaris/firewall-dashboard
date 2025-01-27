import React, { useEffect, useState } from "react";
import { getApps } from "../services/apiService";
import AddApp from "../components/Dashboard/AddApp";
import BlockedIPs from "../components/Dashboard/BlockedIPs";

const Dashboard = () => {
  const [apps, setApps] = useState([]);
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const data = await getApps(token);
        setApps(data || []);
      } catch (error) {
        console.error("Error fetching apps:", error);
      }
    };

    fetchApps();
  }, [token]);

  const handleAppAdded = (newApp) => {
    setApps((prevApps) => [...prevApps, newApp]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AddApp token={token} onAppAdded={handleAppAdded} />
      <div>
        <h2>Your Apps</h2>
        {apps.length > 0 ? (
          apps.map((app) => (
            <div key={app._id}>
              <h3>{app.appName}</h3>
              <BlockedIPs appId={app._id} token={token} />
            </div>
          ))
        ) : (
          <p>No apps available. Please add one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
