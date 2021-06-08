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

        let mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };

        this.state = {
            mobile: mobileCheck()
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
                        <div className="Menu"><Menu onClick={this.mobileChange} mobile="Desktop"/></div>
                        <img alt="logo" className="logoMobile" src={logo} />
                        <div className="CompanyMobile">Moonlight Machine LLC.</div>
                        <FormMobile />
                    </div>
                ):(
                    <div className="BodyContainer">
                        <div className="Menu"><Menu onClick={this.mobileChange} mobile="Mobile"/></div>
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
