import React from 'react';
import './PictureSlider.css';


export default class PictureSlider extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { prev: 0 };
        this.pictures = this.props.pictures;
    }

    componentDidUpdate() {
        let leftin = document.getElementById("trnleftin");
        let leftout = document.getElementById("trnleftout");
        let rightin = document.getElementById("trnrightin");
        let rightout = document.getElementById("trnrightout");
        if (leftin !== undefined && leftin !== null) {
            leftin.classList.remove("slideleftin");
            void leftin.offsetWidth;
            leftin.classList.add("slideleftin");
        }
        if (leftout !== undefined && leftout !== null) {
            leftout.classList.remove("slideleftout");
            void leftout.offsetWidth;
            leftout.classList.add("slideleftout");
        }
        if (rightin !== undefined && rightin !== null) {
            rightin.classList.remove("sliderightin");
            void rightin.offsetWidth;
            rightin.classList.add("sliderightin");
        }
        if (rightout !== undefined && rightout !== null) {
            rightout.classList.remove("sliderightout");
            void rightout.offsetWidth;
            rightout.classList.add("sliderightout");
        }
    }

    render() {
        console.log("index: " + this.props.index + ' , prevIndex: ' + this.props.prev + ' , last: ' + this.pictures.length);

        let direction = "";
        if (this.props.prev === undefined && this.props.index === 0) { //First move
            direction = "start";
        } else if (this.props.prev === this.pictures.length - 1 && this.props.index === 0) {
            direction = "right";
        } else if (this.props.index === this.pictures.length - 1 && this.props.prev === 0) {
            direction = "left";
        } else if (this.props.index > this.props.prev){
            direction = "right";
        } else {
            direction = "left";
        }
        console.log(direction)

        return (
            <div className="PictureSlider">
            { 
                direction === "start" ? (
                    <div id="trnleftin" className="Picture slideleftin">
                        <img alt="" src={this.pictures[this.props.index]} />
                    </div>
                ) : (
                    direction === "left" ? (
                        <div>
                            <div id="trnrightin" className="Picture sliderightin">
                                <img alt={"rightin" + this.props.index} src={this.pictures[this.props.index]} />
                            </div>
                            <div id="trnleftout" className="Picture slideleftout">
                                <img alt={"leftout" + this.props.index} src={this.pictures[this.props.prev]} />
                            </div>
                        </div>
                    ):(
                        <div>
                            <div id="trnleftin" className="Picture slideleftin">
                                <img alt={"leftin" + this.props.index} src={this.pictures[this.props.index]} />
                            </div>
                            <div id="trnrightout" className="Picture sliderightout">
                                <img alt={"rightout" + this.props.index} src={this.pictures[this.props.prev]} />
                            </div>
                        </div>
                    )
                )
            }
            </div>
        );
    }
}
