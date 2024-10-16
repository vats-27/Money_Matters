import React, { useState, useEffect } from 'react';
import Team from "./Team/Team.jsx";
import Navbar from './Home/Navbar/Navbar';
import Home from './Home/Home.jsx';
import Events from './Events/Events.jsx';
import Gallery from './Gallery/Gallery.jsx';
import About from './About/About.jsx';
import Footer from './Home/Footer.jsx';
import Loading from './Small Components/Loading.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/Events",
      element: (
        <>
          <Navbar />
          <Events />
          <Footer />
        </>
      ),
    },
    {
      path: "/Team",
      element: (
        <>
          <Navbar />
          <Team />
          <Footer />
        </>
      ),
    },
  ]);

  const [loading, setLoading] = useState(true);

  // Use the window 'load' event to detect when the page has fully loaded
  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false); // Set loading to false once the page is loaded
    };

    // Add event listener for the 'load' event
    window.addEventListener("load", handlePageLoad);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        // Render the router once loading is complete
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;