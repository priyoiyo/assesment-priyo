import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios'

class RegisterContent extends React.Component{
    constructor(props){
        super(props);
      this.state={
          name:"",
          email:"",
          password:""
      }
    };




render() {
    
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
          <Input onChange={this.nameChange} value={this.state.name} placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input onChange={this.emailChange} value={this.state.email} placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" onChange={this.passwordChange} value={this.state.password} placeholder="Password" />
        </FormGroup>
        
        <Link style={{fontWeight:"bold"}} to="/"><Button id="submit-form" onClick={this.onSubmit}>Register</Button></Link>
        
        </Form>
              </Col>
            </Row>
          </Container>
         
          </div>
        </div>
    );

}
nameChange = (event) => {
    this.setState({
        name: event.target.value
        
    })
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
onSubmit = () => {
    console.log(this.state)

    axios.post('https://test-binar.herokuapp.com/auth/signup', {
      name:this.state.name,
        email:this.state.email,
        password:this.state.password
    })
    
}
    
}


export default RegisterContent;