import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { App } from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";


export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profiles/:profileId",
        element: <ProfilePage />
      },
      {
        path: "search",
        element: <SearchPage />
      }
    ],
  },
]);