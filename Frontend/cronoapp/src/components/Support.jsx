import React from 'react'
import styles from "../CssComponent/Support.module.css"
import { BiMessage } from 'react-icons/bi';
const Support = () => {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.mainp}>
                <img src="	https://theme.zdassets.com/theme_assets/197219/111fe6921e8b22116b39eaa745ea08e38a718e0d.png" alt="" />
            </div>
            <div className={styles.tx}>Submit A Request</div>
        </div>
        <div className={styles.herosec}>
          <div className={styles.heroiiner}>
            <form action="" className={styles.search}>
              
             <input type="text" className={styles.inp} placeholder="search" area-lable = "search"/>
            </form>
          </div>
        </div>
        <div className={styles.contda}>
          <section className={styles.dsec}>
            <ul className={styles.block}>
              <li className={styles.blockitem}>
                <div className={styles.hereitem}>
                  <h4 className={styles.btitle}>
                    Web Version
                  </h4>
                  <p className={styles.bldec}>
                    User Manual Cronometer App
                  </p>
                </div>
              </li>
              <li className={styles.blockitem}>
              <div className={styles.hereitem}>
                  <h4 className={styles.btitle}>
                  Mobile App
                  </h4>
                  <p className={styles.bldec}>
                    User Manual Cronometer mobile App
                  </p>
                </div>
              </li>
              <li className={styles.blockitem}>
              <div className={styles.hereitem}>
                  <h4 className={styles.btitle}>
                  proffesional Version
                  </h4>
                  <p className={styles.bldec}>
                    User Manual Cronometer mobile Pro
                  </p>
                </div>
              </li>
              <li className={styles.blockitem}>
              <div className={styles.hereitem}>
                  <h4 className={styles.btitle}>
                    FAQ
                  </h4>
                  <p className={styles.bldec}>
                   Cronometer Frequently asked question
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <section  className={styles.message}>
          <div className={styles.messd}>
            <div>
              <h2>
                Recent Activity
              </h2>
              <ul className={styles.inklist}>
                <li className={styles.mainlik}>
                  <div>
                  <p className={styles.datalinks}>Client</p>
                  <p className={styles.data2links}>Pro Messaging</p>
                  </div>
                  <div>
                    <div className={styles.hytr}>
                        Artical Created 5 months Ago
                    </div>
                    <div className={styles.mainking}>
                      <div  style={{marginTop:"-50px"}}>
                      <BiMessage style={{color:"red"}}/>
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </li>
                <li className={styles.mainlik}>
                  <div>
                  <p className={styles.datalinks}>Widgets</p>
                  <p className={styles.data2links}>Android Home Screen Widgets</p>
                  </div>
                  <div>
                    <div className={styles.hytr}>
                        Artical Created 5 months Ago
                    </div>
                    <div className={styles.mainking}>
                      <div  style={{marginTop:"-50px"}}>
                      <BiMessage style={{color:"red"}}/>
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </li>
                <li className={styles.mainlik}>
                  <div>
                  <p className={styles.datalinks}>Foods Tab</p>
                  <p className={styles.data2links}>Foods</p>
                  </div>
                  <div>
                    <div className={styles.hytr}>
                        Artical Created 6 months Ago
                    </div>
                    <div className={styles.mainking}>
                      <div  style={{marginTop:"-50px"}}>
                      <BiMessage style={{color:"red"}}/>
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </li>
                <li className={styles.mainlik}>
                  <div>
                  <p className={styles.datalinks}>Settings</p>
                  <p className={styles.data2links}>Target Scheduler</p>
                  </div>
                  <div>
                    <div className={styles.hytr}>
                        Artical Created 3 months Ago
                    </div>
                    <div className={styles.mainking}>
                      <div  style={{marginTop:"-50px"}}>
                      <BiMessage style={{color:"red"}}/>
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </li>
                <li className={styles.mainlik}>
                  <div>
                  <p className={styles.datalinks}>Settings</p>
                  <p className={styles.data2links}>Mobile - Target Scheduler</p>
                  </div>
                  <div>
                    <div className={styles.hytr}>
                        Artical Created 4 months Ago
                    </div>
                    <div className={styles.mainking}>
                      <div  style={{marginTop:"-50px"}}>
                      <BiMessage style={{color:"red"}}/>
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </section>
        <div className={styles.minfot}>
          <div className={styles.min2}>
            <p>Cronometer</p>
          </div>
        </div>
        <div className={styles.laset}>
          <p> Powered by Zendesk</p>
        </div>
    </>
  )
}

export default Support