import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FilmsList from './films-list/films-list';
import FilmsListItem from './films-list-item/films-list-item';

import styles from "./App.css";

export default class App extends Component {

    render() {
        return (
            <Router>
                <Route path='/' component={FilmsList} exact/>
                <Route path='/film/' component={FilmsListItem}/>
            </Router>
        )
    }
}