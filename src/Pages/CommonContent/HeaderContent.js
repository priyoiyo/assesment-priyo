import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import './HeaderContent.css'
import CreateProduct from '../ProductContent/CreateProduct'



class HeaderContent extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
}

toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });}

render() {
    return(
        <div>
            <Navbar className="header" expand="md">
          <NavbarBrand className="link-white" href="/dashboard">Product List</NavbarBrand>
        
            <Nav navbar>
            <NavItem>
            <CreateProduct buttonLabel="Create New"></CreateProduct>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="link-white" href="/">Logout</NavLink>
              </NavItem>
            </Nav>
         
        </Navbar>
        </div>
    );

}
}

export default HeaderContent;