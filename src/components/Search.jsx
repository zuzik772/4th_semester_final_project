import search from "../img/search.svg";
export default function Search() {
  return (
    <div className="flex gap-2 items-center py-1 px-2 mx-4 bg-darkerLight w-11/12 md:w-96 lg:w-3/5 h-10 rounded-md">
      <img src={search} alt="search icon" className="w-6" />
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="font-bold text-md outline-none text-dark bg-darkerLight w-80 h-10 rounded-md"
      ></input>
    </div>
  );
}
