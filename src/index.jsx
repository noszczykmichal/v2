import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "@/App";
import { UIContextProvider } from "@/store/uiContext";
import "@/index.scss";

const client = new ApolloClient({
  uri: "https://api.crystallize.com/noszczykmichal/catalogue/",
  cache: new InMemoryCache(),
});

const firebaseConfig = {
  apiKey: "AIzaSyBdS8Se_1gNn2590iYP8KnFGtosXPqWVKI",
  authDomain: "portfolio-8ff44.firebaseapp.com",
  projectId: "portfolio-8ff44",
  storageBucket: "portfolio-8ff44.appspot.com",
  messagingSenderId: "1032156294818",
  appId: "1:1032156294818:web:bcda5a84940f495fa0f1fb",
  measurementId: "G-W4CJCB0ETY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
