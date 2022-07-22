import React from 'react'
import Navbar from './Navbar'
import styles from "../CssComponent/Blog.module.css"
const Bolgs = () => {
  return (
    <>
       <Navbar/>
        <div className={styles.blogd}>
          <div className={styles.rowb}>
              
                    <h2 className={styles.mnb}>
                    The Cronometer Blog
                    </h2>
                  </div>
                  <div className={styles.loh5}>
                    <h5 className={styles.mnh5}>App Updates, Nutrition Tips & Inspiration </h5>
                  </div>
               </div>
          
    </>
  )
}

export default Bolgs