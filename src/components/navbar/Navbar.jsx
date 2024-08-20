import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Navlink classlist=''>
          <img src="/Assets/Home-icon.svg" alt="home-icon" />
        </Navlink>
        <NavLink>
          <img src="/Assets/Avatar-icon.svg" alt="avatar-icon" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar

