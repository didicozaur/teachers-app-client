# Learn Today App

This is the FRONTEND repo for our online learning app, coded using React. 

The backend repo for this project can be found here: https://github.com/didicozaur/teachers-app-server;

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

We created this project to help students connect with teachers from all over the world. 
In this app, you can find and connect with someone with experience in a certain area, who will be able to help you learn a subject you're interested in!

Some of the included functionalities are:
- The ability to create, edit and delete teacher Ads;
- The ability to create new subjects;
- The ability to search for ads using keywords;
- The ability to access your chosen teacher's contact information

## How to run

In the project directory, you can run:

### `npm start` inside the client (FRONTEND) repo
- Runs the app in the development mode.
- The page will reload when you make changes.
- You may also see any lint errors in the console.
### `npm run dev` inside the server (BACKEND) repo
- Connects you to MongoDB, allows for the information on your database to be accessed

## Dependencies to install
Run `npm install` to install the following dependencies:

    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "nodemon": "^2.0.15",
    "react": "^18.1.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

## What to include in your .env file:
`REACT_APP_API_URL= "http://localhost:5005/api"`


## Demo
Netlify link: https://learn-today-md.netlify.app