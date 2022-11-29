import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Posts from "./pages/Posts";
import Manual from "./pages/Manual";
import Stock from "./pages/Stock";
import Trackers from "./pages/Trackers";

function App() {
  return (
    <div className="App">
      {/* components
nav / logo,search, dropdown,profile
leftSidebar / icon, title
pages:
dashboard / components: dashboardCard, tasks, schedule
posts / newPost, post
deliveries - NOT APPLCIABLE
stock / table
trackers / table
manual
*/}

      {/* routes */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/trackers" element={<Trackers />} />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
