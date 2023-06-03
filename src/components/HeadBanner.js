import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import './styles/HeadBanner.css';
import './styles/FitBGImage.css';

export class HeadBanner extends Component{
    render() {
        return(
            <div
                className='head-banner'             
            >
                <div
                    className='fit-bgimage shadow-lg p-3 mb-5 rounded'
                    style={{'--bgimage': "./jtyq-frontent/head_banner_2.jpg"}}
                >
                    <Container className="position-relative top-10vh start-0">
                        <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><h1>剑通英桥</h1></Col>
                        </Row>
                        <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><h2>定制化高等教育申请</h2></Col>
                        </Row>
                    </Container> 
                </div>
            </div>
        )
    }
}