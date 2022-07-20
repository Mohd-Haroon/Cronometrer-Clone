import React, { useState ,setState} from "react";
import styled from 'styled-components';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Log=styled.div`
 width:40%;
 margin:auto;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 padding:25px;
 line-height: 3`
const Img=styled.img`
 width:50%;
 margin:auto;`
;
const Input = styled.input`
 width:85%`;
 const Button= styled.button`
 background-color: lightgrey;
 width:85%;
 font-weight: bold`;

 const Label= styled.label`
  display: flex;
  text-align: auto;
  width: 80%;
  margin:auto;
  gap:18%`

const Login = () => {
  return (
    <div>
        
        <Log>
            <div>
                <div>
                <Img src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png'/>
                </div>
                <br/>
                <div>
                    <Input type='email' placeholder='Enter Your Gmail'value={email}
                                        onChange={(e) => setEmail(e.target.value)}autoComplete="on"/>
                    <br/>
                    <Input type='password' placeholder='Enter Password'value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <Button onClick={handleLogin}><h1>Login</h1></Button>
                    <br/>
                </div>
                <Label>
                    <p>Not a member?<a href=''style={{color:'coral'}}>Sign Up Now</a></p>
                    <p><a href=''style={{color:'coral'}}>Forget Password</a></p>
                </Label>
                
            </div>
        </Log>
    </div>
    
  )
}

export default Login