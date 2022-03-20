import React from "react";

export const Navbar = () => {
  const NavItem = ({ title, href }: any) => {
    return (
      <li className="bg-gradient-to-r hover:text-white cursor-pointer p-2 from-black to-black bg-growing-underline">
        <a href={href}>{title}</a>
      </li>
    );
  };

  return (
    <nav className="flex justify-between border-b border-black mx-auto uppercase h-[72px] items-center">
      <ul className="flex relative">
        <NavItem title={"About Me"} href={"/"} />
        <li className="line relative w-5 mx-5"></li>
        <NavItem title={"Projects"} href={"/projects"} />
      </ul>
      <h1 className="fancy-text p-8 cursor-progress hover:animate-bounce text-[26px] leading-[21px] font-bold">
        Zita Celis
      </h1>
      <ul className="flex relative">
        <NavItem
          title={"Instagram"}
          href={"https://www.instagram.com/zitaxcelis"}
        />
        <li className="line relative w-5 mx-5"></li>
        <NavItem
          title={"LinkedIn"}
          href={"https://www.linkedin.com/in/zitacelis/"}
        />
      </ul>
    </nav>
  );
};
