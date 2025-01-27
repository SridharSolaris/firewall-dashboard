// src/pages/SDKSetupPage.jsx

import React from "react";

const SDKSetupPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">
        Firewall SDK Integration
      </h1>
      <p className="mt-4 text-xl text-gray-700">
        This page explains how to install and integrate the Firewall SDK into
        your React application. Follow the steps below to get started with the
        integration.
      </p>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Step 1: Install the SDK
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          First, install the Firewall SDK in your React application using either
          npm or yarn:
        </p>
        <pre className="bg-gray-100 p-4 mt-2 text-lg text-gray-700">
          npm install firewallb-sdk
        </pre>
        <pre className="bg-gray-100 p-4 mt-2 text-lg text-gray-700">
          yarn add firewallb-sdk
        </pre>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Step 2: Set Configuration
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          After installing the SDK, you need to set up the configuration for the
          firewall in your app. Add the following code to your main app file
          (e.g., `App.js`):
        </p>
        <pre className="bg-gray-100 p-4 mt-2 text-lg text-gray-700">
          {`
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
          `}
        </pre>
        <p className="mt-4 text-lg text-gray-600">
          Ensure you have set the following environment variables in your `.env`
          file. (You can find your API KEY and APP ID in our settings page of
          our dashboard) :
        </p>
        <pre className="bg-gray-100 p-4 mt-2 text-lg text-gray-700">
          {`
REACT_APP_FIREWALL_API_KEY="your-api-key"
REACT_APP_FIREWALL_APP_ID="your-app-id"
          `}
        </pre>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Step 3: Use ProtectedPage
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          The SDK provides a <code>ProtectedPage</code> component that ensures
          only authorized users can access the content inside it. The content
          wrapped in the <code>ProtectedPage</code> component will be protected
          by the firewall.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          In the example above, any content inside the{" "}
          <code>ProtectedPage</code> will be protected by the firewall, and any
          unauthorized users will be blocked.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Step 4: Test the Integration
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          After completing the configuration, test your integration by running
          your app. Ensure the protected content is visible only to authorized
          users, while others are blocked by the firewall.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a href="/" className="text-xl text-blue-600 hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SDKSetupPage;
