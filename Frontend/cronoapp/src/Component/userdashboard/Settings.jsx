import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../../CssComponent/Settings.module.css";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [val, setVal] = useState("");
  const [update, setUpdate] = useState({});

  const userId = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setVal(e.target.value);
    const { name, value } = e.target;
    setUpdate({
      ...update,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    const payload = JSON.stringify(update);
    fetch(`https://salty-chamber-30466.herokuapp.com/auth/user/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: payload,
    })
      .then((res) => res.json)
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    fetch(`https://salty-chamber-30466.herokuapp.com/auth/user/${userId}`, {
      method: "DELETE",
    })
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

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
          <Button
            onClick={onOpen}
            className={styles.updateBtn}
            color="rgb(255,118,63)"
            variant="ghost"
          >
            Update
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Change Email Address</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Enter new email address</FormLabel>
                  <Input name="email" onChange={handleChange} />
                </FormControl>
                <FormControl>
                  <FormLabel>Enter new password</FormLabel>
                  <Input name="password" onChange={handleChange} />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleUpdate} colorScheme="blue" ml={3}>
                  OK
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div>
          <p className={styles.emailP}>Password</p>
          <Input
            width="50%"
            size="sm"
            value="***********"
            readOnly="readOnly"
          />
          <Button
            color="rgb(255,118,63)"
            onClick={onOpen}
            className={styles.updateBtn}
            variant="ghost"
          >
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
          onClick={handleLogout}
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
        <BsFillCloudArrowDownFill width="20%" fontSize="18px" />
        <div style={{ width: "50%" }}>
          <Text fontSize="sm" fontWeight="700">
            Export Data
          </Text>
          <Text fontSize="sm">Export all of your diary data to .csv files</Text>
        </div>
        <Button width="30%" variant="ghost" color="rgb(255,118,63)">
          Export Data
        </Button>
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
        <Button
          width="30%"
          outline="1px solid rgb(255,118,63)"
          color="rgb(255,118,63)"
          variant="outline"
          onClick={handleDelete}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};
