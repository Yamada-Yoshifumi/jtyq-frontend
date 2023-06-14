import React, {Component} from "react";
import "./styles/ContentBannerText.css";

export class ContentBannerText extends Component{
    constructor(props) {
        super(props);
        this.state = {index: 1,  loading: true, animation_finished: true, left_clicked: false, right_clicked: false};
        this.contents_list = [];
    }

    componentDidMount() {
        this.populateContentBanner();
    }

    leftClicked = () => {
        this.setState({
            left_clicked: true
        });
    }

    rightClicked = () => {
        this.setState({
            right_clicked: true
        })
    }

    onAnimationStart = () => {
        
        this.setState({
            animation_finished: false
        });
    }

    onAnimationEnd = () => {

        if(this.state.right_clicked){
            let new_index = this.state.index + 1;
            new_index = new_index % this.contents_list.length;
            this.setState({
                index: new_index
            });
            console.log(this.state.index);
        }
        else if (this.state.left_clicked)
        {
            let new_index = this.state.index - 1;
            if (this.state.index === 0)
                new_index = this.contents_list.length - 1
            this.setState({
                index: new_index
            });
            console.log(this.state.index);
        }
        this.setState({
            animation_finished: true,
        });
        this.setState({
            right_clicked: false
        });
        this.setState({
            left_clicked: false,
        });
    };

    renderContentBannerText(){
        window.addEventListener("transitionend", this.onAnimationEnd, true);
        window.addEventListener("transitionstart", this.onAnimationStart, true);
        var prev_index = this.state.index - 1;
        var next_index = this.state.index + 1;
        if (this.state.index === this.contents_list.length - 1){
            next_index = 0;
        }
        else if (this.state.index === 0){
            prev_index = this.contents_list.length - 1;
        }
        return(
            <div className="flexbox-container">
                <button disabled={!this.state.animation_finished} className="slide-button" onClick={this.leftClicked}
                style={{backgroundImage:"url(/back_arrow.png)"}}></button>
                <div className={`text-white slide-text-box " ${!this.state.left_clicked? "opaque" : "slide-right-entry"} ${!this.state.right_clicked? "" : "text-box-disappear"}`}>
                    <h5 className="text-center">{this.contents_list[prev_index]["name"]}</h5>
                    <p className="text-center">{this.contents_list[prev_index]["description"].slice(0,150) + " ..."}</p>
                </div>      
                <div 
                className={`text-white slide-text-box " ${!this.state.left_clicked? "" : "slide-right-exit"} ${!this.state.right_clicked? "" : "slide-left-exit"}`}>
                    <h5 className="text-center">{this.contents_list[this.state.index]["name"]}</h5>
                    <p className="text-center">{this.contents_list[this.state.index]["description"].slice(0,150) + " ..."}</p>
                </div>
                <div className={`text-white slide-text-box " ${!this.state.right_clicked? "opaque" : "slide-left-entry "} ${!this.state.left_clicked? "" : "text-box-disappear"}`}>
                    <h5 className="text-center">{this.contents_list[next_index]["name"]}</h5>
                    <p className="text-center">{this.contents_list[next_index]["description"].slice(0,150) + " ..."}</p>
                </div>
                <button disabled={!this.state.animation_finished} className="slide-button" onClick={this.rightClicked}
                style={{backgroundImage:"url(/forward_arrow.png)"}}></button>
            </div>
        ); 
    }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : this.renderContentBannerText();

        return (
        <div>
            {contents}
        </div>
        );
    }

    async populateContentBanner(){
        const response = await fetch('/api/' + this.props.banner_content.replace(/ /g,''));
        const data = await response.json();
        this.contents_list = data;
        this.setState({loading: false});
    }
}