import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin, gmail } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBeyondPage = location.pathname === "/beyond";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={`${isBeyondPage ? "text-[#626F47]" : "text-white"} text-[18px] font-bold cursor-pointer flex `}>
            Anirudh S
          </p>
        </Link>

        <div className='hidden sm:flex flex-row gap-10 items-center'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title
                  ? (isBeyondPage ? "text-[#F0BB78]" : "text-white")
                  : (isBeyondPage ? "text-[#1e293b]" : "text-secondary")
                  } hover:${isBeyondPage ? "text-[#F0BB78]" : "text-white"} text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={isBeyondPage ? `/#${nav.id}` : `#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={`${isBeyondPage ? "text-[#F0BB78]" : "text-secondary hover:text-white"} text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Beyond")}
            >
              <Link to='/beyond' target='_blank'>Beyond</Link>
            </li>
          </ul>
          <div className='flex gap-4'>
            <div
              onClick={() => window.open("https://github.com/Ani011104", "_blank")}
              className='w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200'
            >
              <img
                src={github}
                alt='github'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title
                    ? (isBeyondPage ? "text-[#F0BB78]" : "text-white")
                    : (isBeyondPage ? "text-[#1e293b]" : "text-secondary")
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={isBeyondPage ? `/#${nav.id}` : `#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Beyond"
                  ? (isBeyondPage ? "text-[#F0BB78]" : "text-white")
                  : (isBeyondPage ? "text-[#1e293b]" : "text-secondary")
                  }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Beyond");
                }}
              >
                <Link to='/beyond' target='_blank'>Beyond</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
