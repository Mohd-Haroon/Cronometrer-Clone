import React from "react";
import { Button, Input, Switch, Text } from "@chakra-ui/react";
import styles from "../../CssComponent/Settings.module.css";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";

export const Settings = () => {
  return (
    <div className={styles.settingContainer}>
      <Text fontWeight="500" fontSize="2xl">
        Account Settings
      </Text>
      <div className={styles.settingsChild}>
        <Text fontWeight="500" fontSize="lg">
          Login
        </Text>
      </div>
      <div className={styles.settingsChild2}>
        <div>
          <p className={styles.emailP}>Email</p>
          <Input
            width="50%"
            size="sm"
            value="beniwalanshu1412@gmail.com"
            readOnly="readOnly"
          />
          <Button className={styles.updateBtn} variant="ghost">
            Update
          </Button>
        </div>
        <div>
          <p className={styles.emailP}>Password</p>
          <Input
            width="50%"
            size="sm"
            value="***********"
            readOnly="readOnly"
          />
          <Button className={styles.updateBtn} variant="ghost">
            Update
          </Button>
        </div>
        <hr style={{ marginTop: "3%", marginBottom: "3%" }} />
        <div className={styles.twoAuth}>
          <Text fontWeight="500" fontSize="md">
            Two-Factor Authentication
          </Text>
          <p className={styles.twoAuthP}>
            Cronometer supports Two-Factor Authentication. To enable two-factor
            authentication, download an authenticator app from the app store or
            Google Play store such as{" "}
            <span
              style={{
                color: "rgb(237,130,41)",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Google Authenticator app
            </span>
            . Two factor is an optional additional security feature
          </p>
          <Text color="grey" fontSize="md" marginTop="2%">
            Enable Two-Factor Authentication{" "}
            <Switch marginLeft="4%" size="sm" />
          </Text>
        </div>
        <Button
          backgroundColor="rgb(255,118,63)"
          className={styles.logoutBtn}
          colorScheme="teal"
          size="sm"
        >
          Logout
        </Button>
      </div>
      <div className={styles.settingsChild}>
        <Text fontWeight="500" fontSize="lg">
          Account Data
        </Text>
      </div>
      <div className={styles.deleteBox}>
        <BsFillCloudArrowDownFill  width="20%" fontSize="18px" />
        <div style={{ width: "50%" }}>
          <Text fontSize="sm" fontWeight="700">
            Export Data
          </Text>
          <Text fontSize="sm">Export all of your diary data to .csv files</Text>
        </div>
        <Button width="30%" variant="ghost" color="rgb(255,118,63)" >Export Data</Button>
      </div>
      <div className={styles.deleteBox}>
        <ImBin fontSize="18px" width="20%" />
        <div style={{ width: "50%" }}>
          <Text fontSize="sm" fontWeight="700">
            Delete Account
          </Text>
          <Text fontSize="sm">
            Permanently delete your account and all of your data.
          </Text>
        </div>
        <Button width="30%" outline="1px solid rgb(255,118,63)" color="rgb(255,118,63)" variant="outline">Delete Account</Button>
      </div>
    </div>
  );
};
