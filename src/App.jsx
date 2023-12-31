import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Homepage/Homepage/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/destination"
            element={<Destination />}
          />
          <Route
            path="/crew"
            element={<Crew />}
          />
          <Route
            path="/technology"
            element={<Technology />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
