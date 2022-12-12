import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Posts from "./pages/Posts";
import Manual from "./pages/Manual";
import Inventory from "./pages/Inventory";
import Trackers from "./pages/Trackers";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Nav setIsLoggedIn={setIsLoggedIn} />}
        <div className="block sm:flex">
          {isLoggedIn && <Sidebar />}
          <Routes>
            <Route index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/trackers" element={<Trackers />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
