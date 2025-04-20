'use client'
import React, { useState } from "react";
import {  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton, } from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Vortex } from "@/components/ui/vortex";
 
 

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <html  className="dark"> 
      <body className="bg-white dark:bg-black text-black dark:text-white">
      <div>
        <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <NavbarButton href="/contact">Let’s Talk</NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-black dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
         </Navbar>
        </div>
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[90vh] overflow-hidden">
  <Vortex
    backgroundColor="black"
    rangeY={800}
    particleCount={500}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    <img src="" alt="" />
    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
      The hell is this?
    </h2>
    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
      This is 404 page. It&apos;ll appear when you try to access a page that does not exist.
      <br /> But don&apos;t worry, you can always go back to the home page and start over.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <button
        onClick={() => (location.href = '/')}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
      >
        Home
      </button>
      <a
        target="_blank"
        href="https://www.hotstar.com/in/movies/fight-club/1971007972?utm_source=gwa"
        className="px-4 py-2 text-white"
      >
        Watch ***** ****
      </a>
    </div>
  </Vortex>
</div>
      
    </body>
    </html>
);
}
