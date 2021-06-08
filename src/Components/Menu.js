import React from 'react';

export default class Menu extends React.Component {
    
    render() {
        return (
            <div style={{width: '100%', height: '100%', color: 'white'}} onClick={this.props.onClick}>
                {this.props.mobile}
                <div style={{width: '100%', height: '2%', margin: '10% auto', backgroundColor: 'grey'}} />
            </div>
        );
    }
}
