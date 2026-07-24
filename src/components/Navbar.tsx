"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    { label: "About" },
    { label: "Qualification" },
    { label: "Blogs" },
    { label: "Contact" },
  ];
  const [selected, setSelected] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ticking = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (label: string) => {
    setSelected(label);
    setIsMobileMenuOpen(false);
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Show/hide navbar based on scroll direction + close mobile menu on scroll
  useEffect(() => {
    const AT_TOP_THRESHOLD = 40;
    const SCROLL_DELTA_MIN = 5;

    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);

      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;
        // console.log("scrollY:", currentY, "delta:", delta);
        setScrollPosition(currentY);

        if (currentY <= AT_TOP_THRESHOLD) {
          setShowNav(true);
        } else if (Math.abs(delta) > SCROLL_DELTA_MIN) {
          setShowNav(delta <= 0);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Scroll-spy: highlight nav item based on which section is in view
  useEffect(() => {
    const sectionIds = ["home", "about", "qualification", "blogs", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const HEADER_OFFSET = 80; // px — height of your fixed navbar

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const label =
              id === "home" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1);
            setSelected(label);
          }
        });
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -45% 0px`,
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50  max-w-[1284px] h-[70px] lg:h-[80px]  text-white px-10 lg:px-2.5 rounded-[20px] sm:rounded-[35px] lg:rounded-[50px]  mx-auto flex items-center justify-between transition-all duration-300 ease-in-out ${
        showNav
          ? "translate-y-4 lg:translate-y-8"
          : " translate-y-4 lg:-translate-y-[100%]"
      } ${scrollPosition >= 5 ? "w-1/10 left-0 lg:inset-x-0 lg:w-full lg:bg-[#171717ed] lg:backdrop-blur-[15px] lg:border lg:border-[#ffffff4e]" : "  w-full lg:inset-x-0 bg-[#171717ed] backdrop-blur-[15px] lg:border border-[#ffffff1a]"}`}
    >
      {/* Left Menu (Desktop) */}
      <div className="hidden lg:flex flex-1 justify-start gap-2.5">
        {menuItems.slice(0, 2).map((item) => (
          <div
            key={item.label}
            className="flex w-[45%] items-center justify-around"
          >
            <button
              className={`w-[139px] h-[60px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"}`}
              onClick={() => scrollToSection(item.label)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div
        onClick={() => scrollToSection("Home")}
        className={`flex flex-col items-center bg-[#272727] lg:bg-transparent flex-shrink-0 cursor-pointer border-x-2 -translate-x-7 lg:-translate-x-0 scale-80 lg:scale-100 rounded-full ${selected === "Home" ? "border-[#d2cac6]" : " border-transparent hover:bg-[#232323]"} transition-all duration-300 h-[60px] ${scrollPosition >= 5 ? "  px-3.5 lg:px-12" : " px-12"}`}
      >
        <div
          className={`${scrollPosition >= 5 ? " scale-125 translate-y-3.5 lg:translate-y-1 lg:scale-100" : "translate-y-1"} text-[#fd853a]  rounded-full flex items-center justify-center mb-3 lg:mb-1 `}
        >
          <Image
            src="/logo.png"
            alt="Frame Decoration"
            width={30}
            height={30}
            className="size-7"
            priority
          />
        </div>
        <span
          className={` ${scrollPosition >= 5 ? " hidden lg:block" : ""} font-bold text-[#fd853aec] -translate-y-2 text-sm sm:text-base lg:text-lg tracking-wide `}
        >
          Jastan Ric
        </span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setScrollPosition(0);
            setIsMobileMenuOpen(true);
          }}
          className={` w-full h-full rounded-full  absolute left-0 top-0 ${scrollPosition >= 5 ? " lg:hidden" : "hidden"}`}
        ></div>
      </div>

      {/* Right Menu (Desktop) */}
      <div className="hidden lg:flex flex-1 justify-end gap-4">
        {menuItems.slice(2).map((item) => (
          <div
            key={item.label}
            className="flex w-[45%] items-center justify-around"
          >
            <button
              className={`w-[139px] h-[60px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"}`}
              onClick={() => scrollToSection(item.label)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        className={` flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors ${scrollPosition >= 5 ? "hidden" : "lg:hidden"}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`absolute top-[100%] left-0 right-0 mt-2 bg-[#171717e6] backdrop-blur-3xl rounded-[25px] border border-[#a5a2a2a9] lg:hidden z-40 overflow-hidden transition-all duration-400 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-0 scale-y-60 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-base font-medium transition duration-200 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"} ${
                isMobileMenuOpen ? "-translate-y-0" : "-translate-y-full"
              }`}
              onClick={() => scrollToSection(item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
