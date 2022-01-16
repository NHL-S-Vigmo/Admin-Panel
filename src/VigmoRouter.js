import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VigmoDashboard from './VigmoDashboard/VigmoDashboard';
import VigmoAdmin from './VigmoAdmin/VigmoAdmin';

const VigmoRouter = () => {

    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={VigmoDashboard}></Route>
            <Route exact path='/admin' component={VigmoAdmin}></Route>
        </Switch>
    );
}

export default VigmoRouter;