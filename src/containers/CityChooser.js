import React from "react";
import DropDownList from "../components/DropDownList/DropDownList";
import { connect } from "react-redux";
import { updateCity } from "../actions/actions";

const mapStateToProps = state => ({
    initialValue: state.cityId
});

const mapDispatchToProps = dispatch => ({
    onSelect: (cityId) => dispatch(updateCity(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownList);