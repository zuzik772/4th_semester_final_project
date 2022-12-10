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
function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      {isLoggedIn ? <Nav /> : null}
      <div className="block sm:flex">
        <BrowserRouter>
          {isLoggedIn ? <Sidebar /> : null}
          <Routes>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/trackers" element={<Trackers />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
