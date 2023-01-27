import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import "animate.css/animate.min.css";
import App from "./App";
import SingleProjects from "./components/singlePages/SingleProjects";
import AboutMe from "./components/homePage/AboutMe";
import SingleContact from "./components/singlePages/SingleContact";
import NotFound from "./components/notFound/NotFound";
import HomePage from "./components/homePage/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<SingleProjects />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="contactMe" element={<SingleContact />} />
        <Route path="*" element={<NotFound />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
