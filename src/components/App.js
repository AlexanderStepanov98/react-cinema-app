import React, { Component } from "react";
import styles from "./App.css";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header/Header";
import Button from "../containers/Button";

export default class App extends Component {
    okButtonHandler() {
        alert("Ok button clicked");
    }

    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <Switch>
                    <Route path={"/movies"} component={Button}/>
                </Switch>
            </div>
        )
    }
}