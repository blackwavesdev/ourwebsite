"use client";
import React from "react";
import { useState } from "react";
import myLogo from "../assets/images/logo-bw.png";
import Image from "next/image";
import { X, Menu } from "lucide-react";
const Nav = () => {
    //Navigations
    const links = [
        { name: 'About us', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Pricing', link: '/' },
        { name: 'Blog', link: '/' }
    ]
    const [visible, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu((cond) => !cond);
    }
    return <header className="bg-black text-white relative tracking-wide box-border">
        <div className="headContainer flex justify-between box-border items-center w-11/12 mx-auto lg:w-11/12">
            <div className="logo flex justify-start items-center cursor-pointer text-center">
                <Image className="w-24 lg:w-32 md:w-28" src={myLogo} alt={"company's logo"} height={120}></Image>
            </div>
            {/* navigations >=lg */}
            <nav className=" lg:relative lg:basis-2/5 bg-transparent transition-all lg:ml-4 xl:mr-8">
                <ul className="transition-all xl:justify-around  lg:justify-between bg-transparent p-4 font-normal text-base hidden lg:flex">
                    {links.map((link, index) => (
                        <li className="mt-4 text-center text-lg font-medium  ml-2 lg:mt-0 lg:ml-0 border-b-2 border-transparent hover:border-main transition-all duration-500 ease-in-out box-border"
                            key={index}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
            </nav>
            {/* navigations <=lg */}
            <nav className={`lg:hidden absolute top-24 w-full left-0 transition-all duration-500 bg-black ease-in-out text-center ${visible ? 'opacity-95' : 'opacity-0 pointer-events-none'
                }`}>
                <ul
                    className={`justify-between bg-transparent flex-col transition-transform duration-500 ease-in-out transform ${visible ? 'translate-y-0' : '-translate-y-full'
                        }`}>
                    {links.map((link, index) => (
                        <li
                            className="mt-3 m-auto w-fit border-b-2 border-transparent hover:border-main pt-3 lg:mt-0 mb-12 text-3xl font-medium  transition-all duration-500 ease-out text-white"
                            key={index}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <li className="mt-8 pt-3 lg:mt-0">
                        <a href="/" className="transition-all duration-500 ease-in-out text-white contact py-3 px-6 border-opacity-50 rounded-full border-2 bg-black outline-1 outline-main border-main font-bold text-md lg:block cursor-pointer hover:bg-main hover:scale-95 hover:px-4">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
            {/* contact */}
            <div className="contact box-borde text-center">
                <a href="/" className="transition-all duration-500 ease-out text-white contact py-2 px-6 border-opacity-50 rounded-full border-2 bg-black outline-1 outline-main border-main font-bold text-md hidden lg:block cursor-pointer hover:bg-main hover:scale-95">
                    Contact Us
                </a>
            </div>
            {/* togglers */}
            <div className="menu block lg:hidden transition-all ease-in-out duration-500">
                <button onClick={toggleMenu}>
                    <Menu style={{ display: visible ? 'none' : 'flex' }} className="size-8 font-extrabold mt-2 mr-2 md:mt-3 md:size-8" />
                    <X style={{ display: visible ? 'flex' : 'none' }} className="size-8 font-extrabold mt-2 mr-2 md:mt-3 md:size-8"></X>
                </button>
            </div>
        </div>
    </header>
};

export default Nav;
