import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/r",
    element: <div>Hi!</div>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
