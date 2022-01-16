import * as React from "react";
import { fetchUtils } from 'react-admin';
import SlideShowPanel from "./component/SlideShowPanel";
import StatusBar from "./component/StatusBar";
import { Link } from "react-router-dom";
import './VigmoDashboard.css'

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('screen_token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const VigmoDashboard = () => {
    // TODO: process this url, if its empty, return a button to the admin panel :)
    const path = window.location.pathname;
    console.log(path);
    if (path === '/') {
        return ((
            <div className="component-app-no-screen">
                <div className="no-screen-center">
                    <h3>Vigmo Dashboard</h3>
                    <p>You have not provided a ScreenKey.</p>
                    <Link to="/admin" className="no-screen-admin-button">
                        Go to admin panel
                    </Link>
                </div>
            </div>
        ))
    }
    else {
        return ((
            <div className="component-app">
                <SlideShowPanel />
                <StatusBar />
            </div>
        ))
    }



};

export default VigmoDashboard;