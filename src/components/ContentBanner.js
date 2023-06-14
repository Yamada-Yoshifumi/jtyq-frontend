import React, { Component } from 'react';
import { Container, Row, Col, NavLink} from "reactstrap";
import { Link } from 'react-router-dom';
import './styles/ContentBanner.css';
import {ContentBannerText} from './ContentBannerText';

export class ContentBanner extends Component{
    render() {
        var mobile_bool = window.mobileCheck();
        var content_banner_class
        if (mobile_bool)
          content_banner_class = 'mobile-content-banner';
        else
          content_banner_class = 'content-banner';
        var text_alignment;
        var div_anchor;
        var contents;
        if (this.props.text_alignment === 'Left'){
            text_alignment = 'text-white';
            div_anchor = 'left';
            contents = (
                <Container>
                    <Row>
                        <Col md={4}>
                            <NavLink tag={Link} to={this.props.header_text.replace(/ /g,'').toLowerCase()} className={text_alignment} style={{"font-size": "40px"}}>{this.props.header_text}</NavLink>
                            <p className={text_alignment}>{this.props.mainbody_text}</p>
                        </Col>
                        <Col md={8}>
                            <ContentBannerText
                                banner_content={this.props.header_text}
                            />
                        </Col>
                    </Row>
                </Container>
            )
        }
        else{
            text_alignment = 'text-white text-end';
            div_anchor = 'left';
            contents = (
                <Container>
                    <Row>
                        <Col md={8}>
                            <ContentBannerText
                                banner_content={this.props.header_text}
                            />
                        </Col>
                        <Col md={4}>
                            <NavLink tag={Link} to={this.props.header_text.replace(/ /g,'').toLowerCase()} className={text_alignment} style={{"font-size": "40px"}}>{this.props.header_text}</NavLink>
                            <p className={text_alignment}>{this.props.mainbody_text}</p>
                        </Col>
                    </Row>
                </Container>
            )
        }
        return(
            <div
                className={`${content_banner_class} ' shadow-lg p-3 mb-5'`} 
                style={
                    {backgroundImage: this.props.background_picture, borderRadius:'10px', float:div_anchor}
                }
            >
                <div>
                    {contents}
                </div>
            </div>
        )
    }
}

/*
function ContentBanner(props) {
    return(
        <div style={{ 
            backgroundImage: props.background_picture
        }}>
            <h1>{props.header_text}</h1>
            <p>{props.mainbody_text}</p>
        </div>
    )
}

export default ContentBanner;
*/