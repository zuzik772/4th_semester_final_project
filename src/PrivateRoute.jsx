import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
