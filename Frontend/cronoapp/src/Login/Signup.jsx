import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 20%;
  margin: auto;
  padding: 25px;
`;
const Input = styled.input`
  width: 85%;
  border: 1px solid grey;
  margin-bottom: 1em;
`;

const Data = styled.div`
  width: 40%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px;
  line-height: 3;
`;

const Label = styled.label`
  display: flex;
  text-align: auto;
  width: 80%;
  margin: auto;
  gap: 7%;
`;
const Check = styled.div`
  text-align: left;
  line-height: 1.5;
  padding: 25px;
`;
const Button = styled.button`
  background-color: #2db300;
  color: white;
  width: 40%;
  height: 45px;
  font-weight: bold;
`;

const Signup = () => {
  return (
    <form>
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <Img src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' />
      </div>
      <div style={{ padding: 30 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>
          Create Your Free Account
        </h1>
      </div>
      <Data>
        <Input type='email' placeholder='Email Address' autoComplete='on' />
        <br />
        <Input type='password' placeholder='Password' />
        <br />
        <Input type='password' placeholder='Confirm Password' />
        <br />
      </Data>
      <Data>
        <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>Your Body Type</h1>
        <div>
          <Label>
            <p>Sex:</p>
            <input type='radio' value='Female'/> <label>Male</label>
            <input type='radio' value='Male'/> <label>Female</label>
          </Label>
          <Label>
            <label>Born:</label><input type='date'/>
          </Label>
          <Label>
            <label>Height:</label><Input type='text'/>
          </Label>
          <Label>
            <label>Weight:</label><Input type='text'/>
          </Label>
        </div>
      </Data>
      <Data>
        <div>
          <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>
            Terms of Service & Privacy Settings
          </h1>
          <Check>
            <input type='checkbox' value='Female'></input>{' '}
            <label> Check All </label> <br />
            <p>
              By checking the box below you are indicating you have read and
              agree to our Terms of Service and Privacy Policy.
            </p>
            <input type='checkbox' value='Female'></input>{' '}
            <label> I agree to the cronometer.com Terms of Service </label>{' '}
            <br />
            <p>
              In order to give you the best experience using Cronometer, we need
              certain data permissions. (These are optional and can be updated
              in your settings any time.)
            </p>
            <input type='checkbox' value='Female'></input>{' '}
            <label>
              {' '}
              I agree to receive newsletters and promotional materials.{' '}
            </label>
            <br />
            <input type='checkbox' value='Female'></input>{' '}
            <label>
              {' '}
              I agree to receive personalized in-app ads. (You will receive less
              relevant, non-personalized ads if you opt out){' '}
            </label>
          </Check>
        </div>
      </Data>
      <br />
      <Data>
        <div>
          <Button>
            <h1>Create Account</h1>
          </Button>
        </div>
      </Data>
      <br />
      <div>
        <p>Need help?</p>
        <a href='' style={{ color: 'coral' }}>
          Email Support
        </a>
      </div>
    </form>
  );
};

export default Signup;
