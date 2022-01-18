import React from "react";
import PropTypes from "prop-types";
import * as rssParser from 'react-native-rss-parser';

export default class RssSlide extends React.Component {

    rssParser() {
        
    }

    render() {        
        return (
            <div className="slideContent">
                <div>
                    Heftig bericht enzo { this.rssParser() }
                </div>
            </div>
        );
    }
}
