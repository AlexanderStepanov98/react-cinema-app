import React, { useState, useEffect } from "react";
import DropDownList from "../DropDownList/DropDownList";
import api from "../../utils/cinemaAPI";
import { connect } from "react-redux";
import { updateCity } from "../../actions/actions";
import styles from "./Header.css";
import { Link } from "react-router-dom";

const Header = ({initialCityId, onCitySelect}) => {

    const {container, linksContainer, dropdownContainer} = styles;
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
        api.getCities()
            .then(resp => setCityList(resp));
    }, []);

    return (
        <div className={container}>
            <div className={linksContainer}>
                <ul>
                    <li><Link to="/movies">movies</Link></li>
                    <li><Link to="/cinemas">cinemas</Link></li>
                </ul>
            </div>
            <div className={dropdownContainer}>
                <DropDownList
                    initialValue={initialCityId}
                    items={cityList}
                    onSelect={onCitySelect}
                />
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    initialCityId: state.cityId
});

const mapDispatchToProps = dispatch => ({
    onCitySelect: (cityId) => dispatch(updateCity(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)