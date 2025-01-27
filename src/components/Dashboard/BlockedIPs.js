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
    <div>
      <h4>Blocked IPs</h4>
      <div>
        <input
          type="text"
          value={ipToBlock}
          onChange={(e) => setIpToBlock(e.target.value)}
          placeholder="Enter IP to block"
        />
        <button onClick={handleBlockIP}>Block IP</button>
      </div>
      <ul>
        {blockedIPs.length > 0 ? (
          blockedIPs.map(
            (
              ip,
              index // Directly use the IP value here
            ) => (
              <li key={index}>
                <p>
                  IP: {ip} {/* Displaying the IP directly */}
                  <button onClick={() => handleUnblockIP(ip)}>Unblock</button>
                </p>
              </li>
            )
          )
        ) : (
          <p>No IPs blocked. Please add one!</p>
        )}
      </ul>
    </div>
  );
};

export default BlockedIPs;
