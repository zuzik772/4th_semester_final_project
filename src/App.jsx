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
import { PrivateRoute } from "./PrivateRoute";
import { useState, useEffect } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    getLoginStatus(localStorage.getItem("isLoggedIn"));
  });

  function getLoginStatus(status) {
    if (status === "true") {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }


  function getLocation(locationName) {
    setLocation(locationName);
  function getUserType(type) {
    setUserType(type);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Nav getLoginStatus={getLoginStatus} userType={userType} location={location} />}
        <div className="block sm:flex">
          {isLoggedIn && <Sidebar userType={userType} />}
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  getLoginStatus={getLoginStatus}
                  getUserType={getUserType}
                  getLocation={getLocation}
                />
              }
            />
            <Route
              index
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/posts"
              element={
                <PrivateRoute>
                  <Posts />
                </PrivateRoute>
              }
            />
            {userType === "admin" && (
              <Route
                path="/deliveries"
                element={
                  <PrivateRoute>
                    <Deliveries />
                  </PrivateRoute>
                }
              />
            )}
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Inventory getUserType={getUserType} />
                </PrivateRoute>
              }
            />
            <Route
              path="/trackers"
              element={
                <PrivateRoute>
                  <Trackers />
                </PrivateRoute>
              }
            />
            <Route
              path="/manual"
              element={
                <PrivateRoute>
                  <Manual />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
