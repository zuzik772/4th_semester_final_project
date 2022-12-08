import search from "../img/search.svg";
export default function Search() {
  return (
    <div className="flex grow gap-2 items-center py-1 px-2 mb-4 md:mb-0 mx-4 bg-darkerLight w-11/12 md:w-auto">
      <img src={search} alt="search icon" className="w-6" />
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="font-bold text-md outline-none text-dark bg-darkerLight w-full h-10"
      ></input>
    </div>
  );
}
