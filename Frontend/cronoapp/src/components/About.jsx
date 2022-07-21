import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from "../CssComponent/About.module.css"

const About = () => {
  return (
    <>
      <Navbar/>
   <hr />
    <div className={styles.about}>
       <div className={styles.subabout}>

        <div className={styles.aboutT}>
          <h6 className={styles.heh6}>CRONOMETER</h6>
          <h2 className={styles.h2data}>
          About the Company
          </h2>
        </div>
        <div className={styles.mainbod}>
            <p className={styles.pp}>
            Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, our nutritional data is curated from verified, accurate sources. We aim to provide a complete solution – no matter what diet you choose to be on.
<br style={{marginTop:"15px"}}/>
Our CEO, Aaron Davidson, built Cronometer as a side project in 2005. He was following the CRON diet (Calorie Restriction with Optimal Nutrition) and being the nutrition nerd/software developer that he is, decided to build an app to track his diet. Thus, Cronometer was born. It was several years later before he came to the conclusion that maybe he was onto something and quit his six-figure corporate job to focus on improving Cronometer.
<br style={{marginTop:"15px"}}/>
There are now over 5 million users who are happy he did.
<br style={{marginTop:"15px"}}/>
Cronometer's success has hinged entirely on positive word-of-mouth from its users. The company is still – and plans to continue being – a bootstrap startup to this day.
            </p>
        </div>
       </div>
    </div>
      <div className={styles.teams}>
         <div className={styles.allteams}>
           <div className={styles.imc}>
            <img src="	https://cdn1.cronometer.com/2021/landing/cronometer-staff-3.jpg" alt="" />
           </div>
         </div>
      </div>

      <div className={styles.who}>
        <div className={styles.contwho}>
              <div className={styles.whoheading}>
                <h6 className={styles.heh6}>CRONOMETER</h6>
                <h2 className={styles.h2data}> Who We Are</h2>
              </div>
              <div className={styles.parawi}>
                <p className={styles.iamp}>While our staff spans the globe our headquarters is based in the small-town of Revelstoke, British Columbia, Canada. Revelstoke is a health-centric mountain town brimming with endless options for staying active and a growing tech community – the perfect combination to call home.
<br />
We are an eclectic mix of web developers, designers, nutrition scientists, business majors and personal trainers brought together by a love of nutrition. While our company has grown our mission and values have remained the same; we believe full spectrum nutrition is the best way to understand your diet’s effect on your health. We also believe in empowering everyone by ensuring they have access to accurate and comprehensive data to make informed decisions.
<br />
Our goal is to build the best software for people and professionals to manage their nutrition. And we have the passion to make that happen; amazing data paired with awesome customer support truly are the Cronometer difference.
<br />
If you have interest in your personal nutrition or working with your client’s nutrition check us out!
<br />
Have questions? We would love to hear from you. Email us at: support@cronometer.com
<br />
Help us spread the good word about nutrition and</p>

              </div>

              <hr />

        <div className={styles.para}>
          <div>
            <h5 className={styles.mainpara2}>Help us spread the good word about nutrition and become an affiliate.</h5>
        </div>
        </div>
        <div className={styles.power}>
            <button className={styles.pbtn}>Become an Affiliate</button>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About