'use client';

import React, { useState, useEffect } from "react";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarLogo, NavbarButton } from "@/components/ui/resizable-navbar";
import { Cover } from "@/components/ui/cover";
import { GlareCard } from "@/components/ui/glare-card";
export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Skills", link: "/skills" },
  ];

  const words = ["Developer", "Designer", "Programmer"];

  return (
    <html className="dark">
      <body className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
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
                <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
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
        <Contactpart/>
      </body>
    </html>
  );
}

function Contactpart(){
  return(
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Let&rsquo;s connect and build projects<br /> at <Cover>warp speed</Cover>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 justify-items-center">
      <GlareCard
          buttonLink="mailto:kumaramar4880@gmail.com?subject=Let's%20Connect&body=Hi%20Amar,"
          buttonText="Drop a Mail"
          bgColor="bg-[#EA4335]"
          textColor="text-white"
      >
       <h3 className="text-lg font-semibold">Email</h3>
        <p className="text-sm opacity-80">Let&rsquo;s connect—drop me a message anytime!</p>
      </GlareCard>
      <GlareCard
          buttonLink="https://www.linkedin.com/in/amar-k-t/"
          buttonText="Drop a connect"
          bgColor="bg-[#0077B5]"
          textColor="text-white"
      >
       <h3 className="text-lg font-semibold">LinkedIn</h3>
        <p className="text-sm opacity-80"> Let&rsquo;s grow our professional network together.</p>
      </GlareCard>

      <GlareCard
          buttonLink="https://github.com/supercell02"
          buttonText="Drop a Follow"
          bgColor="bg-[#333]"
          textColor="text-white"
      >
       <h3 className="text-lg font-semibold">GitHub</h3>
        <p className="text-sm opacity-80"> Check out what I&rsquo;ve been building lately.</p>
      </GlareCard>

      <GlareCard
          buttonLink="https://www.instagram.com/amar___kr.___thakur?igsh=ejR2a3RsejJ3NzU0"
          buttonText="Drop a DM"
          bgColor="bg-[#962fbf]"
          textColor="text-white"
      >
       <h3 className="text-lg font-semibold">Instagram</h3>
        <p className="text-sm opacity-80">A peek into my everyday life & tech moments.</p>
      </GlareCard>

      <GlareCard
          buttonLink="https://x.com/Amar4880"
          buttonText="Drop a Follow"
          bgColor="bg-[#1DA1F2]"
          textColor="text-white"
      >
       <h3 className="text-lg font-semibold">Twitter(X)</h3>
        <p className="text-sm opacity-80">Sharing thoughts, tech, and occasional rants.</p>
      </GlareCard>
    
    </div>
    </div>
  );
}