"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/assets/Images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const items = [
    { name: "HOME", link: "/", id: 1 },
    { name: "TIMELINE", link: "/timeline", id: 2 },
    { name: "EVENTS", link: "/events", id: 3 },
    { name: "CONTACT US", link: "/contact-us", id: 4 },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed h-18 top-0 left-0 w-full flex items-center justify-between px-9 z-50 backdrop-blur-lg bg-transparent shadow-[0px_10px_20px_rgba(0,0,0,0.1)]
        ${russoOne.className}`}
    >
      {/* Logo with Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link href="/" className="focus:outline-none">
          <Image
            src={logo}
            alt="Logo"
            width={115}
            height={115}
            priority
            className="rounded-full cursor-pointer md:w-[115px] md:h-[115px]"
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="flex items-center ml-auto gap-6">
        <ul className="hidden md:flex gap-6 text-[#FEF1DA] text-lg">
          {items.map((item) => (
            <motion.li
              key={item.id}
              className="relative group"
              whileHover={{ scaleX: 1.1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Link
                href={item.link}
                className="hover:text-[#d97706] focus:text-[#d97706] active:text-[#d97706] transition duration-300"
              >
                {item.name}
              </Link>
              <motion.span
                className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#d97706] group-hover:w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Sponsor Button */}
        <motion.div
          whileHover={{ scaleX: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href="/sponsors"
            className="hidden md:block px-4 py-2 bg-[#d97706] text-[#FEF1DA] rounded-3xl border-4 border-[#d97706] transition 
            hover:bg-[#FEF1DA] hover:text-black focus:bg-[#FEF1DA] focus:text-black active:bg-[#FEF1DA] active:text-black"
          >
            SPONSORS →
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {menuOpen ? (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <XMarkIcon className="w-10 h-10" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Bars3Icon className="w-10 h-10" />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.15, 0.85, 0.3, 1] }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-5 right-5 text-white"
              onClick={() => setMenuOpen(false)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <XMarkIcon className="w-10 h-10" />
            </motion.button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center gap-6 text-xl text-[#FEF1DA]">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  whileHover={{ scaleX: 1.05 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#d97706] focus:text-[#d97706] active:text-[#d97706] transition duration-300"
                  >
                    {item.name}
                  </Link>
                  <motion.span
                    className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#d97706] group-hover:w-full"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              {/* Mobile Sponsor Button */}
              <motion.div
                whileHover={{ scaleX: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/sponsors"
                  className="px-4 py-2 rounded bg-[#d97706] text-[#FEF1DA] border-4 border-[#d97706] transition 
                  hover:bg-[#FEF1DA] hover:text-black focus:bg-white focus:text-black active:bg-[#FEF1DA] active:text-black"
                >
                  SPONSORS →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
