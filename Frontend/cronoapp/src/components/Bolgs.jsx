import React from 'react'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa';
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
                <div style={{color:"orangered",marginLeft:"30px",fontSize:"larger"}}>Recent Post</div>
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
                 <div style={{color:"orangered",fontSize:"larger" , textAlign:"right",marginRight:"30px"}}>Recent activites</div>
            </div>
          </div>

          <div className={styles.creda}>
            <div className={styles.subcre}>
              <h2>Browse the Archives</h2>
            </div>
            <div className={styles.chilcra}>
              <p>Nutrition</p>
              <p>Featness</p>
              <p>Features</p>
              <p>Recpipes</p>
              <p>App Upadate</p>
            </div>
            <div className={styles.btncre}>
              <input type="text" placeholder='Search Blog Post'/>
              <div style={{height:"70px",width:"70px",backgroundColor:"orangered"}}>
              <FaSearch style={{marginTop:"20px",marginLeft:"15px",fontSize:"40px",color:"white"}}/>
              </div>
            </div>
          </div>

          <div className={styles.datasap}>
             <div className={styles.datasasub}>
              <div className={styles.realdata}>
                 <div className={styles.havedaa}>
                  <p>Crono Hacks</p>
                  <h2>Cronometer Tips &  <br /> Tricks</h2>
                  <p>Whether you’re a new or longtime user, here are some helpful tips to make the most of your nutrition tracking.</p>
                  <button>Get the Trip</button>
                 </div>
                 <div className={styles.imgko}>
                  <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_500/https://cronometer.com/blog/wp-content/uploads/2019/08/cronometer-starter.png" alt="" />

                 </div>
              </div>

             </div>
          </div>


          <div className={styles.datasap}>
             <div className={styles.datasasub}>
              <div className={styles.realdata}>
              <div className={styles.imgko}>
                  <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1024/https://cronometer.com/blog/wp-content/uploads/2021/12/140642741_l-1024x1024.jpg" alt="" />

                 </div>
                 <div className={styles.havedaa}>
                  <p>App Updates</p>
                  <h2>New & Improved: The <br /> Latest <br /> Updates</h2>
                  <p>Get up to date on all of the latest Cronometer updates, including cool new features like our Recipe Importer or Target Scheduler!  </p>
                  <button>Read More</button>
                 </div>               
              </div>
             </div>
          </div>

          <div className={styles.fontad}>
             <div className={styles.datafo}>
              <div className={styles.lopo}>
               <h2>Eat smarter. Live better.</h2>
               <p>Track your foods, exercise,<br />
and health data with the Cronometer app.</p>
             </div>
             <div className={styles.fonbtn}>
              <button>Sign-up it's free</button>
             </div>
             </div>
          </div>

          <div className={styles.kop}>
              <div className={styles.kll}>
                <p>On Trend</p>
                <h2>Popular Stories</h2>
              </div>
              <div className={styles.kll}>
                <p style={{marginTop:"100px"}}>Explore More</p>
              </div>
          </div>

          <div className={styles.popimg}>
            <div className={styles.subpop}>
              <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_940,h_788/https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>Dietitians Discuss Diet And Eczema</h2>
                <p>April 27, 2022</p>
                <p>Registered Dietitians Discuss The Link Between Diet And Eczema Eczema is a common, chronic and complex skin disease that arises</p>
              </div>
            </div>
            <div className={styles.subpop}>

            <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1336,h_2048/https://cronometer.com/blog/wp-content/uploads/2022/04/IMG_7610-scaled.jpg" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>How Can Diet & Nutrition Affect Acne</h2>
                <p>April 26, 2022</p>
                <p>How Can Diet And Nutrition Affect Acne Acne is a chronic, multifactorial skin condition that is estimated to affect 9.4%</p>
              </div>
            </div>
          </div>

          <div className={styles.kop}>
              <div className={styles.kll}>
                <p>App Updates</p>
                <h2>New Features</h2>
              </div>
              <div className={styles.kll}>
                <p style={{marginTop:"100px"}}>Explore More</p>
              </div>
          </div>

          <div className={styles.popimg}>
            <div className={styles.subpop}>
              <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_480,h_300/https://cronometer.com/blog/wp-content/uploads/2022/06/Suunto.png" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>New Device Integration: Suunto</h2>
                <p>June 14, 2022</p>
                <p>Sync Suunto Data Into Your Cronometer Account Today, we are thrilled to announce that we have partnered with Suunto to</p>
              </div>
            </div>
            <div className={styles.subpop}>

            <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_654,h_477/https://cronometer.com/blog/wp-content/uploads/2022/06/Heart-rate-symbol.png" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>How To: Track Your Heart Rate Over Time</h2>
                <p>June 6, 2022</p>
                <p>Recent Improvements To Biometric Tracking Allow You To Track Heart Rate Over Time We have made some big improvements to</p>
              </div>
            </div>
          </div>
          <div className={styles.popimg}>
            <div className={styles.subpop}>
              <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_400/https://cronometer.com/blog/wp-content/uploads/2022/05/Apple-watch-app-low-res.jpeg" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>Now Available: Cronometer On Your Apple Watch</h2>
                <p>June 1, 2022</p>
                <p>Introducing Cronometer On Apple Watch Since its introduction in 2014, the Apple Watch has gained its fair share of the</p>
              </div>
            </div>
            <div className={styles.subpop}>

            <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_2048,h_1365/https://cronometer.com/blog/wp-content/uploads/2022/04/pexels-kampus-production-5920765-scaled.jpg" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>Introducing Men’s Health Nutrition Score</h2>
                <p>May 31, 2022</p>
                <p>New Nutrition Score Focuses on Men’s Health Available To Male Free Users For The Month Of June It’s no surprise</p>
              </div>
            </div>
          </div>

          <div className={styles.mnbv}>
            <p>Community</p>
            <div className={styles.kil}><img src="https://cronometer.com/blog/wp-content/uploads/2021/06/know-yourself-cronometer-logo-white.svg" alt="" /></div>
            <h2>Eat smarter. Go farther.</h2>
            <h4>Cronometer has helped millions to get to know their bodies better and discover their nutrition. Learn about the features and read the stories that will inspire you to crush your health goals.</h4>
            <button>Get to Know Your self</button>
          </div>

          <div className={styles.popimg}>
            <div className={styles.subpop}>
              <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_810,h_1080/https://cronometer.com/blog/wp-content/uploads/2022/03/Aaron-Day-Original.jpeg" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>Meet Aaron Day: Nutritional Therapist & Know Yourself Ambassador</h2>
              
              </div>
            </div>
            <div className={styles.subpop}>

            <div className={styles.chiloimg}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_399,h_441/https://cronometer.com/blog/wp-content/uploads/2022/03/20211010_122543-Copy-scaled-e1648237252449.jpeg" alt="" />
              </div>
              <div className={styles.subtips}>
                <h2>Meet Alex Marshall: Nutrition Coach & Know Yourself Ambassador</h2>
                
              </div>
         
            </div>
           
          </div>
          <p style={{textAlign:"right",marginRight:'60px',color:"orangered",fontSize:"larger"}}>Explore More</p>

          <div className={styles.lasapics}>
            <div className={styles.conpicn}>
              <img src="https://cronometer.com/blog/wp-content/uploads/2021/07/cronometer-hero-graphic.svg" alt="" />
            </div>
            <div className={styles.datanm}>
              <h1>Track your food, exercise <br /> and health metrics with <br /> our app.</h1>
              <button>Sign up - it's Free</button>
              <p>Learn More</p>
            </div>
          </div>
    </>
  )
}

export default Bolgs