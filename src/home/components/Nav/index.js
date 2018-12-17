import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle } from 'reactstrap';

class DropDown extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      itemsDrop: [
        {text: 'Action', link: ''}
      ]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render(){
    return(
      <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a"
            style={{color: 'white', fontSize: 20}}>
            MOVIES
          </DropdownToggle>
          <DropdownMenu style={{marginTop: 20}}>
            <Link to="/action"><DropdownItem>Action</DropdownItem></Link>
            <Link to="/adventure"><DropdownItem>Adventure</DropdownItem></Link>
            <Link to="/comedy"><DropdownItem>Comedy</DropdownItem></Link>
            <Link to="/crime"><DropdownItem>Crime</DropdownItem></Link>
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }
}

export default class Index extends React.Component {
      render() {
        return (
          <div style={{width: '100%', position: 'fixed', zIndex: 1}}>
            <Row xs='12' style={{height: 60, alignItems: 'center', backgroundColor: '#ff0800'}}>
              <Col xs='3'>
                <Nav style={{marginLeft: 50}}>
                <DropDown/>
                <NavItem href="#" style={{fontSize: 20, color: 'white', marginRight: 10, marginLeft: 10}}>SERIES</NavItem>
                </Nav>
              </Col>
              <Col xs='3' style={{alignItems: 'center'}}><NavbarBrand style={{color: 'white', marginLeft: '90%', fontSize: 35, fontWeight: 'bold'}} href="/">NETFLOX</NavbarBrand></Col>
              <Col xs='3'>
              <div style={{marginLeft: '130%'}}>
                  <form>
                  <fieldset style={{width: 5, height: 5}}>
                  <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                  </fieldset>
                  </form>
                </div>
              </Col>
              <Col xs='3'>
                <Nav style={{marginLeft: 1}}>
                    <NavItem style={{marginLeft: 100, marginRight: 10}}>
                      <Link to="/register">
                      <Button color="primary" style={{width: 100}}>REGISTER</Button></Link>
                    </NavItem><div>  </div>
                    <NavItem>
                      <Link to="/login">
                      <Button color="success"  style={{width: 100}}>LOGIN</Button></Link>
                    </NavItem>
                </Nav>
              </Col>
            </Row>
            <Row xs='9'></Row>
          </div>
        );
      }
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }