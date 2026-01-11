import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

const Header = () => {
  const [buka, setBuka] = useState(false);

  return (
 <header className="fixed top-0 left-0 w-full z-30 bg-black/50 md:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h2 className="text-3xl font-bold text-white">KOFVEE</h2>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-white font-semibold">
              <a href='#hero'>Home</a>
              <a href='#about'>About</a>
              <a href='#produk'>Menu</a>
              <a href='#testimoni'>Testimoni</a>
              <a href='#blog'>Blog</a>
            </ul>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-white py-2 px-4 font-bold rounded-lg text-sm">
            Contact
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setBuka(!buka)}
          >
            {buka ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {buka && (
          <div className="md:hidden mt-4 bg-black/90 rounded-lg px-4 py-4 space-y-4 text-white">
              <a href='#hero' className='block'>Home</a>
              <a href='#about' className='block'>About</a>
              <a href='#produk' className='block'>Menu</a>
              <a href='#testimoni' className='block'>Testimoni</a>
              <a href='#blog' className='block'>Blog</a>
            <button className="w-full bg-white text-black py-2 rounded-lg font-bold">
              Contact
            </button>
          </div>
        )}
      </div>
    </header>

  )
}

export default Header
