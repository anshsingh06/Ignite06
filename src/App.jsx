import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/School/Navbar'
import Footer from "./Components/School/Footer";
import HowItWorks from "./Components/School/HowItWorks";
import EnrollProgram from "./Components/School/EnrollProgram";
import Restaurants from './Components/School/Restaurants'
import Contact from "./Components/School/Contact";
import NGONavbar from "./Components/NGO/Navbar";
import NGOFooter from "./Components/NGO/Footer";
import Programs from "./Components/NGO/Programs";
import NGOContact from "./Components/NGO/Contact";
import Home from "./Components/NGO/Home";

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
    {
      path:"/Restaurants",
      element:<><Navbar/><Restaurants/><Footer/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/><Footer/></>
    },
    {
      path: "/NGO",
      element: <><NGONavbar/><Home/><NGOFooter/></>
    },
    {
      path: "/NGO/Contact",
      element: <><NGONavbar/><NGOContact/><NGOFooter/></>
    },
    {
      path: "/NGO/Programs",
      element: <><NGONavbar/><Programs/><NGOFooter/></>
    },
  ])
   return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
