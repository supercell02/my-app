'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import next/image
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarLogo, NavbarButton } from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/moving-border";

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
        <SkillsPart />
      </body>
    </html>
  );
}

function SkillsPart() {
  const Section = ({ title, items }: { title: string; items: { src: string; label: string }[] }) => (
    <div className="w-full max-w-screen-lg px-4">
      <h4 className="text-2xl font-semibold my-6">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map(({ src, label }, idx) => (
          <div key={idx} className="flex items-center gap-2 justify-center">
            <Image src={src} width={30} height={30} alt={label} />
            <p className="m-0 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center py-10 space-y-8">
      <h3 className="text-3xl font-semibold">Languages and Tools</h3>

      <Section
        title="Programming Languages"
        items={[
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", label: "C" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", label: "C++" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", label: "JavaScript" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", label: "Python" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", label: "TypeScript" },
          { src: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", label: "Dart" },
        ]}
      />

      <Section
        title="Frontend"
        items={[
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", label: "HTML5" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", label: "CSS3" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", label: "React" },
          { src: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", label: "Flutter" },
          { src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg", label: "Tailwind" },
          { src: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg", label: "Bootstrap" },
        ]}
      />

      <Section
        title="Backend"
        items={[
          { src: "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp", label: "Express" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", label: "Node.js" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", label: "MongoDB" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", label: "MySQL" },
          { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", label: "Firebase" },
        ]}
      />

      <Section
        title="Designing"
        items={[
          { src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", label: "Figma" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png", label: "Photoshop" },
          { src: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg", label: "Illustrator" },
        ]}
      />

      <Section
        title="Tools"
        items={[
          { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", label: "Postman" },
          { src: "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png", label: "Git" },
        ]}
      />

      <div className="flex justify-center items-center mt-8">
        <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 px-6 py-2"
          >
            Check out my Resume
          </Button>
        </a>
      </div>
    </div>
  );
}
