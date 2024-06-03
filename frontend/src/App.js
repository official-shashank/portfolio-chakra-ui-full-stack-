import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Loader from './Components/Loader';
import Dashboard from './Pages/Dashboard/Dashboard';



const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Blogs = lazy(() => import('./Pages/Blogs/Blogs'));
const Skills = lazy(() => import('./Pages/Skills/Skills'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Projects = lazy(() => import('./Pages/Projects/Projects'));
const DashProjects = lazy(() => import('./Pages/Dashboard/DashProjects'))
const SkillsAndExperiance = lazy(() => import('./Pages/Dashboard/SkillsAndExperiance'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/projects"
            element={<DashProjects />}
          />
          <Route
            path="/dashboard/skillsandexperiance"
            element={<SkillsAndExperiance />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
