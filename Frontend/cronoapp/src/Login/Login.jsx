import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const Log = styled.div`
  width: 40%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px;
  line-height: 3;
`;
const Img = styled.img`
  width: 50%;
  margin: auto;
`;
const Input = styled.input`
  width: 85%;
  border: 1px solid grey;
  margin-bottom: 1em;
`;
const Button = styled.button`
  background-color: lightgrey;
  width: 85%;
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  text-align: auto;
  width: 80%;
  margin: auto;
  gap: 18%;
`;

const Login = ({ setState }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const notify = (msg) => toast(msg);
  // const error = (msg) => toast.error(msg);
  const handleLogin = () => {
    axios
      .post("https://salty-chamber-30466.herokuapp.com/auth/login", {
        email,
        password,
      })
      .then((res) => {
        alert("Loging Successful");
        console.log(res);
        if (res.data.message) {
          // notify(res.data.message.toUpperCase());
          localStorage.setItem("user", JSON.stringify(res.data.userLogin));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setState(false);
        }
      })
      .catch((err) => {
        alert("Wrong credentials");
        if (err.response.status === 422 || 404) {
          // error(err.response.data.error.toUpperCase());
        }
      });
  };

  return (
    <div>  
      <Log>
        <div>
          <div>
            <Img src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' />
          </div>
          <br />
          <div>
            <Input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
            <br />
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Enter Password' />
            <br />
            <Button onClick={handleLogin}>
              {/* <Link to='/'> */}
                <h1>Login</h1>
              {/* </Link> */}
            </Button>
            <br />
          </div>
          <Label>
            <p>
              Not a member?
              <Link to='/signup' style={{ color: 'coral' }}>
                Sign Up Now
              </Link>
            </p>
            <p>
              <a href='' style={{ color: 'coral' }}>
                Forget Password
              </a>
            </p>
          </Label>
        
        </div>
      </Log>
      
     </div>
  );
};

export default Login;
