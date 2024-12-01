import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const env = ["crowncoins", "icasino"];
  return (
    <div className='flex h-screen bg-gray-900'>
      {!isOpen ? (
        <button
          className='absolute w-fit top-4 left-4 z-30 text-gray-700 focus:outline-none md:hidden'
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu size={22} />
        </button>
      ) : (
        <></>
      )}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-gray-100 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 z-20`}
      >
        <div className='p-4'>
          <h1 className='text-lg font-bold'>{env ? env : "crowncoins"}</h1>
        </div>
        <nav>
          <ul>
            {routes.map((item) => (
              <li key={item}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm rounded ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='absolute bottom-0 w-full p-4 border-t border-gray-700'>
          <button
            onClick={toggleDrawer}
            className='w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex justify-between items-center'
          >
            Select Environment
            <svg
              className={`w-5 h-5 transform transition-transform ${
                isDrawerOpen ? "rotate-0" : "-rotate-180"
              }`}
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
          {isDrawerOpen && (
            <div className='absolute bottom-16 w-5/6 bg-gray-700 rounded-lg p-4 space-y-2 shadow'>
              <button
                className='w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded shadow'
                onClick={toggleDrawer}
              >
                CrownCoins Dev
              </button>
              <button
                className='w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded shadow'
                onClick={toggleDrawer}
              >
                ICasino Dev
              </button>
              {/* <button className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded shadow'>
                CrownCoins Prod
              </button>
              <button className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded shadow'>
                ICasino Prod
              </button> */}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
