// import Logo from "../components/Logo";
import cover from "../img/login_cover.webp";
import darkLogo from "../img/black_logo.png";
import RequiredIcon from "../components/icons/RequiredIcon";
export default function Login() {
  return (
    <div className="grid sm:grid-cols-2 bg-light h-screen">
      <div className="flex flex-col items-center justify-center gap-6 mb-4 sm:mb-0">
        <img
          src={darkLogo}
          alt="Beta Boulders logo"
          className="w-60 sm:w-80 mb-2 sm:mb-10 lg:20"
        ></img>
        <div className="w-60 sm:w-80">
          <h1 className="uppercase font-semibold text-xl text-left">Log in</h1>
          <span className="text-xs">Welcome back! Please enter your details</span>
        </div>
        <form className="flex flex-col gap-0.5 w-60 sm:w-80">
          <div>
            <label for="username" className="flex pt-2 text-xs">
              Username
              <RequiredIcon />
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="font-bold text-md outline-none text-dark bg-darkerLight w-full border-light rounded-md  focus:ring-0 dark:focus:ring-0 focus:border-accent"
            />
          </div>
          <div>
            <label for="password" className="flex pt-2 text-xs">
              Password
              <RequiredIcon />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="font-bold text-md outline-none text-dark bg-darkerLight w-full border-light rounded-md  focus:ring-0 dark:focus:ring-0 focus:border-accent"
            />
          </div>
        </form>
        <button type="submit" className="bg-accent text-white rounded-lg px-4 py-1 h-fit w-40">
          Sign in
        </button>
      </div>
      <div>
        <img
          src={cover}
          alt="people climbing in bouldering gym"
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </div>

    // <input
    //   type="number"
    //   amount={props.amount}
    //   className={
    //     "w-20 outline-none text-dark border-accent rounded-md  focus:ring-darkerLight dark:focus:ring-darkerLight"
    //   }
    // />
  );
}
