import React from "react";

const SDKSetupPage = () => {
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8 tracking-wide">
        Firewall SDK Integration
      </h1>
      <p className="mt-4 text-xl text-gray-700 leading-relaxed">
        This page explains how to install and integrate the Firewall SDK into your React application. Follow the steps below to get started with the integration.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Step 1: Install the SDK</h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
          First, install the Firewall SDK in your React application using either npm or yarn:
        </p>
        <div className="mt-4 space-y-4">
          <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <pre className="text-lg text-gray-700 overflow-x-auto">{`
npm install firewallb-sdk
            `}</pre>
            <button
              onClick={() => handleCopyCode('npm install firewallb-sdk')}
              className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              Copy
            </button>
          </div>
          <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <pre className="text-lg text-gray-700 overflow-x-auto">{`
yarn add firewallb-sdk
            `}</pre>
            <button
              onClick={() => handleCopyCode('yarn add firewallb-sdk')}
              className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Step 2: Set Configuration</h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
          After installing the SDK, you need to set up the configuration for the firewall in your app. Add the following code to your main app file (e.g., `App.js`):
        </p>
        <div className="mt-4">
          <div className="relative bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <pre className="text-lg text-gray-700 overflow-x-auto">{`
import React from "react";
import { setConfig, ProtectedPage } from "firewallb-sdk";

// Set the configuration for the firewall
setConfig({
  API_KEY: process.env.REACT_APP_FIREWALL_API_KEY,
  APP_ID: process.env.REACT_APP_FIREWALL_APP_ID,
});

function App() {
  return (
    <div className="App">
      <ProtectedPage>
        <h1>Protected Content</h1>
        <p>This content is protected by the firewall SDK.</p>
      </ProtectedPage>
    </div>
  );
}

export default App;
            `}</pre>
            <button
              onClick={() => handleCopyCode(`
import React from "react";
import { setConfig, ProtectedPage } from "firewallb-sdk";

// Set the configuration for the firewall
setConfig({
  API_KEY: process.env.REACT_APP_FIREWALL_API_KEY,
  APP_ID: process.env.REACT_APP_FIREWALL_APP_ID,
});

function App() {
  return (
    <div className="App">
      <ProtectedPage>
        <h1>Protected Content</h1>
        <p>This content is protected by the firewall SDK.</p>
      </ProtectedPage>
    </div>
  );
}

export default App;
            `)}
              className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-200"
            >
              Copy
            </button>
          </div>
        </div>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Ensure you have set the following environment variables in your `.env` file. (You can find your API KEY and APP ID in our settings page of our dashboard) :
        </p>
        <div className="mt-4">
          <div className="relative bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <pre className="text-lg text-gray-700 overflow-x-auto">{`
REACT_APP_FIREWALL_API_KEY="your-api-key"
REACT_APP_FIREWALL_APP_ID="your-app-id"
            `}</pre>
            <button
              onClick={() => handleCopyCode(`
REACT_APP_FIREWALL_API_KEY="your-api-key"
REACT_APP_FIREWALL_APP_ID="your-app-id"
            `)}
              className="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-all duration-200"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Step 3: Use ProtectedPage</h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
          The SDK provides a <code className="bg-gray-200 text-gray-800 p-1 rounded">ProtectedPage</code> component that ensures only authorized users can access the content inside it. The content wrapped in the <code className="bg-gray-200 text-gray-800 p-1 rounded">ProtectedPage</code> component will be protected by the firewall.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Step 4: Test the Integration</h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
          After completing the configuration, test your integration by running your app. Ensure the protected content is visible only to authorized users, while others are blocked by the firewall.
        </p>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/"
          className="text-xl text-blue-600 hover:underline transition-all duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SDKSetupPage;
