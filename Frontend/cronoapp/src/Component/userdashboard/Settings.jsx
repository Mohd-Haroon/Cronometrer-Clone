/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "../../CssComponent/Settings.module.css";

export const Settings = () => {
  return (
    <div className={styles.settingContainer}>
      <Text fontWeight="500" fontSize="2xl">Account Settings</Text>
      <div className={styles.settingsChild}>
        <Text fontWeight="500" fontSize="lg">Login</Text>
      </div>
      <div className={styles.settingsChild2}></div>
    </div>
  );
};
