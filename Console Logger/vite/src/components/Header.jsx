import { NavLink } from "react-router-dom";

import React from 'react'

export default function Header() {
  return (
    
        <div className="flex justify-center w-[400px] ml-[580px]">
          <ul className="flex gap-[56px] list-none justify-center my-[31px] mx-[721px] bg-gray-200 bg-opacity-50 rounded-[24px] p-[17px_19px] w-[900px] backdrop-blur-[50px]">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/profile"
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/profile"
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/profile"
              >
                Kids
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/profile"
              >
                Sale
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-black text-[14px] font-semibold bg-white py-[13px] px-[17px] rounded-[23px]"
                    : "text-black text-[14px] font-semibold"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      );
}

