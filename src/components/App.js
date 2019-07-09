import React, { Component } from "react";
import styles from "./App.css";
import img from "../assets/palm.png";

export default class App extends Component {
    okButtonHandler() {
        alert("Ok button clicked");
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>This is React boilerplate</h1>
                <p>It is used for:</p>
                <ul>
                    <li>Speeding up the beginning of React development</li>
                    <li>Learning how to set up development tools:</li>
                    <ul>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>EsLint</li>
                        <li>Whatever...</li>
                    </ul>
                </ul>
                <p>Also, it will be used to learn how to work with GitHub while developing React application</p>
                <p>Press this button if you have read the above text</p>
                <button className={styles.defaultButton} onClick={() => this.okButtonHandler()}>OK</button>
                <img src={img} alt="palm image"/>
            </div>
        )
    }
}