import React, { useState } from "react";
import { Link } from "react-router-dom";
import { House, ChevronRight, Presentation, Users } from "lucide-react";

const NavBar = () => {
  const sections = [
    { title: "Home", src: <House />, to: "/" },
    { title: "Users", src: <Users />, to: "/users" },
    { title: "Posts", src: <Presentation />, to: "/posts" },
  ];

  // Device Width Calculation
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateDimensions);
  let open = width > 650 ? true : false;

  return (
    <div className="flex h-screen border-r-[1px] bg-white">
      <div
        className={` ${
          open ? " md:w-72 w-56" : "md:w-20 w-12"
        }  md:p-5 p-[0.3rem]   pt-4 
         duration-300 my-10  `}
      >
        <div className="mx-auto max-w-32 mb-8 flex gap-2">
          <img src="/assets/logo.svg" alt="" loading="lazy" />
          {open ? (
            <h1 className="font-bold text-3xl text-[#007DFC]">Logo</h1>
          ) : (
            ""
          )}
        </div>

        <ul className="pt-2">
          {sections.map((section, index) => (
            <Link to={section.to}>
              <li
                key={index}
                className={`flex rounded-md align-middle cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-gray-500 text-sm items-center gap-x-4 mt-4 
            "} ${open ? "md:p-4 p-2" : "p-2"}`}
              >
                {section.src}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 w-28 font-medium text-base text-inherit`}
                >
                  {section.title}
                </span>
                <ChevronRight
                  width={28}
                  height={28}
                  className={`${!open && "hidden"} right-4`}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
