import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import '../assets/css/signUp.css'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import axios from 'axios'
import { useNavigate } from 'react-router'

const SignUp = () => {

const navigate =useNavigate();
  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
    password2: '',
  })
  const { userName, email, password, password2 } = input
  const checkValidation = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    console.log(input)
  }

  const addUser =async ()=>{
    await axios.post("http://localhost:8080/auth", {
      userName: String(input.userName),
      email: String(input.email),
      password: String(input.password),
      
    })
    .then((res) => res.data)
    .then(
      navigate('/SignIn')
    );
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('password do not match')
    } else {
      addUser().then((data)=>data)
    }
  }
  return (
    <div className="login-box">
      <div className="left">
        <h1>Sign up</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="userName"
            placeholder="Username"
            autoComplete="off"
            value={userName}
            onChange={checkValidation}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={checkValidation}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={checkValidation}
          />
          <input
            className="input"
            type="password"
            name="password2"
            placeholder="Retype password"
            value={password2}
            onChange={checkValidation}
          />
          {/* <Stack alignItems="center" spacing={1}>
            <Button variant="outlined" size="small" component="label">
              <UploadFileIcon /> Profile Picture
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Stack> */}
          <input
            className="input"
            type="submit"
            name="signup_submit"
            value="Register"
          />
        </form>
      </div>

      <div className="right">
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </div>
  )
}

export default SignUp
