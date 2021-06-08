import React from 'react';
import './SliderContainer.css';
import PictureSlider from './PictureSlider';

export default class SliderContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            previndex: null,
            length: 16
        };
        this.incrementClicked = this.incrementClicked.bind(this);
        this.decrementClicked = this.decrementClicked.bind(this);
    }

    incrementClicked() { this.setState((prev) => ({index: prev.index + 1 >= prev.length ? 0 : prev.index + 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0})); }
    decrementClicked() { this.setState((prev) => ({index: prev.index - 1 < 0 ? prev.length : prev.index - 1, prev: (prev.index !== undefined && prev.index !== null) ? prev.index : 0})); }

    render() {
        return (
            <div>
                <PictureSlider index={this.state.index} prev={this.state.prev}/>
                <div className ="bubbles">
                    <div className="bubble b1" onClick={this.decrementClicked} />
                    <div className="bubble b2 selected" />
                    <div className="bubble b3" onClick={this.incrementClicked}/>
                </div>
            </div>
        );
    }
}
