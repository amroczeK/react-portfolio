import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll the page to the top every time the URL changes,
 * fixes view being at the bottom during page changes.
 */
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
