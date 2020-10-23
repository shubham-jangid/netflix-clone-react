import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [blackNav, setNav] = useState(false);

  useEffect(() => {
    function black_navbar() {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) setNav(true);
        else setNav(false);
      });
    }
    black_navbar();
  }, []);

  return (
    <nav className={`nav ${blackNav && "blackNav"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo"
      ></img>

      <img
        className="nav__profileIcon"
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
        alt="user"
      ></img>
    </nav>
  );
}

export default Nav;
