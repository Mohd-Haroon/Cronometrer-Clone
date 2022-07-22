import React from 'react'
import styles from "../CssComponent/Navbar.module.css"
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { BsInstagram } from 'react-icons/bs';


import Menuoff from './Menuoff';


const Navbar = () => {
  return (
    <div>
        <div className={styles.MainDiv}>
        <div className={styles.imgDiv}>
            <img src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="" />
        </div>
        <div className={styles.MainHome}>
        <p><Menuoff/></p><span><IoIosArrowDown/></span>
            <Link to="/support"><p>Support</p></Link>
            <Link to="/blog"> <p>Blog</p></Link>
            <Link to="/forum"> <p>Froums</p></Link>
            <Link to="/about"> <p>About</p></Link>
           <Link to="/login"> <button className={styles.btn}>Log In</button></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar