'use client'

import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";
function AppBar(){


    const theme = useContext(AppThemeContext);

    function switchTheme(){
        theme.change(theme.mode === 'light'? 'dark': 'light');
    }
    
    return (
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Next</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gadgets">Gadgets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/suppliers">Suppliers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default AppBar;
