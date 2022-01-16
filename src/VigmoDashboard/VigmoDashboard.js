import * as React from "react";
import { Admin, Resource, fetchUtils, AppBar } from 'react-admin';

import { Link } from "react-router-dom";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const VigmoDashboard = () => (
    <Link to="/admin">
        <button variant="outlined">
            Go to adminpanel
        </button>
    </Link>
);

export default VigmoDashboard;