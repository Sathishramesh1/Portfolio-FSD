import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = (Component) => {

  return (props) => (
    <motion.div className='bg-yellow-900'>
      <Component {...props} />
    </motion.div>
  );
};

export default PageWrapper;
