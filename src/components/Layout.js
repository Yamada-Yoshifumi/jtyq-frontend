import React, { Component} from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { BottomBanner } from './BottomBanner';

import './styles/Layout.css'
import { EnquiryBox } from './EnquiryBox';
import './responsive/breakpoint'

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpenChange = this.handleOpenChange.bind(this);
    this.handleOpenFalse = this.handleOpenFalse.bind(this);
  }
  handleOpenChange() {
    this.setState({
      ...this.state,
      open: (!this.state.open),
    });
  }
  handleOpenFalse() {
    this.setState({
      ...this.state,
      open: false,
    });
  }
  static displayName = Layout.name;
  render() {
    var mobile_bool = window.mobileCheck();
    var layout_class;
    if (mobile_bool)
      layout_class = 'mobile-layout';
    else
      layout_class = 'layout';
    return (
      <div className={layout_class}>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
        <button className="chat-button" onClick={() => this.handleOpenChange()}
          style={{backgroundImage:"url(/chat.png)"}}
        >
        </button>
        <a href="https://www.flaticon.com/free-icons/conversation" title="conversation icons">Conversation icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by ariefstudio - Flaticon</a>
        <EnquiryBox open={this.state.open} setClose={() => this.handleOpenFalse()}>
        </EnquiryBox>
        <BottomBanner/>
      </div>
    );
  }
}
