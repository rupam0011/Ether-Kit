"use client"

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <div className='flex justify-between items-center'>
                <div className='border-2 font-[polysans] text-[44px] font-semibold bg-linear-to-b from-black to-gray-600 bg-clip-text text-transparent'>
                    EtherKit
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-8 text-[14px] font-[satoshi-medium] font-medium'>
                    <p className="cursor-pointer hover:text-purple-600 transition-colors">How It Works</p>
                    <p className="cursor-pointer hover:text-purple-600 transition-colors">Button</p>
                    <p className="cursor-pointer hover:text-purple-600 transition-colors">Why Choose EtherKit?</p>
                </div>
                
                {/* Desktop Button */}
                <div className='hidden md:block'>
                    <button className="relative text-[14px] font-medium rounded-xl w-[123px] px-2.5 py-2.5 bg-[#B287FD] text-white shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px transition-transform duration-150 cursor-pointer">
                        Button
                    </button>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-black bg-white shadow-[2px_1px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all duration-150"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute z-10 top-full left-0 right-0 mt-4 bg-white border border-black rounded-2xl shadow-[4px_2px_0_0_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-0'}`}>
                <div className='flex flex-col p-4 gap-4'>
                    <p className="text-[14px] font-[satoshi-medium] font-medium cursor-pointer hover:text-purple-600 transition-colors py-2 border-b border-gray-200">
                        How It Works
                    </p>
                    <p className="text-[14px] font-[satoshi-medium] font-medium cursor-pointer hover:text-purple-600 transition-colors py-2 border-b border-gray-200">
                        Button
                    </p>
                    <p className="text-[14px] font-[satoshi-medium] font-medium cursor-pointer hover:text-purple-600 transition-colors py-2 border-b border-gray-200">
                        Why Choose EtherKit?
                    </p>
                    <button className="text-[14px] font-medium rounded-xl px-2.5 py-2.5 bg-[#B287FD] text-white shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px transition-transform duration-150 cursor-pointer mt-2">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;