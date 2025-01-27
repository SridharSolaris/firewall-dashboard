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
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <AddApp token={token} onAppAdded={handleAppAdded} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Your Apps</h2>
        {apps.length > 0 ? (
          apps.map((app) => (
            <div
              key={app._id}
              className="bg-gray-100 p-4 rounded-lg mb-4 shadow"
            >
              <h3 className="font-medium">{app.appName}</h3>
              <BlockedIPs appId={app._id} token={token} />
            </div>
          ))
        ) : (
          <p className="text-gray-600">No apps available. Please add one!</p>
        )}
      </div>
    </div>

  );
};

export default Dashboard;
