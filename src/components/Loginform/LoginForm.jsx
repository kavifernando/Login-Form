import React from 'react'
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import img1 from '../assets/images/sideImg.jpg';
import logo from '../assets/images/logo.jpg';

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1><span className='word'>Hear</span><span className='wordColor'>Link</span></h1>
            <h6><span className='wordColor'>Connecting Worlds: <span className='word'>HearLink</span> where communication knows no bonds.</span></h6>
            <br></br>
            <h3>LOGIN</h3>
            <div className='input-box'>
                <label>Name:
                    <input type='text' placeholder='Username' required/>
                    <FaUser className='icon' />
                </label>
            </div>
            <div className='input-box'>
                <label> Select Your Type:
                    <select>
                        <option>I Am a Healthy User</option>
                        <option>I Am a Deaf User</option>
                    </select>
                </label>
            </div>
            <br></br>
            <hr className='line'></hr>
            <br></br>

            <button type='submit'>Create Lobby</button>
            <br></br>
            {/*<div className='container'>
               
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1, backgroundColor: "#ffffff", height: "1px",width:'10px'}} />
                    <p style={{ margin: "0 10px" }}>OR</p>
                    <div style={{ flex: 1, backgroundColor: "#ffffff", height: "1px", width:'10px'}} />
                </div>
            </div>*/}

            <div className='input-box'>
                <div className='container'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "black", height: "1px",width:'12px'}} />
                        <p style={{ margin: "0 10px" }}>OR</p>
                        <div style={{ flex: 1, backgroundColor: "black", height: "1px", width:'12px'}} />
                    </div>
                </div>
            </div>
            
            <div className='input-box'>
                <label> Enter Lobby code:
                    <input type='password' placeholder='Eg: dd2234' required/>
                </label>
                
            </div>
            <button type='submit'>Join Lobby</button>
            <img src= {img1} alt='A side img' className='sideImg'/>
            <img src = {logo} alt A logo className='logo'/>
        </form>
    </div>
  )
}
export default LoginForm;
