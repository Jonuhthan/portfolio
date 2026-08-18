"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// define what every nav item should have
interface NavItem {
    label: string;
    page: string;
}

// define array of said defined nav items for mapping later on
const NAV_ITEMS: NavItem[] = [
    { label: "Home", page: "home" },
    { label: "Education", page: "education" },
    { label: "Experience", page: "experience" },
    { label: "Skills", page: "skills" },
    { label: "Projects", page: "projects" },
];

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => setNavbar((prev) => !prev);

    return (
        <header className="fixed top-0 z-50 w-full bg-white dark:bg-stone-900 shadow dark:border-b dark:border-stone-600 px-4 sm:px-20">
            
            {/* wrapper div */}
            <div className="flex items-center justify-between h-16">

                {/* left side, title and menu button */}
                <div className="flex items-center justify-between md:justify-start w-full md:w-1/3 gap-4">
                    <Link to="home" smooth duration={500}>
                        <h2 className="text-2xl font-bold cursor-pointer whitespace-nowrap">
                            Jonathan Lam
                        </h2>
                    </Link>

                    <button
                        onClick={toggleNavbar}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-200"
                    >
                        {navbar ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                </div>

                {/* center section with nav menu subsections */}
                <nav className="hidden md:flex flex-1 justify-center gap-10">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.page}
                            to={item.page}
                            spy
                            smooth
                            offset={-100}
                            duration={500}
                            activeClass="active"
                            className="text-lg text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* right section with theme button */}
                <div className="hidden md:flex items-center justify-end gap-4 md:w-1/3">
                    <button
                        onClick={() =>
                            setTheme(currentTheme === "dark" ? "light" : "dark")
                        }
                        className="hover:bg-neutral-300 bg-slate-200 p-2 rounded-xl"
                    >
                        {currentTheme === "dark" ? (
                            <RiSunLine size={30} color="black" />
                        ) : (
                            <RiMoonFill size={30} />
                        )}
                    </button>
                </div>
            </div>

            {/* menu section for mobile viewports */}
            {navbar && (
                <div className="md:hidden flex flex-col items-center gap-8 py-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.page}
                            to={item.page}
                            spy
                            smooth
                            offset={-100}
                            duration={500}
                            onClick={toggleNavbar}
                            className="text-neutral-900 dark:text-neutral-100 text-lg cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* theme button mobile */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() =>
                                setTheme(currentTheme === "dark" ? "light" : "dark")
                            }
                            className="hover:bg-neutral-300 bg-slate-200 p-2 rounded-xl"
                        >
                            {currentTheme === "dark" ? (
                                <RiSunLine size={30} color="black" />
                            ) : (
                                <RiMoonFill size={30} />
                            )}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;