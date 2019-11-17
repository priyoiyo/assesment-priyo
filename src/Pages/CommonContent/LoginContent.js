import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import axios from 'axios'

class LoginContent extends React.Component{
    constructor(props){
        super(props);
      this.state={
          email:"",
          password:"",
          successlogin:false

      }
      this.handleSubmit= this.handleSubmit.bind(this)

    };




render() {
 console.log(this.state.successlogin)
 
  if (this.state.successlogin){
    return(
    <Redirect to="/dashboard"></Redirect>
    )
  
  }
    
    return(
        <div>
            <div className="flip-top">
          <Container className="lc-container">
            <Row>
              <Col className="lc-box-col-1"></Col>
            </Row>
            <Row>
              <Col>
              <Form style={{marginTop:"1em"}}>
        <FormGroup>
          <Input onChange={this.emailChange} minLength="4" value={this.state.email} placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" minLength="3" onChange={this.passwordChange} value={this.state.password} placeholder="Password" />
        </FormGroup>
        <Button id="submit-form" onClick={this.handleSubmit}>Login</Button>
        
        </Form>
        {/* <form>
          <input onChange={this.emailChange} minLength="4" value={this.state.email} placeholder="Email"></input>
          <input type="password" minLength="3" onChange={this.passwordChange} value={this.state.password} placeholder="Password"></input>
          <button id="submit-form" onClick={this.onSubmit}>Login</button>
        </form> */}
              </Col>
            </Row>
          </Container>
         
          </div>
        </div>
    );

}

emailChange = (event) => {
    this.setState({
        email: event.target.value
        
    })
}
passwordChange = (event) => {
  this.setState({
      password: event.target.value
      
  })
}
handleSubmit = (event) => {
  event.preventDefault()
    console.log(this.state)

    const found = this.state.email === '' || this.state.password === '';

		if (!found) {
      var self = this;
      axios.post('https://test-binar.herokuapp.com/auth/login', {
        email:this.state.email,
          password:this.state.password
      })
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.result.access_token);
        if  (response.data.status === "OK"){
          sessionStorage.setItem('token', response.data.result.access_token);
          self.setState({
            successlogin:true
          })
          
          

        }else{
          console.log(response)
        }

        
      })
  
    }
	}
      
  
		// 	.then(response => response.json())
		// 	.then(result => {
		// 		console.log(result)
		// 		if (result.success) {
		// 			sessionStorage.setItem('token', result.data.token);
		// 			sessionStorage.setItem('hasLoggedIn', true);
		// 			sessionStorage.setItem('userId', result.data.userId);

		// 			if (entity === 'athlete') {
		// 				sessionStorage.setItem('id', result.data.athleteId);
		// 				sessionStorage.setItem('registeredAs', 'athlete');
		// 			} 
		// 			else if (entity === 'club') {
		// 				sessionStorage.setItem('id', result.data.clubId);
		// 				sessionStorage.setItem('registeredAs', 'club');
		// 			}
					
		// 			return result.success;

		// 		} 
		// 		else {
		// 			setIncorrectMessage(result.message);
		// 			setVisible(true);

		// 			return result.success
		// 		}
		// 	})
		// 	.then((pass) => {
		// 		if (pass) {
		// 			if (props.parsed.justSignedUp === 'true') setJustSignedUp(true);
		// 			setIsInvalid(false);
		// 			setIsAuthenticated(true);
		// 			window.location.reload(true);
		// 		}
		// 	})
		// 	.catch(err => err);
		// } 
		// else {
		// 	setIncorrectMessage('please fill in all required field');
		// 	setVisible(true);
    // 	setIsInvalid(true);
    





	


    
    
}


export default LoginContent;