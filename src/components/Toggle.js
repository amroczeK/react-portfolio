import React from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ toggle, children }) => {
  return <motion.div layout>{toggle ? children : ''}</motion.div>;
};

export default Toggle;
