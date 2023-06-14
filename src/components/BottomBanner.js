import React, { Component } from 'react';
import './styles/BottomBanner.css';
import { Container, Row, Col } from "reactstrap";
import {NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class BottomBanner extends Component{
    render() {
        return(
            <div className='bottom-banner'
            style={
                {backgroundImage: "url(/bottom_banner.jpg)"}
            }
            >
                <Container>
                    <Row className="d-flex align-items-center justify-content-end">
                    <Col>
                    <Container style={{paddingTop:"30px"}}>
                        <Row>
                        <Col><NavLink tag={Link} className='text-white' to='/faqs'>FAQs</NavLink></Col>
                        <Col><NavLink tag={Link} className='text-white' to='/news'>News</NavLink></Col>
                        </Row>
                        <Row>
                        <Col><NavLink tag={Link} className='text-white' to='/ourteam'>About Us</NavLink></Col>
                        <Col><NavLink tag={Link} className='text-white' to='/contactus'>Contact Us</NavLink></Col>
                        </Row>
                        <Row>
                        <Col><NavLink tag={Link} className='text-white' to='/careers'>Careers</NavLink></Col>
                        <Col></Col>
                        </Row>
                    </Container> 
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}