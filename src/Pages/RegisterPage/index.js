import React from 'react';
import RegisterContent from '../CommonContent/RegisterContent'
import '../CommonContent/LoginContent.css'
import Icon1 from '../../Asset/shop.svg'

import {Link } from "react-router-dom";
 



export default class RegisterPage extends React.Component{
    




render() {
    return(
        <div className="bg-landing">
            <div>
            <img style={{width:"75px", marginTop:"2em"}} src={Icon1} alt=""></img>
            <h2>Hey, good to see you again!</h2>
            <h1>Register</h1>
            <RegisterContent/>
            </div>
            <div>
                <p style={{marginTop:"1em", marginRight:"5px", display:"inline-block"}}>Already have account?</p>
                <Link to="/">Login</Link>
            </div>
            
        </div>
    );

}
}