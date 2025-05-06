import { useEffect, useState } from "react";
import { HashRouter  as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";
import Resume from "./Resume.jsx"
import BlogPostReact from "./Components/BlogPostReact";
import './App.css';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <ScrollToHash />
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/cv" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/getting-started-with-react" element={<BlogPostReact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
