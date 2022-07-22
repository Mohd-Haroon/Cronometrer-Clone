import React from 'react'
import Navbar from './Navbar'
import styles from "../CssComponent/Forums.module.css"
const Forums = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.hoec}>
      <div>
        <h2>How Can I Help You</h2>
        <input type="text" placeholder="Search Here"/>
      </div>
      </div>
    </div>
  )
}

export default Forums