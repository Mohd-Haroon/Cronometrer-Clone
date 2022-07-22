import React from 'react'
import styles from "../CssComponent/Footer.module.css"
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';

import { FaFacebookF } from 'react-icons/fa';

import { BsTwitter } from 'react-icons/bs';
import { GrYoutube } from 'react-icons/gr';


const Footer = () => {
  return (
    <div>
        
   <div className={styles.prefooter}>
   <div className={styles.logos}>
   <div className={styles.NavBarCart}>
     <BsInstagram style={{margin:"11px 11px"}}/>
   </div>
   <div className={styles.NavBarCart}>
    <FaFacebookF style={{margin:"11px 11px"}} />
   </div>
   <div className={styles.NavBarCart}>
    <BsTwitter style={{margin:"11px 11px"}}/>
   </div>
   <div className={styles.NavBarCart}>
    <GrYoutube style={{margin:"11px 11px"}}/>
   </div>
   </div>
   <div className={styles.icimg2}>
            <img src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="" />
            <img src="	https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="" />
        </div>
        <hr style={{width:"80%",margin:"auto"}}/>
        </div>
        
        <div className={styles.containermain}>
              <div className={styles.gridFoot}>
                <div className={styles.lo}>
                    <img src="https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg" alt="" />
                </div>
                <div>
                    <p className={styles.ppara}>Cronometer</p>
                    <div className={styles.ppa}>
                        <p>For individual</p>
                        <p>For Profeesional</p>
                        <p>privecy</p>
                        <p>Terms</p>
                    </div>
                </div>
                <div>
                    <p className={styles.ppara}>The Company</p>
                    <div className={styles.ppa}>
                        <p>About Us</p>
                        <p>Crono Blog</p>
                        <p>Crono Forums</p>
                        <p>jobs</p>
                        <p>Support</p>
                    </div>
                </div>
                <div>
                    <p className={styles.ppara}>Partners & Affiliates</p>
                    <div className={styles.ppa}>
                        <p>Affiliate Program</p>
                        <p>Media Kit</p>
                    </div>
                </div>
                
              </div>
              <div className={styles.copy}>Copyright © 2011-2022 <br />
All rights reserved</div>
         </div>
  
    </div>
  )
}

export default Footer