import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(e) {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isFourColumns: width > 1200,
    isThreeColumns: width <= 1200 && window.innerWidth >= 910,
    isTwoColumns: width <= 909 && window.innerWidth >= 770,
    isOneColumn: width < 700,
  };
};



   