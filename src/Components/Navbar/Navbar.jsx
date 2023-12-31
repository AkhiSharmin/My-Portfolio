import { Link } from "react-router-dom";

import resume from "../../assets/resume/Resume-Sharmin Akter.pdf";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white bg-opacity-80">
      <div className="navbar max-w-screen-xl mx-auto z-10 p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-5 shadow shadow-box w-52 text-left text-2xl"
            >
              {navItem}
            </ul>
          </div>

          <Link className="text-5xl font-semibold">
            <span className="banner-heading-sub">Sharmin</span>.me
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal text-3xl ">{navItem}</ul>
          </div>
          <a href={resume} className="btn-sub" download="sharmin-resume">
            Download Cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
