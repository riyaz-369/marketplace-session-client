import { FiAlignLeft } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const activeLink =
    "text-green-500 font-bold underline underline-offset-8 text-base flex items-center gap-1";
  const deActiveLink =
    "transition-all hover:underline underline-offset-8 hover:text-orange-500 flex items-center gap-1";

  const navLinks = (
    <>
      <NavLink
        to="/"
        title="Home"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <IoHome />
        Home
      </NavLink>
      <NavLink
        to="/addCraft"
        title="Add New Art and Craft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        About
      </NavLink>
      <NavLink
        to="/myCraftList"
        title="Your Art and Craft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Your link
      </NavLink>
      <div className="space-y-3 lg:hidden">
        <Link to="/logIn" className="btn rounded-md w-full btn-sm btn-warning">
          Login
        </Link>
        <Link
          to="/register"
          className="btn rounded-md w-full btn-sm btn-warning"
        >
          Register
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <div className="sticky top-0 z-50 shadow-md bg-base-100">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <span className="text-xl">
                  <FiAlignLeft />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-md w-40 space-y-4"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              title="WebName | Home"
              className="text-xl md:text-3xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <h1 className="">WebName</h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base space-x-8">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="space-x-3 hidden lg:flex mr-3">
              <Link to="/logIn" className="btn rounded-full btn-warning">
                Login
              </Link>
              <Link to="/register" className="btn rounded-full btn-warning">
                Register
              </Link>
            </div>
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>

                <div>
                  <div
                    tabIndex={0}
                    className="relative inline-block dropdown-content"
                  >
                    <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                      <a className="flex items-center p-3 -mt-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                          src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        />
                        <div className="mx-1">
                          <h1 className="font-semibold text-gray-700 dark:text-gray-200">
                            Jane Doe
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            janedoe@exampl.com
                          </p>
                        </div>
                      </a>

                      <hr className="border-gray-200 dark:border-gray-700 " />

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        {/* profile icon */}

                        <span className="mx-1">view profile</span>
                      </a>

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        {/* setting icon */}
                        <span className="mx-1">Settings</span>
                      </a>

                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        {/* help icon */}
                        <span className="mx-1">Help</span>
                      </a>
                      <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        {/* icon */}
                        <span className="mx-1">Sign Out</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
