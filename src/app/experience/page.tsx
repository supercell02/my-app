"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn, navLinks } from "@/lib/utils";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  return (
    <html className="dark">
      <body className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div>
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navLinks} />
              <NavbarButton href="/contact">Let&rsquo;s Talk</NavbarButton>
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
        <main className="pt-20">
          <div className="bg-black flex flex-col items-center justify-center rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
              Work Experience
            </h1>
          </div>
        </main>
        <div className="flex flex-col items-center justify-center pt-20 pl-20 pr-20 pb-20 ">
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[500px] xl:min-h-[200px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Frontend & App Developer
              </h2>
              <h3 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-l lg:text-2xl  tracking-[-0.015em] text-white">
                Yolopment
              </h3>
              <h5>
                May 2025 - Present &bull; Ongoing
              </h5>
              <ul className="mt-4 max-w-[26rem] space-y-3 text-left text-base/6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-white">
                    Build and maintained responsive web applications using
                    React.js and Next.js
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-white">
                    Developed mobile applications with Flutter, ensuring
                    cross-platform compatibility and performance.
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex w-1/2 justify-start">
            <a
              href="https://yolopment.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-6 top-1/2 -translate-y-1/2"
            >
              <img
                src="/image.png"
                width={420}
                height={420}
                alt="Yolopment logo"
                className="object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
            </div>
          </WobbleCard>
        </div>
        <div className="flex flex-col items-center justify-center pt-1 pl-20 pr-20 pb-20 ">
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-red-900 min-h-[400px] lg:min-h-[500px] xl:min-h-[200px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Co-Founder
              </h2>
              <h3 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-l lg:text-2xl  tracking-[-0.015em] text-white">
                FREMN
              </h3>
              <h5>
                November 2025 - Present &bull; Ongoing
              </h5>
              <ul className="mt-4 max-w-[26rem] space-y-3 text-left text-base/6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-white">
                    Co-developed and launched a SaaS platform that streamlines
                    customer support for SMEs.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-white">
                    Spearheaded frontend architecture for the project, crafting
                    the admin dashboard and embedded widget in Solvia, improving
                    user interface responsiveness by 30%.
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex w-1/2 justify-start">
            <a
              href="https://fremn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-6 top-1/2 -translate-y-1/2"
            >
              <img
                src="/fremn-logo.png"
                width={200}
                height={200}
                alt="FREMN logo"
                className="object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
            </div>
          </WobbleCard>
        </div>
      </body>
    </html>
  );
}
