import React, { useState, useEffect } from "react";
import { getBlockedIPs, blockIP, unblockIP } from "../../services/apiService"; // Ensure the import statement is correct

const BlockedIPs = ({ appId, token }) => {
  const [blockedIPs, setBlockedIPs] = useState([]);
  const [ipToBlock, setIpToBlock] = useState("");

  useEffect(() => {
    const fetchBlockedIPs = async () => {
      try {
        const data = await getBlockedIPs(appId, token);
        setBlockedIPs(data || []); // Ensure empty array if no blocked IPs
      } catch (error) {
        console.error("Error fetching blocked IPs:", error);
      }
    };

    fetchBlockedIPs();
  }, [appId, token]);

  const handleBlockIP = async () => {
    try {
      if (ipToBlock) {
        // Block IP using the API
        await blockIP(appId, ipToBlock, token);
        setBlockedIPs((prevIPs) => [...prevIPs, ipToBlock]); // Storing only the IP
        setIpToBlock(""); // Clear the input field after blocking
      }
    } catch (error) {
      console.error("Error blocking IP:", error);
    }
  };

  const handleUnblockIP = async (ip) => {
    try {
      // Unblock the selected IP
      await unblockIP(appId, ip, token);
      setBlockedIPs(
        (prevIPs) => prevIPs.filter((blockedIP) => blockedIP !== ip) // Filter based on the IP directly
      );
    } catch (error) {
      console.error("Error unblocking IP:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2">Blocked IPs</h4>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={ipToBlock}
          onChange={(e) => setIpToBlock(e.target.value)}
          placeholder="Enter IP to block"
          className="border rounded-lg px-4 py-2 flex-grow"
        />
        <button
          onClick={handleBlockIP}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Block IP
        </button>
      </div>
      <ul className="space-y-2">
        {blockedIPs.length > 0 ? (
          blockedIPs.map((ip, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{ip}</span>
              <button
                onClick={() => handleUnblockIP(ip)}
                className="text-blue-500 hover:underline"
              >
                Unblock
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No IPs blocked. Please add one!</p>
        )}
      </ul>
    </div>

  );
};

export default BlockedIPs;
