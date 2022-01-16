import * as React from "react";
import { fetchUtils } from 'react-admin';
import SlideShowPanel from "./component/SlideShowPanel";
import StatusBar from "./component/StatusBar";
import './VigmoDashboard.css'

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('screen_token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const VigmoDashboard = () => (
    <div className="component-app">
        <SlideShowPanel />
        <StatusBar />
    </div>
);

export default VigmoDashboard;