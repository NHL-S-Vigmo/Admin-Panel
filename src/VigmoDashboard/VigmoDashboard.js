import * as React from "react";
import SideBarPanel from "./component/SideBarPanel";
import SlideShowPanel from "./component/SlideShowPanel";
import StatusBar from "./component/StatusBar";
import { Link } from "react-router-dom";
import './VigmoDashboard.css'
import authProvider from "./logic/authProvider";
import "@fontsource/plus-jakarta-sans"; 

if(!localStorage.getItem('screen_token')){ 
    let pathArray = window.location.pathname.split('/');
    let authKey = pathArray[1];
    authProvider.login(authKey);
}

const VigmoDashboard = () => {
    // TODO: process this url, if its empty, return a button to the admin panel :)
    const path = window.location.pathname;
    
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
                <SideBarPanel />
                <SlideShowPanel />
            </div>
        ))
    }



};

export default VigmoDashboard;