import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import styles from "../CssComponent/HomePage.module.css";
const Menuoff = () => {
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton  style={{ display: "flex" }}>
              {(isOpen = "Product")}
            </MenuButton>
            <MenuList>
              <div className={styles.Chil}>
                <img
                  src="https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg"
                  alt=""
                />
                <Link to="/product">
                  <div>
                    <p>Cronometer</p>
                    <p className={styles.pi}>For Individuals</p>
                  </div>
                </Link>
              </div>

              <div className={styles.Chil}>
                <img
                  src="https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg"
                  alt=""
                />
                <div>
                  <p>Cronometer Pro</p>
                  <p className={styles.pi}>For Healthcare Professionals</p>
                </div>
              </div>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default Menuoff;
