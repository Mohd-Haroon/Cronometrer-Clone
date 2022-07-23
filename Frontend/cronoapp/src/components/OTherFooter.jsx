import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/OtherFooter.module.css"
const OTherFooter = () => {
  return (
    <>
       <div className={styles.mainFot}>
        <div className={styles.fotnav}>
            <ul>
              <Link to="/blog"><li> <p className={styles.oopp}> Blogs</p></li></Link>  
                <li >
                    <div className={styles.org}></div>
                </li>

                <Link to="/forum">  <li> <p className={styles.oopp}> Forums</p></li></Link> 
                <li >
                    <div className={styles.org}></div>
                </li>
                <li> <p className={styles.oopp}> Privacy</p></li>
                <li >
                    <div className={styles.org}></div>
                </li>
                <li> <p className={styles.oopp}> Terms</p></li>
                <li >
                    <div className={styles.org}></div>
                </li>
                <li> <p className={styles.oopp}> Affiliate</p></li>
                <li >
                    <div className={styles.org}></div>
                </li>
                <li>Jobs</li>
            </ul>
        </div>
        </div> 
        <div className={styles.mainfotm}>
           <div className={styles.left}>
            <div className={styles.appl}>
                <img src="	https://cdn1.cronometer.com/logos/app-store.png" alt="" />
                <img src="https://cdn1.cronometer.com/logos/google-play.png" alt="" />
            </div>
           </div>
           <div className={styles.middle}>
            <div>
                <img src="https://cdn1.cronometer.com/logos/cronometer-logo-white.png" alt="" />
                <p>Copyright © 2011-2022, All Rights Reserved</p>
            </div>
           </div>
           <div className={styles.right}>
            <div className={styles.mulinl}>
            <div className={styles.logos}>
            <div className={styles.NavBarCart}>
     <BsInstagram style={{margin:"3px 6px"}}/>
   </div>
   <div className={styles.NavBarCart}>
    <FaFacebookF style={{margin:"3px 6px"}} />
   </div>
   <div className={styles.NavBarCart}>
    <BsTwitter style={{margin:"3px 6px"}}/>
   </div>
   <div className={styles.NavBarCart}>
    <GrYoutube style={{margin:"3px 6px"}}/>
   </div>
   </div>
            </div>
           </div>
        </div>
    </>
  )
}

export default OTherFooter