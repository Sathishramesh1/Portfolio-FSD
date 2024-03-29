import React from 'react';
import { motion } from 'framer-motion';
import { GetGreetings, UseLottieAnimation } from '../components';
import { heroAnimationData } from '../assets/index';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/all';
import { paragraphs } from '../assets/constants';
import { textMotion } from '../utils';

const Home = () => {
  const data = JSON.stringify(heroAnimationData);

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/12iwphamVYuYtAb8BDmJqDIVt9ZqfXT5g/view?usp=drive_link';
    downloadLink.target = '_blank';
    downloadLink.click();
  };

  const introText = Array.from(paragraphs.intro.split(" "));
  
  return (
    <div id='home' className='h-full pt-20 primary lg:h-screen'>
      <div className='h-full mx-auto w-9/10'>

        <div className='mt-2'>
          <GetGreetings className='text-2xl text-color-pry' />
        </div>
        
        {/* Main content */}
        <div className='flex-row-reverse items-center justify-evenly md:flex'>
          <div className='md:w-96 md:h-96'>
            <UseLottieAnimation data={data} />
          </div>

          <div className='mb-10 mt-7'>
            <div className='flex flex-col justify-center mx-auto max-w-md'>
              <h1 className='flex justify-center p-0 my-0 font-bold text-green-500 font-heading'>FullStack Developer💻</h1>
              <div className="flex justify-center flex-wrap mt-2 mb-5 text-center dark:text-dark-primary/50">
                {introText.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={textMotion(i)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='mr-1'
                  >
                    {p}
                  </motion.p> 
                ))}
              </div>             
            </div>

            <div className='flex flex-col justify-center'>
              <div className='flex justify-center'>
                <button 
                  className="px-4 py-3 transition-colors rounded-md cursor-pointer bg-green-500 hover:bg-green-600 text-white dark:text-dark-primary dark:hover:text-green-500 dark:hover:bg-transparent hover:underline"
                  onClick={handleDownload}>
                    download resume
                </button>
              </div>
              <div className='flex justify-center mt-5'>
                <a href='https://github.com/Sathishramesh1' target='_blank' rel="noreferrer"> 
                  <AiFillGithub className='w-10 h-10 mr-3 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary' /> 
                </a>
                <a href="https://www.linkedin.com/in/sathish-ramesh-5b0525117/" target='_blank' rel="noreferrer"> 
                  <AiFillLinkedin className='w-10 h-10 mr-1 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary' />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
