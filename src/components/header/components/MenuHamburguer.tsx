import { useState } from "react";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import closeIcon from "../../../assets/icons/closeIcon.svg";
import arrowToUp from "../../../assets/icons/arrowUp.svg";
import arrowToDown from "../../../assets/icons/arrowDown.svg";
import { Link } from "react-router-dom";
interface MenuHamburguerProps {
  dark: boolean;
}

export function MenuHamburguer({ dark }: MenuHamburguerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleNews = () => setIsNewsOpen((prev) => !prev);

  return (
    <>
      {/* Botão do menu */}
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <img
          src={menuIcon}
          className={`w-6 h-6 ${dark ? "invert" : ""}`}
          alt="menu"
        />
      </button>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-90 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-3 text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <img
              src={closeIcon}
              className={`w-6 h-6 ${dark ? "invert" : ""}`}
              alt="menu"
            />
          </button>
        </div>

        <nav className="h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200 z-10 ">
          <Link to="/" onClick={toggleMenu} className="hover:text-red-500">
            Home
          </Link>
          <div className="text-center">
            <button
              onClick={toggleNews}
              className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
            >
              News
              <img
                src={isNewsOpen ? arrowToUp : arrowToDown}
                alt="arrow"
                className={`w-4 h-4 ml-1 inline-block ${dark ? "invert" : ""}`}
              />
            </button>

            {isNewsOpen && (
              <div className="flex flex-col mt-2 space-y-2 font-semibold gap-1">
                <Link
                  to="/news/business"
                  onClick={toggleMenu}
                  className="hover:text-red-500"
                >
                  Business
                </Link>
                <Link
                  to="/news/science"
                  onClick={toggleMenu}
                  className="hover:text-red-500"
                >
                  Science
                </Link>
                <Link
                  to="/news/sundayreview"
                  onClick={toggleMenu}
                  className="hover:text-red-500"
                >
                  Sundayreview
                </Link>
                <Link
                  to="/news/politics"
                  onClick={toggleMenu}
                  className="hover:text-red-500"
                >
                  Politics
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/breakingnews"
            onClick={toggleMenu}
            className="hover:text-red-500"
          >
            Breaking News
          </Link>
          <Link
            to="/opinion"
            onClick={toggleMenu}
            className="hover:text-red-500"
          >
            Opinion
          </Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-red-500">
            About
          </Link>
        </nav>
      </div>
    </>
  );
}
