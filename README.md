## Restaurant-App

This project was created using ReactJS (https://reactjs.org/) without using a standard boirleplaite like create-react-app. For this we used Webpack to assist in the creation of the modules and gives you with the libraries needed to use the latest JavaScript features. It is worth mentioning the need to use some libraries as react-router-dom to assist in the creation of routes, axios to give it with http requests. However, the components were styled using css-grid layout and flex-box (without css frameworks).
The functionality of the web application is to list restaurants and to show details of them, such as popularity, price, if it is open. In this sense, the public API https://www.yelp.com/developers/documentation/v3/business was used, which enabled the data to feed the application.


## Available Scripts

First install the dependencies

### `npm install`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.


### `webpack --mode production`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


### Optimization opportunities

As optimization possibilities see if the adaptation of the application in the mobile version, use of next.js to enable SSR and bring SEO to the application in this way the application renders on the server and gives the possibility of being well ranked in search engines.
