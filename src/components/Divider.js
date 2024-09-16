import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Divider.css';

const Divider = ({ logos }) => {
  const logosWithDuplicates = [...logos, ...logos]; // Duplicate logos for smooth looping

  return (
    <div className="logos">
      <motion.div
        className="logos-slide"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
      >
        {logosWithDuplicates.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

Divider.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Divider;
