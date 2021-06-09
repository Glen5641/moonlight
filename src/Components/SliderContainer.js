import React from 'react';
import './SliderContainer.css';
import PictureSlider from './PictureSlider';
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

export default class SliderContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.pictures = [i1,i2,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16];
        this.state = {
            index: 0,
            previndex: null,
            length: this.pictures.length
        };
        this.interval = setInterval(() => {
            this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0}));
        }, 5000);
        this.incrementClicked = this.incrementClicked.bind(this);
        this.decrementClicked = this.decrementClicked.bind(this);
        this.pauseClicked = this.pauseClicked.bind(this);
    }

    incrementClicked() { this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0})); }
    decrementClicked() { this.setState((prev) => ({index: prev.index - 1 < 0 ? prev.length - 1 : prev.index - 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0})); }
    pauseClicked() { 
        clearInterval(this.interval); 
        setTimeout(()=>{
            this.interval = setInterval(() => {
                this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0}));
            }, 5000);
        },15000);
    }
    componentWillUnmount() { clearInterval(this.interval); }
    render() {
        return (
            <div>
                <PictureSlider index={this.state.index} prev={this.state.prev} pictures={this.pictures}/>
                <div className ="bubbles">
                    <div className="bubble b1" onClick={this.decrementClicked} />
                    <div className="bubble b2 selected" onClick={this.pauseClicked} />
                    <div className="bubble b3" onClick={this.incrementClicked}/>
                </div>
            </div>
        );
    }
}
