import React, { useState, useEffect } from 'react';
import './css/sidebar.css'; // Import CSS file
import rawr from "../asset/rawr.png";
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkModeStatus = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkModeStatus === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <nav className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <div>
          <span className='image'>
            <img src={rawr} alt="elen"  style={{height: "40px", width: "200px"}}/>
          </span>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <a href="#">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search...." />
            </a>
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="/dashboard">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/data_kendaraan">
              <i className='bx bx-user icon'></i>
                <span className="text nav-text">Data Kendaraan</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/data_pelanggan">
              <i class='bx bxs-user-rectangle icon'></i>
                <span className="text nav-text">Data Pelanggan</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/pesanan">
              <i class='bx bx-book icon'></i>
                <span className="text nav-text">Buat Pesanan</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/peminjaman">
              <i class='bx bx-food-menu icon'></i>
                <span className="text nav-text">Peminjaman</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          {/* <li>
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li> */}
          <li className="mode" onClick={toggleDarkMode}>
            <div className="moon-sun">
              <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon moon`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

function TextLinkExample({ toggleDarkMode, isDarkMode }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="kkkkk"></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <ul className="navbar-nav ml-auto"> {/* Menggunakan ml-auto untuk menempatkan item ke kanan */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkModeStatus = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkModeStatus === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <div>
      <Sidebar />
      <TextLinkExample toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
