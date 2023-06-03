import React, { Component } from 'react';
import './styles/ContentBanner.css'

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
        if (this.props.text_alignment === 'Left'){
            text_alignment = 'text-white';
            div_anchor = 'left';
        }
        else{
            text_alignment = 'text-white text-end';
            div_anchor = 'right';
        }
        return(
            <div
                className={`${content_banner_class} ' shadow-lg p-3 mb-5'`} 
                style={
                    {backgroundImage: this.props.background_picture, borderRadius:'10px', float:div_anchor}
                }
            >
                <h1 className={text_alignment}>{this.props.header_text}</h1>
                <p className={text_alignment}>{this.props.mainbody_text}</p>
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