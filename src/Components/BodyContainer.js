import React from 'react';
import './BodyContainer.css';

import SliderContainer from './SliderContainer';
import Menu from './Menu';
import Form from './Form';
import FormMobile from './FormMobile';
import logo from '../Pictures/IMG_0514.png';

export default class BodyContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            mobile: false
        };

        this.mobileChange = this.mobileChange.bind(this);
    }

    mobileChange() {
        this.setState((prev) => ({mobile: !prev.mobile}));
    }

    render() {
        return (
            this.state.mobile ? (
                    <div className="BodyContainer">
                        <div className="Menu"><Menu onClick={this.mobileChange}/></div>
                        <img alt="logo" className="logo" src={logo} />
                        <div className="Company">Moonlight Machine LLC.</div>
                        <FormMobile />
                    </div>
                ):(
                    <div className="BodyContainer">
                        <div className="Menu"><Menu onClick={this.mobileChange}/></div>
                        <img alt="logo" className="logo" src={logo} />
                        <div className="Company">Moonlight Machine LLC.</div>
                        <Form/>
                        <div style={{zIndex: -1}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 600 1000">
                            <path stroke="grey" fill="#333" fillOpacity="0.8" d="M0,224L18.5,213.3C36.9,203,74,181,111,176C147.7,171,185,181,222,192C258.5,203,295,213,332,208C369.2,203,406,181,443,165.3C480,149,517,139,554,144C590.8,149,628,171,665,154.7C701.5,139,738,85,775,80C812.3,75,849,117,886,154.7C923.1,192,960,224,997,224C1033.8,224,1071,192,1108,170.7C1144.6,149,1182,139,1218,160C1255.4,181,1292,235,1329,240C1366.2,245,1403,203,1422,181.3L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
                            </svg>
                        </div>
                        <SliderContainer />
                    </div>
                )
          );
    }
}
