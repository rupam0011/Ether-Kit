import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  '>
            <div className='border-2 font-[polysans] text-[44px] font-semibold bg-[linear-gradient(182.46deg,#000000_22.6%,#4E4E4E_97.94%)] bg-clip-text text-transparent'>EtherKit</div>
            <div className='flex gap-8 text-[14px] font-[satoshi-medium] font-medium'>
                <p>How It Works </p>
                <p>Button</p>
                <p>Why Choose EtherKit?</p>
            </div>
            <div>
                <button className="relative text-[14px] font-medium rounded-xl w-[123px] px-2.5 py-2.5 bg-[#B287FD] text-white shadow-[0_3.7px_0_0_#624A8B] hover:-translate-y-px active:translate-y-px  transition-transform  duration-150 cursor-pointer"
                >
                    Button
                </button>
            </div>
        </div>
    )
}

export default Navbar
