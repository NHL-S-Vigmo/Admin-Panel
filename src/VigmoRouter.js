import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VigmoDashboard from './VigmoDashboard/VigmoDashboard';
import VigmoAdmin from './VigmoAdmin/VigmoAdmin';

const VigmoRouter = () => {

    return (
        <Switch>
            <Route exact path='/admin' component={VigmoAdmin}></Route>
            <Route path="/*" component={VigmoDashboard}></Route>{/* Catch all other routes*/}
        </Switch>
    );
}

export default VigmoRouter;