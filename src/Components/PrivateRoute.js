// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import HomePage from './HomePage';
import Login from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // check user is logged in or not
    const isLoggedIn = JSON.parse(sessionStorage.getItem("authenticatedUserObj"));

    return (
        isLoggedIn ? (<Component />) : (<Login />))
}

export default PrivateRoute
