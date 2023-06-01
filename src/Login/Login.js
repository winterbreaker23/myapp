import React, { useState, useEffect, useRef } from "react";
import * as St from './Style';
import Header from '../Header/Logheader.js'; 
import Footer from '../Footer/Logfooter.js';
const Loginp=()=>{

    return(
        <>
            <Header/>
            <St.Loginpage>
                <St.Loginform>
                    <div className='fo-24 fo-b7 m-b-50 tt-center'>
                        Login to Decision Wise
                    </div>
                    <div className="input-gr">
                    <label className="fo-16 fo-b6">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          
                        />
                    </div>
                    <div className="input-gr">
                    <label className="fo-16 fo-b6">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          
                        />
                    </div>
                    <button type="submit" className="main-btn login-btn fo-16 fo-b6 ">
                     Log in 
                    </button>
                </St.Loginform>
            </St.Loginpage>
            <Footer/>
        </>
    )
}

export default Loginp;
