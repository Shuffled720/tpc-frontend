import FilterButton from "./filterButton";
// pages/index.js
export const internshipData = [
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },
  {
    name: "Software Developer Intern",
    status: "JAF Unfilled",
    role: "Software Engineer",
    location: "Remote",
    stipend: 1000,
    duration: "3 months",
    key: 1,
  },
  {
    name: "Marketing Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "New York",
    stipend: 800,
    duration: "2 months",
    key: 2,
  },
  {
    name: "Data Science Intern",
    status: "JAF Filled",
    role: "Software Engineer",
    location: "San Francisco",
    stipend: 1200,
    duration: "4 months",
    key: 3,
  },

  // Add more internship objects as needed
];

// export default Home;
const SearchComponent = () => {
  return (
    <nav className=" bg-gray-100 py-2">
      <div className="flex flex-row justify-end h-10 mr-16 py-2 w-11/12 inline-block">
        <div className="flex flex-row justify-end w-5/6">
          {/* <SearchFilter /> */}
        </div>
      </div>
      <FilterButton />
    </nav>
  );
};

export default SearchComponent;
