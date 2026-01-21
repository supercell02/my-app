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
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
 

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Skills", link: "/skills" },
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
      <ProjectsPage/>
    </body>
    </html>
);
}
const words = `Projects by Amar.All of projects are developed on different type of tech stacks.`;
function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center">
         <h1 className="pt-20 md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        PROJECTS
      </h1>
      <TextGenerateEffect duration={1} filter={false} words={words} />
      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardOfProjects
          title="SoapBoards"
          description="Realtime Interactive Whiteboard App with collaborative drawing features."
          link="https://soapboard.amarkt.me"
        />
          <CardOfProjects
          title="SOLVIA"
          description="AI customer support OS for SMEs"
          link="https://solvia.fremn.com/"
        />
    </div>
        
    </div>
  );
}

function CardOfProjects({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] overflow-hidden">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={title} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {description}
      </h2>
      <a
        href={link}
        className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-auto text-black dark:text-white px-4 py-1 self-start"
      target="_blank"
      >
        View Project
      </a>
    </div>
  );
}