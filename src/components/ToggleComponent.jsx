import React from 'react';
import { motion } from 'framer-motion';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ToggleComponent = ({ DarkMode, toggleDarkMode }) => {
  const toggleVariant = {
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 700,
        damping: 30,
        delay: 0.2,
      },
    },
  };

  return (
    <div className='flex items-center'>
      <BsFillSunFill className='mr-3 text-dark-accent dark:text-dark-secondary' />
      <div
        onClick={toggleDarkMode}
        className={`bg-black dark:bg-white w-11 mr-3 h-5 rounded-2xl flex items-center ${
          DarkMode ? 'justify-end' : 'justify-start'
        } transition delay-100`}
      >
        <motion.div
          className='w-4 h-4 mx-1 rounded-full bg-light-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-light-accent p-2 transition'
          variants={toggleVariant}
          initial='hidden'
          animate='show'
        />
      </div>
      <BsFillMoonFill className='text-light-secondary dark:text-light-accent' />
    </div>
  );
};

export default ToggleComponent;
