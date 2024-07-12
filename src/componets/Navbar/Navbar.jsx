import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
  { id: 1, name: "Home", link: "/#" },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  return (
    <div
      className="container bg-gradient-to-r from-secondary
     to-secondary/90 text-white"
    >
      <div className="py-2">
        <div className="flex justify-between items-center gap-4">
          {/*LOGO*/}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2x1 sm:text-3xl flex justify-center
                items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          {/*Links */}
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300"
          className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70
                     hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105
            duration-200 flex items-center gap-3"
            >
              Order
              <FaCoffee className="text-sl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;