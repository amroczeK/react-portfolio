export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  // Define animation when component mounts
  // Fade in when loading page
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // 1 second
    },
  },
  // Define animation when component unMounts
  // Fade out on exit
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1, // 1 second
    },
  },
};
