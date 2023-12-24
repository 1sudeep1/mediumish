import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  return (
    <div>
      
    </div>
  )
}

export default ScrollToTop
