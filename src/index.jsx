import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

import App from "./App";
import "./index.scss";
import { UIContextProvider } from "./store/uiContext";

const client = new ApolloClient({
  uri: "https://api.crystallize.com/noszczykmichal/catalogue/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UIContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
