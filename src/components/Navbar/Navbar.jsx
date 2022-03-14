import { useState } from 'react';
import './Navbar.css';
import images from '../../constants/images';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from "react-scroll"

const Navbar = () => {
      const [toggleMenu, setToggleMenu] = useState(false);
      return (
            <div className="app__navbar">
                  <div className="app__navbar-logo">
                        <img src={images.gericht} alt="app logo" />
                  </div>
                  <ul className="app__navbar-links">
                        <Link to="home" smooth={true} duration={1000}>
                              <li className="p__opensans"> Home</li>
                        </Link>
                        <Link to="about" smooth={true} duration={1000}>
                              <li className="p__opensans"> About </li>
                        </Link>
                        <Link to="menu" smooth={true} duration={1000}>
                              <li className="p__opensans"> Menu</li>
                        </Link>
                        <Link to="laurels" smooth={true} duration={1000}>
                              <li className="p__opensans"> Awards</li>
                        </Link>
                        <Link to="contact" smooth={true} duration={1000}>
                              <li className="p__opensans"> Contact</li>
                        </Link>
                  </ul>
                  <div className="app__navbar-login">
                        <a href="7" className="p__opensans">Log In / Register</a>
                        <div />
                        <a href="5" className="p__opensans">Book Table</a>
                  </div>
                  <div className="app__navbar-smallscreen">
                        <MenuOutlined className="smallscreen-icon" onClick={() => setToggleMenu(true)} />
                        {toggleMenu && <div className="app__navbar-smallscreen__overlay flex__center slide-bottom">
                              <CloseOutlined className="smallscreen-icon overlay__close" onClick={() => setToggleMenu(false)} />
                              <ul className="smallscreen-links">
                                    <li className="p__opensans"><a href="1">Home</a></li>
                                    <li className="p__opensans"><a href="2">About</a></li>
                                    <li className="p__opensans"><a href="3">Menu</a></li>
                                    <li className="p__opensans"><a href="4">Awards</a></li>
                                    <li className="p__opensans"><a href="5">Contact</a></li>
                              </ul>
                        </div>}
                  </div>
            </div>
      )
};

export default Navbar;
