// in src/customRoutes.js
import * as React from "react";
import { Route } from 'react-router-dom';
import profile from './profile';

export default [
    <Route key="custom-profile" path="/custom-profile" component={profile.edit}/>
];