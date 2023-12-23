import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { LoginSignup } from '../src/pages/LoginPage/LoginSignup';
import  About  from '../src/pages/AboutPage/About';


const LandingPageTwo = React.lazy(() => import("pages/LandingPageTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPageTwo />} />
          <Route path="/loginsignup" element={<LoginSignup/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
