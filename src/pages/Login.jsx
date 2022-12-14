import { useNavigate } from "react-router-dom";
import cover from "../img/login_cover.webp";
import darkLogo from "../img/black_logo.png";
import RequiredIcon from "../components/icons/RequiredIcon";
import RadioButton from "../components/RadioButton";
import { useRef, useState } from "react";
export default function Login(props) {
  const navigate = useNavigate();

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [validated, setValidated] = useState();
  const [isLocationChosen, setIsLocationChosen] = useState();
  const [emptyUsername, setEmptyUsername] = useState();
  const [emptyPassword, setEmptyPassword] = useState();

  function login() {
    sessionStorage.setItem("isLoggedIn", "true");
    props.getLoginStatus(sessionStorage.getItem("isLoggedIn"));
    navigate("/");
  }

  function checkForEmpty() {
    if (usernameRef.current.value === "") {
      setEmptyUsername(true);
    } else {
      setEmptyUsername(false);
      validate();
    }
    if (passwordRef.current.value === "") {
      setEmptyPassword(true);
    } else {
      setEmptyPassword(false);
      validate();
    }

    if (!isLocationChosen) setIsLocationChosen(false);
  }

  function validate() {
    if (usernameRef.current.value === "admin" && passwordRef.current.value === "admin") {
      if (isLocationChosen) {
        props.getUserType("admin");
        setValidated("");
        login();
      }
    } else if (usernameRef.current.value === "user" && passwordRef.current.value === "user") {
      if (isLocationChosen) {
        props.getUserType("employee");
        setValidated("");
        login();
      }
    } else setValidated(false);
  }

  function getLocation(location) {
    props.getLocation(location);
    setIsLocationChosen(true);
  }

  return (
    <div className="grid sm:grid-cols-2 bg-light h-screen">
      <div className="flex flex-col justify-evenly items-center">
        <img src={darkLogo} alt="Beta Boulders logo" className="w-40 sm:w-60"></img>
        <div className="flex flex-col items-center justify-center gap-8 mb-4 sm:mb-0">
          <div className="flex flex-col w-60 sm:w-80 h-fit">
            <h1 className="uppercase font-semibold text-2xl text-left">Log in</h1>
            <span className={`text-sm ${validated !== true ? "" : "hidden"}`}>
              Welcome back! Please enter your details
            </span>
            <span className={`text-sm text-warning ${validated === false ? "" : "hidden"}`}>
              Sorry, username or password isn’t right. Check for typos and try again.
            </span>
            <span
              className={`text-sm text-warning ${emptyUsername || emptyPassword ? "" : "hidden"}`}
            >
              Seems like you forgot to fill all fields.
            </span>
          </div>
          <form className="flex flex-col gap-6 w-60 sm:w-80">
            <div>
              <label htmlFor="username" className="flex text-sm">
                Username
                <RequiredIcon />
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                name="username"
                placeholder="Put your username here"
                required
                className={`pl-0 pb-0 outline-none bg-light w-full border-x-0 border-t-0 ${
                  validated === false ? "border-b-warning" : "border-b-gray-400"
                } rounded-none focus:border-t-0 focus:border-x-0 focus:ring-0 dark:focus:ring-0 focus:border-accent`}
              />
              <span className={`text-sm text-warning ${emptyUsername ? "" : "hidden"}`}>
                Username is required.
              </span>
            </div>
            <div>
              <label htmlFor="password" className="flex text-sm">
                Password
                <RequiredIcon />
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="And your password here"
                required
                className={`pl-0 pb-0 outline-none bg-light w-full border-x-0 border-t-0 ${
                  validated === false ? "border-b-warning" : "border-b-gray-400"
                } rounded-none focus:border-t-0 focus:border-x-0 focus:ring-0 dark:focus:ring-0 focus:border-accent`}
              />
              <span className={`text-sm text-warning ${emptyPassword ? "" : "hidden"}`}>
                Password is required.
              </span>
            </div>
            <div>
              <div className="flex text-sm">
                <span>Choose location you're at:</span>
                <RequiredIcon />
              </div>
              <div className="flex gap-2 items-center">
                <RadioButton
                  title="South"
                  name={"location"}
                  value={"south"}
                  radioButtonFunction={getLocation}
                />
                <RadioButton
                  title="West"
                  name={"location"}
                  value={"west"}
                  radioButtonFunction={getLocation}
                />
              </div>
              <span
                className={`flex text-sm text-warning ${
                  isLocationChosen === false ? "" : "hidden"
                }`}
              >
                Choose a location to continue.
              </span>
            </div>
          </form>
          <div className="flex flex-col gap-1 items-center">
            <button
              type="submit"
              className="bg-accent text-white rounded-lg px-4 py-1 h-fit w-40"
              onClick={checkForEmpty}
            >
              Sign in
            </button>
            <span className="text-xs opacity-70">Have a good working day!</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={cover}
          alt="people climbing in bouldering gym"
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </div>
  );
}
