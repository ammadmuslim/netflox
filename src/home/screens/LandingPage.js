import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Jumbotron,
    Container,
    Row, 
    Col,
    Button} from 'reactstrap';

import Nav from '../components/Nav/index';
import Cards from '../components/cards'

class LandingPage extends Component{
    render(){
        return(
            <div>
            <Nav/>
            <Jumbotron style={{height: 500, backgroundColor: 'grey', width: '100%', paddingTop: '10%'}}>
            <Container>
              <Row>
                <Col>
                  <h1>Welcome to NETFLOX</h1>
                  <p>
                    <Button
                      tag="a"
                      color="success"
                      size="large"
                      href="#"
                      target="_blank"
                    >
                      View Movies
                                    </Button>
                  </p>
                </Col>
               </Row>
            </Container>
            </Jumbotron>
            <div style={{marginTop: 1, marginLeft: 50, width: '100%'}}>
                <div style={{marginBottom: 40, width: '100%'}}>
                    <Row style={{fontSize: 30, fontWeight: 'bold', marginBottom: 25, color: 'white'}}>Recomended</Row>
                    <Row style={{width: '100%'}}><Cards/></Row>
                </div>
            </div>
            </div>
        )
    }
}

export default LandingPage;