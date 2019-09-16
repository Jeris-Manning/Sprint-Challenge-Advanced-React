import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Attach the link to the merchant's CSS to the <head>
var externalCssLink = document.createElement("link");
externalCssLink.setAttribute("rel", "stylesheet");
externalCssLink.setAttribute("type", "text/css");
externalCssLink.setAttribute(
  "href",
  "index.css"
);
document.querySelector("head").appendChild(externalCssLink);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
