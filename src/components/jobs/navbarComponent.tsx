import Link from "next/link";

const Navbar = () => (
  <nav className="pt-2">
    <div className="flex flex-row justify-between">
      <div className="imag w-40  ml-2.5 flex items-center">
        <img
          src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
          className="h-10 w-24"
        />
      </div>
      <div className="flex flex-row justify-end h-10 mr-16">
        <div className="flex flex-row justify-end">
          <button className="text-blue-500 border-blue-500 border-2 bg-white h-8 px-4 mx-2 my-auto rounded-md">
            Log in
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white h-8 px-4 mx-2 my-auto rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
