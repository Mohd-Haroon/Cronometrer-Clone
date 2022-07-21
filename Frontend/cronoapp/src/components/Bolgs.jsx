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


          <div className={styles.Bolgsmain}>
            <div className={styles.subblog}>
              <div className={styles.vdo}>
                   <iframe src="https://www.youtube.com/embed/R49fLnhMhIE?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fcronometer.com&widgetid=1" frameborder="1px solid white"></iframe>
              </div>
              <div className={styles.datapa}>
                <h3>Eat Smarter. Live Better.</h3>
                <p>Get to know the eating habits that make your body thrive. The Cronometer app lets you easily track your nutrition, helping you to live a healthier, happier life. </p>
                <button>Get Started</button>
              </div>
            </div>

            <div className={styles.subblog}>
                <div style={{color:"orangered"}}>Recent activites</div>
                 <div className={styles.picda}>
                  <div className={styles.imgdata}>
                      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_826,h_550/https://cronometer.com/blog/wp-content/uploads/2022/07/DSC_8212.jpg" alt="" />
                  </div>
                  <div className={styles.maidatai}>
                  <h2>The Best Backpacking <br /> Meals</h2>
                    <p>July 21, 2022</p>
                  </div>
                 </div>
                 <div className={styles.picda}>
                  <div className={styles.imgdata}>
                      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1555,h_1037/https://cronometer.com/blog/wp-content/uploads/2022/07/pexels-victor-freitas-703014.jpg" alt="" />
                  </div>
                  <div className={styles.maidatai}>
                  <h2>Nutrition for Muscle <br /> Building and Strength <br /> Training</h2>
                    <p>July 14, 2022</p>
                  </div>
                 </div>
                 <div className={styles.picda}>
                  <div className={styles.imgdata}>
                      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_654,h_477/https://cronometer.com/blog/wp-content/uploads/2022/07/Blog-Seniors.png" alt="" />
                  </div>
                  <div className={styles.maidatai}>
                    <h2>Fitness Considerations <br />
                      For Aging Individuals</h2>
                    <p>July 7, 2022</p>
                  </div>
                 </div>
                 <div style={{color:"orangered" , justifyContent:"right"}}>Recent activites</div>
            </div>
          </div>
    </>
  )
}

export default Bolgs