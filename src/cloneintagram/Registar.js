import Facebook from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/Facebook_icon.svg.webp'
import playstore from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/playstore.png'
import appstore from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/appstore.png'

import  "./Registercss.css";
import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

export default function Registar() {
  const[data,setdata] = useState([])

    const posts = useLoaderData();
    const [email,setemail] = useState("")
    const [password,setpass] = useState("")
  
    return (
    <div className='container'>
    <div className='page'>
      <div className='pageone'>
        <div className='firspart'>
          <h1 className='title'>instagram</h1>
          <div  className='signupmsg'>
          <p className='msg'>Sign up to see photos and videos from your friends.</p>
          </div>
          <div className='fb'>
            <img src={Facebook} className='facebook' />
            <p className='logofb'>Log in with facebook</p>
          </div>
          <p className='or'>OR</p>
          {/* <input type='text' className='userid' placeholder='Mobile number or email address' />
          <input type='text' className='Fullname' placeholder='Full Name' /> */}
          <input type='email' className='email' placeholder='email' />
          <input type='password' className='password' placeholder='Password' />
          <p className='signup'>People who use our service may have uploaded your contact information to Instagram.<span> Learn more</span></p>
        <p className='signup'>By signing up, you agree to our <span><a>Terms</a></span>,<span><a> Privacy Policy and Cookies Policy.</a></span></p>

          <button className='loginbtn'>Sign Up</button>
        </div>
        <div className='secondpart'>
        <p className='signup'>Have a account? <span><a>Log in</a></span></p>
        
        </div>
        <div className='thirdpart'>
          <p className='getapp'>Get the app.</p>
        </div>
        <div className='forthpart'>
          <img className='app appone' src={appstore} alt="app link" />
          <img className='app' src={playstore} alt="app link" />
        </div>
      </div>
    </div>
   
  </div>

  )
}
