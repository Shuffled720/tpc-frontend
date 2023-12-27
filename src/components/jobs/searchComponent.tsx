import FilterButton from "./filterButton";
const SearchComponent = () => (
  <nav className=" bg-gray-100 py-2">
    <div className="flex flex-row justify-end h-10 mr-16 py-2 w-11/12 inline-block">
      <div className="flex flex-row justify-end w-5/6">
        <input
          type="text"
          id="searchBox"
          placeholder="Search a company"
          className="bg-gray-200 h-8 my-auto rounded-md pl-4 mx-4"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-8 px-4 mx-2 my-auto rounded-md">
          Search
        </button>
      </div>
    </div>
    <FilterButton />
  </nav>
);

export default SearchComponent;
