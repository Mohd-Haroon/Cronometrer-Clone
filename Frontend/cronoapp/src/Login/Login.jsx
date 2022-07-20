import React, { useState, setState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Login = () => {
  return (
    <div>
      <Log>
        <div>
          <div>
            <Img src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' />
          </div>
          <br />
          <div>
            <Input type='email' placeholder='Enter Your Email' />
            <br />
            <Input type='password' placeholder='Enter Password' />
            <br />
            <Button>
              <Link to='/'>
                <h1>Login</h1>
              </Link>
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
