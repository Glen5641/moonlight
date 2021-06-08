import React from 'react';
import './PictureSlider.css';
import i1 from '../Pictures/IMG_0511.JPG';
import i2 from '../Pictures/IMG_0512.JPG';
import i3 from '../Pictures/IMG_0513.JPG';
import i4 from '../Pictures/IMG_0515.JPG';
import i5 from '../Pictures/IMG_0516.JPG';
import i6 from '../Pictures/IMG_0517.JPG';
import i7 from '../Pictures/IMG_0518.JPG';
import i8 from '../Pictures/IMG_0519.JPG';
import i9 from '../Pictures/IMG_0520.JPG';
import i10 from '../Pictures/IMG_0521.JPG';
import i11 from '../Pictures/IMG_0522.JPG';
import i12 from '../Pictures/IMG_0523.JPG';
import i13 from '../Pictures/IMG_0524.JPG';
import i14 from '../Pictures/IMG_0525.JPG';
import i15 from '../Pictures/IMG_0526.JPG';
import i16 from '../Pictures/IMG_0529.JPG';

export default class PictureSlider extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { prev: 0 };
        this.pictures = [i1,i2,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16];
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
