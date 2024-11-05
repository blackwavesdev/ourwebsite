"use client";
import React, { useState, useEffect } from "react";
import myLogo from "../assets/images/logo-bw.png";
import Image from "next/image";

const Nav = () => {
    const links = [
        { name: 'About us', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Pricing', link: '/' },
        { name: 'Blog', link: '/' }
    ];

    const [visible, setMenu] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setMenu((prev) => !prev);
    };

    // Handle scroll to toggle header visibility
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isMediumScreen = window.innerWidth < 768; // Change this threshold based on your tailwind config

        // Only hide header on scroll down for medium screens and smaller
        if (isMediumScreen) {
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setIsHeaderVisible(false);
            } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
                setIsHeaderVisible(true);
            }
        } else {
            // For larger screens, ensure header is always visible
            setIsHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },);

    return (
        <header className={` text-white relative tracking-wide z-50 box-border block w-full font-sans`}>
            {/* Main Header */}
            <div
                className={`headContainer pt-2 md:pt-0 flex justify-between sm:justify-around  box-border fixed bg-black w-full items-center mx-auto lg:w-12/12  transition-all duration-500 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <div className={`logo transition-all duration-500 ease-in-out flex justify-start items-center cursor-pointer text-center ml-6 md:ml-0 p-0 `}>
                    <Image className={`w-24  md:w-28 transition-all duration-500 ease-in-out ${lastScrollY ? 'lg:w-24' : 'lg:w-34'}`} src={myLogo} alt="company's logo" />
                </div>

                {/* Navigations for larger screens */}
                <nav className={`lg:relative lg:basis-2/6 bg-transparent transition-all md:ml-2 `}>
                    <ul className={`xl:justify-around transition-all duration-500 ease-in-out lg:justify-between bg-transparent font-normal text-base hidden lg:flex ${lastScrollY ? 'xl:justify-evenly ml-4' : 'xl:justify-around ml-0'}`}>
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className={` text-center text-lg font-medium  lg:mt-0 lg:ml-0 border-b-2 border-transparent hover:border-main transition-all duration-500 ease-in-out ${lastScrollY ? 'text-base' : 'text-lg'}`}
                            >
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className="contact text-center">
                    <a
                        href="/"
                        className={`transition-all duration-500 ease-out text-white py-2 px-6 border-opacity-50 rounded-full border-2 bg-black outline-1 outline-main border-main font-bold text-lg hidden lg:block cursor-pointer hover:bg-main hover:scale-95 ${lastScrollY ? 'text-sm' : 'text-lg'}`}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Mobile Menu Toggler */}
                <div className="lg:hidden mr-8">
                    <button
                        onClick={toggleMenu}
                        className="relative w-6 h-6 font-thin flex items-center justify-center"
                        aria-label={visible ? "Close menu" : "Open menu"}
                    >
                        <div className="relative w-full h-full flex flex-col justify-around items-center">
                            {/* First Bar */}
                            <div className={`bg-white h-0.5 w-full transition-transform duration-500 ${visible ? "translate-y-1.5 rotate-45" : ""}`}></div>
                            {/* Second Bar */}
                            <div className={`bg-white h-0.5 w-full transition-all duration-500 ${visible ? "opacity-0" : "opacity-100"}`}></div>
                            {/* Third Bar */}
                            <div className={`bg-white h-0.5 w-full transition-transform duration-500 ${visible ? "-translate-y-1.5 -rotate-45" : ""}`}></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`lg:hidden fixed left-0 w-full h-full transition-all  duration-200 ease-in-out bg-black text-center z-50 
                    ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                    ${!isHeaderVisible ? 'h-screen top-0' : 'top-20 h-auto'}`}
            >
                <ul
                    className={`flex flex-col justify-center items-center transition-transform duration-500 ease-in-out 
                    ${visible ? 'translate-y-0' : '-translate-y-full'} ${!isHeaderVisible ? 'mt-16' : 'mt-0'}`}
                >
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="mt-0 m-auto w-fit border-b-2 border-transparent hover:border-main pt-3 lg:mt-0 mb-16 text-3xl font-medium transition-all duration-500 ease-out text-white"
                        >
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <li className="pt-3 mt-13">
                        <a
                            href="/"
                            className="transition-all duration-500 ease-in-out text-white py-3 px-6 border-opacity-50 rounded-full border-2 bg-black outline-1 outline-main border-main font-extrabold sm:text-2xl text-lg lg:block cursor-pointer hover:bg-main hover:scale-95 hover:px-4"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
