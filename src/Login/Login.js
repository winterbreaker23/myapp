import React, { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import * as St from './Style';
import Header from '../Header/Logheader.js'; 
import Footer from '../Footer/Logfooter.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
const Loginp=()=>{
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const checkuser = () =>{
        if(email==="jinghu@gad.ai" && password==="Mytiger1989!"){
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            toast.error('Please Check Email or Password !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    }
    return(
        <>
            <Header/>
            <St.Loginpage>
                <St.Loginform>
                    <form>
                        <div className='fo-24 fo-b7 m-b-50 tt-center'>
                            Login to Decision Wise
                        </div>
                        <div className="input-gr">
                            <label className="fo-16 fo-b6">Email</label>
                            <input
                              type="email"
                              placeholder="email@email"
                              className="form-control"
                              id="email"
                              name="email"
                              onChange={e=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-gr">
                        <label className="fo-16 fo-b6">Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="form-control"
                              id="password"
                              name="password"
                              onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                        <button type="button" className="main-btn login-btn fo-16 fo-b6" onClick={checkuser} >
                        Log in
                        </button>
                        <ToastContainer />
                    </form>
                </St.Loginform>
            </St.Loginpage>
            <Footer/>
        </>
    )
}

export default Loginp;
