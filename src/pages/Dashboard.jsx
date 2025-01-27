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
    <div className="bg-gray-50 p-8 rounded-xl max-w-5xl mx-auto shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">Dashboard</h1>
      <AddApp token={token} onAppAdded={handleAppAdded} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Applications</h2>
        {apps.length > 0 ? (
          apps.map((app) => (
            <div
              key={app._id}
              className="bg-white p-6 rounded-lg shadow-xl mb-6 border-l-4 border-green-500"
            >
              <h3 className="font-medium text-xl text-gray-800 mb-4">{app.appName}</h3>
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
