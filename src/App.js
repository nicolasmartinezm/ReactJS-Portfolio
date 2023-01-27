import { Outlet } from "react-router-dom";
import "./styles/app.css";
import "animate.css/animate.min.css";
import Creator from "./components/footer/Creator";
import GetInTouch from "./components/footer/GetInTouch";
import NavBar from "./components/navigation/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <GetInTouch />
      <Creator />
    </div>
  );
}
