import React from 'react'
import styles from "../CssComponent/HomePage.module.css"
import Menuoff from './Menuoff'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';

import { FaFacebookF } from 'react-icons/fa';

import { BsTwitter } from 'react-icons/bs';
import { GrYoutube } from 'react-icons/gr';





const HomePage = () => {
  return (
    <>
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
    {/* homePaage */}

    <div className={styles.homeDivsez}>
        <div className={styles.h2div}>
            <h2>Eat smarter.<br/>Live better.</h2>
            <h4  className={styles.h4div}>Track your calories, exercise,<br/>biometrics and health data.</h4>

           <Link to="/signup"> <button className={styles.btn2}>Sign Up-it's Free!</button></Link>

            <p style={{marginTop:"40px"}}>Already have an account? <Link to="/login" style={{textDecoration:"underline"}}> Log in.</Link></p>
        </div>
        <div className={styles.secimg}><img src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" alt="" /></div>
    </div>

    <div className={styles.parentDiv}>
        <h5>As Seen On</h5>
        <div className={styles.imgHere}>
            <img src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg" alt="" />
            <img src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg" alt="" />
            <img src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg" alt="" />
        </div>
        <h5>Available on Web, iOS and Android</h5>
        <div className={styles.icimg}>
            <img src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="" />
            <img src="	https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="" />
        </div>
    </div>
 
   <div className={styles.wrdiv}>
    <div className={styles.conf}>
        <h3>Discover your nutrition</h3>
        <div className={styles.h5divv}>
            <h5>Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole.</h5>
        </div>
    </div>
   

    <div className={styles.texts}>
        <div className={styles.list}>
            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="https://cdn1.cronometer.com/2021/landing/community-icon.svg" alt="" />
                       <div className={styles.subchil}>
                        <h5>Over 5 million users</h5>
                       </div>
                       <div className={styles.psub}>
                        <p>Join the community to get tips and inspiration from other users on our forums and Facebook group.</p>
                       </div>
                </div>
            </div>

            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg" alt="" />
                       <div className={styles.subchil}>
                        <h5>Accurate nutrition data</h5>
                       </div>
                       <div className={styles.psub}>
                        <p>Be confident that the food you log has the correct nutrition data. We verify every food submission for accuracy.</p>
                       </div>
                </div>
            </div>


            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="	https://cdn1.cronometer.com/2021/landing/security-icon.svg" alt="" />
                       <div className={styles.subchil}>
                        <h5>Data privacy & security</h5>
                       </div>
                       <div className={styles.psub}>
                        <p>We take the security of our users' accounts seriously - we will never sell your account data to third parties.</p>
                       </div>
                </div>
            </div>
        </div>
    </div>
    </div>




    <div className={styles.wrdiv2}>
    <div className={styles.conf}>
        <h3>Develop healthy habits</h3>
        <div className={styles.h5divv}>
            <h5>Count your calories, ensure you're meeting nutrient targets, and see your progress over time.</h5>
        </div>
    </div>
   

    <div className={styles.texts}>
        <div className={styles.list2}>
            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="	https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Track up to 82 <br /> micronutrients</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Log your meals and track all your macro and micronutrients.</p>
                       </div>
                </div>
            </div>

            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Log meals, exercise <br /> and biometrics</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Plus, you can create custom foods, recipes, exercises and biometrics!</p>
                       </div>
                </div>
            </div>


            <div className={styles.childp}>
                <div className={styles.purec}>
                       <img src="	https://cdn1.cronometer.com/2021/landing/reports-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Valuable reports <br /> and charts</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Learn how nutrients and biometrics correlate over time.</p>
                       </div>
                </div>
            </div>
        </div>

        <div className={styles.list2}>
            <div className={styles.childp}>
                <div className={styles.purec2}>
                       <img src="	https://cdn1.cronometer.com/2021/landing/scale-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Custom diet settings</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Set weight, macro & nutrient targets to meet your goals.</p>
                       </div>
                </div>
            </div>

            <div className={styles.childp}>
                <div className={styles.purec2}>
                       <img src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Fasting timer</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Track your intermittent fasts and see their effect over time.</p>
                       </div>
                </div>
            </div>


            <div className={styles.childp}>
                <div className={styles.purec2}>
                       <img src="	https://cdn1.cronometer.com/2021/landing/food-icon.svg" alt="" />
                       <div className={styles.subchil2}>
                        <h5>Diet support</h5>
                       </div>
                       <div className={styles.psub2}>
                        <p>Whether you’re Keto, Vegan, or on one recommended by your doctor.</p>
                       </div>
                </div>
            </div>
        </div>
    </div>
    </div>



    <div className={styles.wrdiv3}> 
        <div className={styles.h4divv}>
            <h4>Find out if you're getting the vitamins and <br /> minerals you need with our food diary app.</h4>
           
        </div>
       <Link to="/signup"> <button className={styles.btn3}>Sign Up - it's Free!</button></Link>
    </div>
    



    <div className={styles.wrdiv2}>
    <div className={styles.conf}>
        <h3>Sync with Apps and Devices</h3>
        <div className={styles.h5divv3}>
            <h4>Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.</h4>
        </div>
        <div className={styles.imges}>
            <img src="	https://cdn1.cronometer.com/2021/landing/devices-p-1600.png" alt="" />
        </div>
        <hr />
        <div className={styles.conf2}>
        <h3 >Cronometer Reviews</h3>
        <div className={styles.h5divv3}>
        <h4>Check us out in your app store.</h4>
        </div>
        </div>
    </div>
    </div>

    <div className={styles.gridDiv}>
      <div className={styles.subGrid}>
         <img src="	https://cdn1.cronometer.com/2021/landing/quote-icon.svg
" alt="" />
         <h4  className={styles.gridh4}>I wasn't the only one concerned about the unreliability of the macros in both MyFitnessPal and Carb Manager.</h4>
         <div className={styles.qimage}>
         <img src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="" />
         </div>
      </div>

      <div className={styles.quote}>
       <p className={styles.full}>I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting it up and entering recipes only to discover the macros were not reliable due to all the contributions by the community. I was so frustrated. Then I found a review of several apps (on the Keto Mojo website) and discovered I wasn't the only one concerned about unreliability of the macros on both MFP and CarbManager (tried that too). Behold Cronometer! I love this app. It draws from nutrition databases with minimal community contributions so much, much more reliability. There are many more free features. The user interface is easy to navigate. I'm very happy with Cronometer.</p>
       <p className={styles.other}>iOS Review <br /> September 23, 2019</p>
      </div>
    </div>



    <div className={styles.gridDiv2}>
      <div className={styles.subGrid2}>
      <p className={styles.full}>This app is my dream! I've been on the hunt for something that can track my daily nutritional needs and the majority of apps seem to think that only means macros. This tracks EVERYTHING! Getting my daily vitamins through food is so important to me and this has taken a HUGE load off of my plate. I bought gold within minutes. This is set up great, easy to use, links with my FitBit. I could go on and on.</p>
       <p className={styles.other}>Android Review <br /> September 23, 2019</p>
      </div>

      <div className={styles.subGrid}>
         <img src="	https://cdn1.cronometer.com/2021/landing/quote-icon.svg
" alt="" />
         <h4  className={styles.gridh4}>Cronometer tracks EVERYTHING! ... It's easy to use and links with my FitBit.</h4>
         <div className={styles.qimage}>
        <img src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="" />
         </div>
      </div>
    </div>



    <div className={styles.down}>
     <div className={styles.comt}>
        <div className={styles.hereimage}>
            <img src="	https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg" alt="" />
        </div>
        <div className={styles.parentcont}>
            <div className={styles.havingimg}>
                <img src="	https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg" alt="" />
            </div>
            <div className={styles.names}>
                <h5>Are you a healthcare professional?</h5>
                  <h5>Check out our software designed for nutritionists, <br /> dietitians, research teams, schools, and hospitals.</h5>
            </div>
           <button className={styles.link}>Learn About Pro</button>
        </div>
     </div>
    </div>


    <div className={styles.conf}>
        <h3 >We are Canadian</h3>
        <div className={styles.h5divv3}>
        <h4>Independently owned and operated by people who <br /> care about their users' nutrition.</h4>
        </div>
        <div className={styles.canda}>
        <img src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg" alt="" />
        </div>
        <div className={styles.para}>
            <p className={styles.mainpara}>Our headquarters are based in the idyllic mountain town of Revelstoke, BC, Canada. We are a team of over 25 professionals brought together by a love of nutrition, skiing, biking and the great outdoors.About Us</p>
        </div>
        <div className={styles.power}>
          <button className={styles.pbtn}> <Link to="/about">About Us</Link> </button>
        </div>

        <hr />

        <div className={styles.para}>
            <p className={styles.mainpara2}>Help us spread the good word about nutrition and become an affiliate.</p>
        </div>
        <div className={styles.power}>
            <button className={styles.pbtn}>Become an Affiliate</button>
        </div>
        </div>

        {/* footer */}

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
  

    </>
  )
}

export default HomePage