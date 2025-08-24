import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/School/Navbar'
import Footer from "./Components/School/Footer";
import HowItWorks from "./Components/School/HowItWorks";
import EnrollProgram from "./Components/School/EnrollProgram";
import Restaurants from "./Components/School/Restaurants";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><HowItWorks/></>
    },
    {
      path:"/HowItWorks",
      element:<><Navbar/><HowItWorks/></>
    },
    {
      path:"/EnrollProgram",
      element:<><Navbar/><EnrollProgram/></>
    },
  ])
   return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
