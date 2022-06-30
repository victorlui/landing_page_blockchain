import { useState } from "react";
import Menu from "../assets/menu.png";
import Logo from "./Logo";

const links = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About us", href: "#about" },
  { id: 3, title: "Our interests", href: "#interests" },
  { id: 4, title: "Value", href: "#value" },
  { id: 5, title: "Current projects", href: "#projects" },
];

export function Header() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-black-700 font-bold font-[30px]">Excursy</h1>
      </div>

      <div
        className="sm:flex md:hidden lg:hidden xl:hidden"
        onClick={() => setIsActive(!isActive)}
      >
        <img src={Menu} alt="" />
      </div>

      {isActive && (
        <div className="sm:flex flex-col items-center gap-10 p-8 absolute bg-white border-t-2 border-b-2 right-0 top-[100px] bottom-0 w-[100%] md:hidden lg:hidden xl:hidden ">
          {links.map((link) => {
            return (
              <>
              <a href={link.href} onClick={() => setIsActive(false)}>
                <p className="text-[18px] text-black-700">{link.title}</p>
              </a>
              <hr className="border-gray-300 w-[100%]" />
              </>
            );
          })}
        </div>
      )}
      <div className="flex items-center gap-10 sm:hidden">
        {links.map((link) => {
          return (
            <a href={link.href}>
              <p className="text-[18px] text-black-700">{link.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
