import { FiAlignLeft } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../../../assets/icons/user.png";
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
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="rounded-full hover:border transition-all">
                  {user ? <img src={user.photoURL} /> : <img src={userIcon} />}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <Link className="btn btn-ghost btn-sm">Profile</Link>
                    </li>
                    <li>
                      <Link className="btn btn-ghost btn-sm">Logout</Link>
                    </li>
                  </>
                ) : (
                  <div className="flex flex-col lg:hidden">
                    <Link className="btn btn-ghost btn-sm">Login</Link>
                    <Link className="btn btn-ghost btn-sm">Register</Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
