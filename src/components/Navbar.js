import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-70 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-white font-bold text-gray-700 py-1 px-2 rounded dark:bg-white dark:text-black">
            Gaggle
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setTheme(!theme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg"
        >
          {theme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
