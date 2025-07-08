import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme} = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="w-full h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <Hero />
        <Projects />
				<EducationAndExperience />
        <Skills />
        <Contact />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;