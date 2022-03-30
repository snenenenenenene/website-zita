import React, { useState } from "react";
import { ImCross, ImMenu } from "react-icons/im";

export const Navbar = () => {
  const [isPressed, setIsPressed] = useState(false);
  const NavItem = ({ title, href }: any) => {
    return (
      <li className="bg-gradient-to-r px-4 hover:text-white cursor-pointer p-2 from-black to-black bg-growing-underline">
        <a href={href}>{title}</a>
      </li>
    );
  };

  return (
    <nav
      className={`md:flex justify-between absolute w-full md:relative md:border-b z-50 md:border-black py-4 mx-auto uppercase md:h-[72px]  ${
        isPressed ? `visible bg-white` : `invisible md:visible`
      }`}
    >
      <div
        className={`${
          isPressed
            ? "visible"
            : "invisible md:visible md:flex md:items-center md:justify-between md:w-screen"
        }`}
      >
        <div className="absolute px-2 w-20 h-8 z-50 md:invisible">
          <button
            className="md:invisible visible w-20 h-8 px-2"
            onClick={() => {
              setIsPressed(!isPressed);
            }}
          >
            {isPressed ? <ImCross /> : <ImMenu />}
          </button>
        </div>
        <ul className="flex md:pt-0 pt-8 flex-col md:flex-row relative">
          <NavItem title={"About Me"} href={"/"} />
          <li className="line md:visible invisible relative w-5 mx-5"></li>
          <NavItem title={"Projects"} href={"/projects"} />
        </ul>
        <h1 className="fancy-text visible p-8 md:relative absolute right-0 top-0 cursor-progress hover:animate-bounce text-[26px] leading-[21px] font-bold">
          Zita Celis
        </h1>
        <ul className="flex flex-col md:flex-row relative">
          <NavItem
            title={"Instagram"}
            href={"https://www.instagram.com/zitaxcelis"}
          />
          <li className="line md:visible invisible relative w-5 mx-5"></li>
          <NavItem
            title={"LinkedIn"}
            href={"https://www.linkedin.com/in/zitacelis/"}
          />
        </ul>
      </div>
    </nav>
  );
};
