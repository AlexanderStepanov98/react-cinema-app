import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { updateCity } from "../actions/actions";

const mapStateToProps = state => ({
    text: state.cityId
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(updateCity(999))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);