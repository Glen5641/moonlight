import React from 'react';
import './SliderContainer.css';
import PictureSlider from './PictureSlider';
import i1 from '../Pictures/IMG_0021.JPG';
import i2 from '../Pictures/IMG_0511.JPG';
import i3 from '../Pictures/IMG_0513.JPG';
import i4 from '../Pictures/IMG_0515.JPG';
import i5 from '../Pictures/IMG-2073.jpg';
import i6 from '../Pictures/IMG-2075.jpg';
import i7 from '../Pictures/IMG-2077.jpg';
import i8 from '../Pictures/IMG-2078.jpg';
import i9 from '../Pictures/IMG-2079.jpg';
import i10 from '../Pictures/IMG-2080.jpg';
import i11 from '../Pictures/IMG-2081.jpg';
import i12 from '../Pictures/IMG-2083.jpg';
import i13 from '../Pictures/IMG-2085.jpg';
import i14 from '../Pictures/IMG-2086.jpg';
import i15 from '../Pictures/IMG-2087.jpg';
import i16 from '../Pictures/IMG-2088.jpg';
import i17 from '../Pictures/IMG_2089.png';
import i18 from '../Pictures/IMG_2090.png';
import i19 from '../Pictures/IMG-2092.jpg';
import i20 from '../Pictures/IMG-2094.jpg';
import i21 from '../Pictures/IMG-2095.jpg';

export default class SliderContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.pictures = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21];
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

    incrementClicked() { 
        clearInterval(this.interval);
        this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0}));  
        this.interval = setInterval(() => {
            this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0}));
        }, 5000);
    }
    decrementClicked() { 
        clearInterval(this.interval); 
        this.setState((prev) => ({index: prev.index - 1 < 0 ? prev.length - 1 : prev.index - 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0})); 
        this.interval = setInterval(() => {
            this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0}));
        }, 5000);
        
    }
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
