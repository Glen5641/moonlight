import React from 'react';
import './FormMobile.css';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default class FormMobile extends React.Component {
    
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
        try {
            const firebaseApp = initializeApp({
                apiKey: 'AIzaSyAlZYCZpX1DyuugnaEJVZiR9g_kHoraok0',
                authDomain: 'moonlight-6fa92.firebaseapp.com',
                projectId: 'moonlight-6fa92'
            });
        } catch (error) {
            console.log("db already initialized.");
        }
          
        const db = getFirestore();
        
        try {
            const docRef = addDoc(collection(db, "moonlight"), {
                name: this.nameRef.current.value,
                company: this.companyRef.current.value,
                phone: this.phoneRef.current.value,
                email: this.emailRef.current.value
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    resetInfo() {
        this.nameRef.current.value = "";
        this.companyRef.current.value = "";
        this.phoneRef.current.value = "";
        this.emailRef.current.value = "";
    }

    render() {
        return (
            <div className="FormMobile">
                <div><span>Name:           </span><input ref={this.nameRef} type="text" id="name" name="name" autoComplete="new-password"></input></div>
                <div><span>Company:        </span><input ref={this.companyRef} type="text" id="company" name="company" autoComplete="new-password"></input></div>
                <div><span>Contact Number: </span><input ref={this.phoneRef} type="text" id="phone" name="phone" autoComplete="new-password"></input></div>
                <div><span>Contact Email:  </span><input ref={this.emailRef} type="text" id="email" name="email" autoComplete="new-password"></input></div>
                <div style={{margin: '2vw 0 0 48vw'}} className="myButton" onClick={this.resetInfo}>Reset</div>
                <div className="myButton" onClick={this.submitInfo}>Submit</div>
            </div>
        );
    }
}
