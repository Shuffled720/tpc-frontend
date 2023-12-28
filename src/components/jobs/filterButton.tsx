"use client";
// pages/index.tsx
import { useState, useEffect } from "react";
import FilterModal from "./filterModal";
import { internshipData } from "./searchComponent";
const categories = ["JAF Filled", "JAF Unfilled"];

export default function FilterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(internshipData);
  const [searchedData, setSearchedData] = useState(filteredData);
  const [query, setQuery] = useState("");

  const handleInputChange = (event: any) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);
    const filtered = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setSearchedData(filtered);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      let filters = selectedCategories.filter((c) => c !== category);
      setSelectedCategories(filters);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedCategories]);

  const filterItems = () => {
    if (selectedCategories.length > 0) {
      let tempItems = selectedCategories.map((selectedCategory) => {
        let temp = internshipData.filter(
          (item) => item.status === selectedCategory
        );
        return temp;
      });
      setFilteredData(tempItems.flat());
    } else {
      setFilteredData([...internshipData]);
    }
  };
  return (
    <div className=" my-auto rounded-md">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="hover:bg-gray-200 bg-white text-black h-8 px-4 my-2 ml-0 rounded right-32 w-44 absolute top-12"
      />
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-8 px-4 my-2 rounded-md absolute right-8 top-12"
      >
        Filters
      </button>
      {isModalOpen && (
        <FilterModal closeModal={closeModal} isOpen={isModalOpen}>
          <h2 className="text-2xl font-bold mb-4">Filter by Status</h2>
          <div>
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white py-2 px-4 mt-4 mb-0 ml-48 rounded"
          >
            Apply Filters
          </button>
        </FilterModal>
      )}
      <div className="block w-full">
        <div className="grid w-full xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-h-screen justify-items-center">
          {query === ""
            ? filteredData.map((category, index) => (
                <div className="container w-60 my-2 inline-block">
                  <div className="bg-white h-80 rounded-lg shadow-md p-4">
                    <div className="mb-2 bg-gray-200 w-44 px-2 py-1 rounded inline">
                      <h3
                        className="mb-2 bg-gray-200 w-44 rounded inline"
                        key={index}
                      >
                        Status:
                      </h3>
                      <h3 className="font-bold mb-2 bg-gray-200 w-44 px-1 rounded inline">
                        {category.status}
                      </h3>
                    </div>
                    <div className="mb-0 h-2/5">
                      <h1 className="text-2xl font-bold mt-4">
                        {category.name}
                      </h1>
                      <h2 className="text-lg text-gray-600">{category.role}</h2>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />

                    <ul className="list-disc pl-5">
                      <li className="font-bold">{category.location}</li>
                      <li>{category.stipend}</li>
                      <li>{category.duration}</li>
                    </ul>

                    <button className="text-blue-500 pt-4 px-2 my-auto">
                      View Details --{">"}
                    </button>
                  </div>
                </div>
              ))
            : searchedData.map((category, index) => (
                <div className="container w-60 my-2 inline-block">
                  <div className="bg-white h-80 rounded-lg shadow-md p-4">
                    <div className="mb-2 bg-gray-200 w-44 px-2 py-1 rounded inline">
                      <h3 className="mb-2 bg-gray-200 w-44 rounded inline">
                        Status:
                      </h3>
                      <h3
                        className="font-bold mb-2 bg-gray-200 w-44 px-1 rounded inline"
                        key={index}
                      >
                        {category.status}
                      </h3>
                    </div>
                    <div className="mb-0 h-2/5">
                      <h1 className="text-2xl font-bold mt-4">
                        {category.name}
                      </h1>
                      <h2 className="text-lg text-gray-600">{category.role}</h2>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />

                    <ul className="list-disc pl-5">
                      <li className="font-bold">{category.location}</li>
                      <li>{category.stipend}</li>
                      <li>{category.duration}</li>
                    </ul>

                    <button className="text-blue-500 pt-4 px-2 my-auto">
                      View Details --{">"}
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* Render your data here based on selectedCategories */}
    </div>
  );
}
