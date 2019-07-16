import React from 'react';
import {NavLink} from "react-router-dom";

import api from '../../services/cinemaAPI';
import styles from './films-list-item.css';


export default function FilmsListItem(props) {

    const { container, link, filmTitle, poster} = styles;
    return (
        <div className={container}>
            <NavLink className={link} to="/">
                <img className={poster} src={api.getPosterLinkByMovieId(props.id)} title="poster" alt={props.title} />
            </NavLink>
            <p className={filmTitle}>
                <NavLink className={link} to="/">
                    {props.title}
                </NavLink>
            </p>
        </div>
    )
}
