# Resco exam demo 
App implemented on this boilerplate 

# Text of exam:

Implement a number to word list converter as a Node backend and React fronted. The backend should provide a rest endpoint that converts a given numeric string into a list of corresponding words in the style of T9 or Phonewords. For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.



The solution should be shared with us in a git repository with real history included. It's OK not to deliver 100%, but the more working parts the better. For example if you struggle with the backend, focus on frontend and just mock the API calls.



Take this task as a chance to present your skills. If you are good in UI, let us see that. If you are more into the backend, it's OK to have simple FE.



If you know what tests are for, don't keep it for yourself, show it in the code.

Ways to go beyond the minimal solution could include for example:

• phone keyboard -like UI

• great project setup

• mobile app in React Native

• filtering to include only real words based on a suitable word list
# React Native app with Express backend API
An example using TypeScript, Redux, Expo for Express and React Native.
The app loads a list of user objects from the backend API and displays the users name and avatar in a `<FlatList>`. While the user objects are being loaded from the API, the app displays a `Loading...` state. If the connection to the API cannot be established or an error occurs, an error message is displayed.

**Requirements**
- Node.js > 14.3 including npm

## Backend

The backend API is based on NodeJS and [Express](http://expressjs.com/). The source code for the backend resides in the subdirectory `backend`. To run the development server, you have to install the dependencies first. 

- Install dependencies

```
$ cd backend
$ npm i
```

- Start Server

```
$ npm start
```

The API is exposed on http://localhost:8000/api/v1

## App

You will find the source code for the React Native application in the subdirectory `app`. 
The application has been setup using [Expo](https://expo.io/).
To setup your development environment you have to install Expo globally and install the npm dependencies.

1. Install Expo globally using npm

```
$ cd app
$ npm i -g expo
```

2. Install dependencies

```
$ npm i
```

### Development

The app is dependent on the backend API, so you should make sure to start the backend API server first. 

To run the app in development mode execute

```
$ npm start
```

Open your browser on http://localhost:19002/ to see the Metro Bundler. From there you can check the app in the browser, or in the iOS or Android simulators.

### Test

The app uses Jest for unit tests. To run the tests execute

```
$ npm test
```

