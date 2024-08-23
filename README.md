Ionic Angular Assignment
Overview
This project is a sample Ionic Angular application demonstrating basic authentication functionality using NgRx for state management and Angular reactive forms. It includes a login component that connects to a backend server to authenticate users.

Project Setup
Prerequisites
Ensure you have the following installed on your machine:

Node.js (>= 18.x)
npm (>= 8.x) or Yarn (>= 1.x)
Ionic CLI (>= 6.x)
Installation
Clone the Repository

bash
git clone https://github.com/your-username/ionic-angular-assignment.git
cd ionic-angular-assignment
Install Dependencies

bash
npm install
If you encounter any dependency issues, you can use the --legacy-peer-deps flag:

bash
npm install --legacy-peer-deps
Configuration
Backend API

Ensure your backend API is running and accessible at http://localhost:8100/api/login. You can modify the AuthService to point to your backend if it's running on a different port.

Proxy Configuration

If needed, configure a proxy to forward API requests from the development server to your backend. Create or modify proxy.conf.json:

json
{
  "/api": {
    "target": "http://localhost:your-backend-port",
    "secure": false
  }
}
Start the development server with the proxy configuration:

bash
ionic serve --proxy-config proxy.conf.json
Running the Application
To run the application, use the Ionic CLI:

bash
ionic serve
This will start a development server and open the application in your default web browser. The application will be accessible at http://localhost:8100.

Building the Application
To build the application for production, use the following command:

bash
ionic build --prod
This will create a production build in the www directory.

Running Tests
To run unit tests, use:

bash
npm test
