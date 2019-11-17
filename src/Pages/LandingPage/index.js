import React from 'react';
import LoginContent from '../CommonContent/LoginContent'
import '../CommonContent/LoginContent.css'
import Icon1 from '../../Asset/shop.svg'
import './LandingPages.css'
import { Link } from "react-router-dom";
 



export default class Home extends React.Component{
    




render() {
    return(
        <div className="bg-landing">
            <div>
            <img style={{width:"75px", marginTop:"2em"}} src={Icon1} alt=""></img>
            <h2>Hey, good to see you again!</h2>
            <h1>LOGIN</h1>
            <LoginContent/>
            </div>
            <div>
                <p style={{marginTop:"1em", marginRight:"5px", display:"inline-block"}}>Don't have an Account?</p>
                <Link to="/register">Register</Link>
            </div>
            
        </div>
    );

}
}