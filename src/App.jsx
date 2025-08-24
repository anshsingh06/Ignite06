import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/School/Navbar'
import Footer from "./Components/School/Footer";
import HowItWorks from "./Components/School/HowItWorks";
import EnrollProgram from "./Components/School/EnrollProgram";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><HowItWorks/><Footer/></>
    },
    {
      path:"/HowItWorks",
      element:<><Navbar/><HowItWorks/><Footer/></>
    },
    {
      path:"/EnrollProgram",
      element:<><Navbar/><EnrollProgram/><Footer/></>
    },
  ])
   return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
