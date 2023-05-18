import React from 'react';
import './Login.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
      const adminId="ankur73tiwari@gmail.com";
      const adminPassword="ankur"

    const handleSubmit = async e => {
        e.preventDefault();
        if(username===adminId && password===adminPassword)
        {
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        }
      }
      

  
      
   

  return (
    <>
    <Navbar />
    <div className="Auth-form-container">
      <form className="Auth-form"  onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot Password
          </p>
        </div>
      </form>
    </div>
    </>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }