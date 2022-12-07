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
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="block sm:flex">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/stock" element={<Inventory />} />
            <Route path="/trackers" element={<Trackers />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
