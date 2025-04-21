'use client';

import React, { useState, useEffect } from "react";
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
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
      <h3 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "20px" }}>Languages and Tools</h3>

      {/* Programming Languages */}
      <h4 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>Programming Languages</h4>
      <div style={{ width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
        {[
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", label: "C" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", label: "C++" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", label: "JavaScript" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", label: "Python" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", label: "TypeScript" },
          { src: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", label: "Dart" },
        ].map(({ src, label }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <img src={src} width="30" height="30" alt={label} />
            <p style={{ margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Frontend */}
      <h4 style={{ fontSize: "24px", fontWeight: "600", margin: "40px 0 20px" }}>Frontend</h4>
      <div style={{ width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
        {[
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", label: "HTML5" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", label: "CSS3" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", label: "React" },
          { src: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", label: "Flutter" },
          { src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg", label: "Tailwind" },
          { src: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg", label: "Bootstrap" },
        ].map(({ src, label }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <img src={src} width="30" height="30" alt={label} />
            <p style={{ margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h4 style={{ fontSize: "24px", fontWeight: "600", margin: "40px 0 20px" }}>Backend</h4>
      <div style={{ width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
        {[
          { src: "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp", label: "Express" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", label: "Node.js" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", label: "MongoDB" },
          { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", label: "MySQL" },
          { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", label: "Firebase" },
        ].map(({ src, label }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <img src={src} width="30" height="30" alt={label} />
            <p style={{ margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Designing */}
      <h4 style={{ fontSize: "24px", fontWeight: "600", margin: "40px 0 20px" }}>Designing</h4>
      <div style={{ width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
        {[
          { src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", label: "Figma" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png", label: "Photoshop" },
          { src: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg", label: "Illustrator" },
        ].map(({ src, label }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <img src={src} width="30" height="30" alt={label} />
            <p style={{ margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Tools */}
      <h4 style={{ fontSize: "24px", fontWeight: "600", margin: "40px 0 20px" }}>Tools</h4>
      <div style={{ width: "100%", maxWidth: "1000px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
        {[
          { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", label: "Postman" },
          { src: "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png", label: "Git" },
        ].map(({ src, label }, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <img src={src} width="30" height="30" alt={label} />
            <p style={{ margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

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
