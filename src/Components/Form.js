import React from 'react';
import './Form.css';

export default class Form extends React.Component {
    
    constructor(props) {
        super(props);

        this.nameRef = React.createRef();
        this.companyRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();

        this.submitInfo = this.submitInfo.bind(this);
        this.resetInfo = this.resetInfo.bind(this);
    }

    submitInfo() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: this.nameRef.current.value,
                company: this.companyRef.current.value,
                phone: this.phoneRef.current.value,
                email: this.emailRef.current.value
            })
        };
        fetch('http://104.155.135.135:8080/SetData', requestOptions)
            .then(response => {
                if (!response.ok) throw response;
                console.log('Success')
            }).catch(err => {
                console.log('error')
            });
    }

    resetInfo() {
        this.nameRef.current.value = "";
        this.companyRef.current.value = "";
        this.phoneRef.current.value = "";
        this.emailRef.current.value = "";
    }

    render() {
        return (
            <div className="Form">
                <div><span>Name:           </span><input ref={this.nameRef} type="text" id="name" name="name" autoComplete="new-password"></input></div>
                <div><span>Company:        </span><input ref={this.companyRef} type="text" id="company" name="company" autoComplete="new-password"></input></div>
                <div><span>Contact Number: </span><input ref={this.phoneRef} type="text" id="phone" name="phone" autoComplete="new-password"></input></div>
                <div><span>Contact Email:  </span><input ref={this.emailRef} type="text" id="email" name="email" autoComplete="new-password"></input></div>
                <div className="myButton" onClick={this.resetInfo}>Reset</div>
                <div className="myButton" onClick={this.submitInfo}>Submit</div>
            </div>
        );
    }
}
