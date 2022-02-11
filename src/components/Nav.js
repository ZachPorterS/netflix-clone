import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  /* Creates a listener to check if the user
   * as scrolled X-pixels down on the site
   * and returns additional styling so that 
   * a background navbar appears */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        handleShow(true);
      } else handleShow(false);
    });
    /* Remove listeners to avoid having multiple
     * listeners running at once */
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav${show && "nav_black"}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='netflix-logo'
      />
      <img
        className='user_icon'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='user-icon'
      />
    </div>
  );
}

export default Nav;