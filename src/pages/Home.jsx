import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8 leading-tight">
        Welcome to the Real-Time XAI-Powered IP Threat Detection and Prevention System
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
        This platform is designed to protect your web applications from malicious IP addresses using advanced threat detection techniques and a next-generation firewall. Our system integrates explainable AI (XAI) for enhanced security decision-making, allowing real-time detection and blocking of suspicious IPs that may pose a threat to your online assets.
      </p>

      <div className="mt-12 bg-gradient-to-r from-blue-100 to-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">How it Works</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our system continuously monitors incoming traffic to your web application and identifies potential threats based on their IP addresses. If an IP address is found to be malicious or is repeatedly engaging in suspicious activities, it will be automatically blocked using our firewall service.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          The firewall is integrated with advanced threat detection techniques powered by Explainable AI, ensuring transparency and accurate security decision-making.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Key Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-gray-600">
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3m0 0H9m3-3h3m4 5a4 4 0 00-4-4H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V5z" />
              </svg>
            </div>
            <div>
              <strong className="text-blue-600">Real-Time IP Threat Detection:</strong> Monitors and identifies malicious IP addresses in real-time.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3m0 0H9m3-3h3m4 5a4 4 0 00-4-4H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V5z" />
              </svg>
            </div>
            <div>
              <strong className="text-blue-600">Explainable AI (XAI):</strong> Provides transparency and insight into the decision-making process for blocking IPs.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3m0 0H9m3-3h3m4 5a4 4 0 00-4-4H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V5z" />
              </svg>
            </div>
            <div>
              <strong className="text-blue-600">Next-Generation Firewall:</strong> Blocks harmful IP addresses from accessing your web app.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3m0 0H9m3-3h3m4 5a4 4 0 00-4-4H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V5z" />
              </svg>
            </div>
            <div>
              <strong className="text-blue-600">Easy Integration:</strong> Simple SDK for integrating our firewall service into your existing web application.
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/sdk-setup"
          className="text-xl text-blue-600 hover:text-blue-700 underline transition-all duration-300 font-semibold"
        >
          Learn how to integrate the firewall SDK into your web app
        </a>
      </div>
    </div>
  );
};

export default HomePage;
