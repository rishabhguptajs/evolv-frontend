"use client";

import React, { useState, useEffect } from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { FaDiaspora, FaGitter, FaSignInAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const IconList = [
  { name: 'Home', icon: <BiHomeAlt2 />, path: '/' },
  { name: 'Features', icon: <FaDiaspora />, path: '/features' },
  { name: 'About', icon: <FaGitter />, path: '/about' },
  { name: 'Sign Up', icon: <FaSignInAlt />, path: '/signup' },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [currentActive, setCurrentActive] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const activeItem = IconList.find(item => item.path === currentPath);
    if (activeItem) {
      setCurrentActive(activeItem.name);
    } else {
      setCurrentActive('Home');
    }
  }, [currentPath]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-fit bg-black h-14 flex items-center justify-between px-4 rounded-[30px] relative'
    >
      <div className='space-x-4 ml-auto p-1 flex'>
        {IconList.map((item) => (
          <Link
            key={item.name}
            href={item.path}
          >
          <motion.div
            key={item.name}
            className={`text-white flex items-center gap-2 px-2 p-1 rounded-full group relative ${currentActive === item.name ? 'bg-white/15' : ''}`}
            onMouseEnter={() => {
              setCurrentActive(item.name);
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setCurrentActive('');
              setIsHovered(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className='text-xl'
            >
              {item.icon}
            </motion.span>
            
            <AnimatePresence>
              {currentActive === item.name && (
                <motion.span
                  initial={{ x: 20, opacity: 0, width: 0 }}
                  animate={{ x: 0, opacity: 1, width: 'auto' }}
                  exit={{ x: 20, opacity: 0, width: 0 }}
                  transition={{ 
                    duration: 0.15,
                    ease: "linear"
                  }}
                  className='text-md whitespace-nowrap overflow-hidden'
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;