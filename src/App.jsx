import React from 'react'
import Team from "./Team/Team.jsx"
import Navbar from './Home/Navbar/Navbar'
import Home from './Home/Home.jsx';
import Events from './Events/Events.jsx';
import Gallery from './Gallery/Gallery.jsx';
import About from './About/About.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {
      path:"/Gallery",
      element:<><Navbar /><Gallery/></>
    },
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/About",
      element:<><Navbar /><About/></>
    },
    {
      path:"/Events",
      element:<><Navbar /><Events/></>
    },
    {path:"/Team",
      element:<><Navbar /><Team/>  </>
    }
  ])
  return (
    <div> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App