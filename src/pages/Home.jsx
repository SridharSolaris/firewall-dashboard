import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Welcome to the Real-Time XAI-Powered IP Threat Detection and Prevention System
      </h1>
      <p className="mt-4 text-xl text-gray-700 leading-relaxed">
        This platform is designed to protect your web applications from malicious IP addresses using advanced threat detection techniques and a next-generation firewall. Our system integrates explainable AI (XAI) for enhanced security decision-making, allowing real-time detection and blocking of suspicious IPs that may pose a threat to your online assets.
      </p>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">How it Works</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Our system continuously monitors incoming traffic to your web application and identifies potential threats based on their IP addresses. If an IP address is found to be malicious or is repeatedly engaging in suspicious activities, it will be automatically blocked using our firewall service.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-600">
          <li><strong>Real-Time IP Threat Detection:</strong> Monitors and identifies malicious IP addresses in real-time.</li>
          <li><strong>Explainable AI (XAI):</strong> Provides transparency and insight into the decision-making process for blocking IPs.</li>
          <li><strong>Next-Generation Firewall:</strong> Blocks harmful IP addresses from accessing your web app.</li>
          <li><strong>Easy Integration:</strong> Simple SDK for integrating our firewall service into your existing web application.</li>
        </ul>
      </div>
      <div className="mt-8 text-center">
        <a
          href="/sdk-setup"
          className="text-xl text-blue-600 hover:underline"
        >
          Learn how to integrate the firewall SDK into your web app
        </a>
      </div>
    </div>
  );
};

export default HomePage;
