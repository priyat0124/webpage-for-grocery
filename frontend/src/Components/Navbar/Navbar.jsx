import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.avif';  
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav">
        <img src={logo} alt="Logo" /> 
        <p>Freshmart</p>
      </div>
      <div className="nav-menu">
        <li onClick={() => setMenu("Home")}>
          <Link to="/">Home</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Raw materials")}>
          <Link to="/vegetables">Raw Materials</Link>
          {menu === "vegetables" && <hr />}
        </li>
        <li onClick={() => setMenu("Machines")}>
          <Link to="/fruits">Machines</Link>
          {menu === "fruits" && <hr />}
        </li>
        <li onClick={() => setMenu("Manufacturing Macines")}>
          <Link to="/dryfruits">Manufacturing Machines</Link>
          {menu === "dryfruits" && <hr />}
        </li>
      </div>
      <div className="nav-login">
        
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>
            Logout
          </button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
          <Link to="/Product"><button>Cart</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
