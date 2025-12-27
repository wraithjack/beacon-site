"use client";

import * as React from "react";
import { Button } from "./ui/Button";
import { Menu, X, TowerControl } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="glass sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <TowerControl className="h-8 w-8 text-emerald-600" />
                    <span className="text-xl font-bold tracking-tight text-slate-900">Beacon Web Solutions</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-semibold text-foreground/70 transition-colors hover:text-primary group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <Button variant="primary" className="ml-4 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_25px_rgba(5,150,105,0.4)] transition-all">
                        Get a Quote
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="rounded-md p-2 text-slate-600 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-b border-slate-100 bg-white p-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" className="w-full">
                            Get a Quote
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
