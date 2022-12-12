import search from "../img/search.svg";
export default function Search() {
  return (
    <div className="flex grow items-center mb-4 md:mb-0 mx-4 bg-darkerLight w-11/12 md:w-auto">
      <img src={search} alt="search icon" className="w-6 ml-2 opacity-70" />
      <input
        type="text"
        name="search"
        placeholder="Try coffee"
        className="text-md outline-none text-dark bg-darkerLight w-full border-none rounded-md  focus:ring-0 dark:focus:ring-0"
      ></input>
    </div>
  );
}
