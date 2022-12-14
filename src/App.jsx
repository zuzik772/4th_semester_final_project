import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Posts from "./pages/Posts";
import Inventory from "./pages/Inventory";
import Trackers from "./pages/Trackers";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { useState, useEffect } from "react";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    getLoginStatus(sessionStorage.getItem("isLoggedIn"));
  });

  function getLoginStatus(status) {
    if (status === "true") {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }

  function getLocation(locationName) {
    setLocation(locationName);
  }
  function getUserType(type) {
    setUserType(type);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && (
          <Nav
            getLoginStatus={getLoginStatus}
            userType={userType}
            location={location}
            getLocation={getLocation}
          />
        )}
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
                    <Deliveries location={location} />
                  </PrivateRoute>
                }
              />
            )}
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Inventory userType={userType} location={location} />
                </PrivateRoute>
              }
            />
            <Route
              path="/trackers"
              element={
                <PrivateRoute>
                  <Trackers location={location} />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
