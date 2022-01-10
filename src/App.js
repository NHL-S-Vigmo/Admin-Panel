import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
import apiHandler from "./apiHandler.ts";
import authProvider from './authProvider';

import UserIcon from '@material-ui/icons/People';
import AvailablilityIcon from '@material-ui/icons/EventAvailable';
import ConsultationHourIcon from '@material-ui/icons/HourglassEmptyOutlined';
import ScreenIcon from '@material-ui/icons/DesktopWindows';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import SlideshowVariableIcon from '@material-ui/icons/Functions';
import RssSlideIcon from '@material-ui/icons/RssFeed';
import MediaSlideIcon from '@material-ui/icons/PermMedia';
import TextSlideIcon from '@material-ui/icons/Assignment';

import { UsersList, UsersEdit, UsersCreate } from './Entities/users';
import { AvailabilitiesList, AvailabilitiesEdit, AvailabilitiesCreate } from './Entities/availabilities';
import { ConsultationHoursList, ConsultationHoursEdit, ConsultationHoursCreate } from './Entities/consultation_hours';
import { ScreensList, ScreensEdit, ScreensCreate } from './Entities/screens';
import { SlideshowList, SlideshowEdit, SlideshowCreate } from './Entities/slideshows';
import { SlideshowVariablesList, SlideshowVariablesEdit, SlideshowVariablesCreate } from './Entities/slideshow_variables';
import { RssSlidesList, RssSlidesEdit, RssSlidesCreate } from './Entities/rss_slides';
import { MediaSlidesList, MediaSlidesEdit, MediaSlidesCreate } from './Entities/media_slides';
import { TextSlidesList, TextSlidesEdit, TextSlidesCreate } from './Entities/text_slides';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = apiHandler(process.env.REACT_APP_DATA_URL, httpClient);

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate} icon={UserIcon} />
        <Resource name="availabilities" list={AvailabilitiesList} edit={AvailabilitiesEdit} create={AvailabilitiesCreate} icon={AvailablilityIcon} />
        <Resource name="consultation_hours" list={ConsultationHoursList} edit={ConsultationHoursEdit} create={ConsultationHoursCreate} icon={ConsultationHourIcon} />
        
        <Resource name="screens" list={ScreensList} edit={ScreensEdit} create={ScreensCreate} icon={ScreenIcon} />
        <Resource name="slideshows" list={SlideshowList} edit={SlideshowEdit} create={SlideshowCreate} icon={SlideshowIcon} />
        <Resource name="slideshow_variables" list={SlideshowVariablesList} edit={SlideshowVariablesEdit} create={SlideshowVariablesCreate} icon={SlideshowVariableIcon} />

        <Resource name="rss_slides" list={RssSlidesList} edit={RssSlidesEdit} create={RssSlidesCreate} icon={RssSlideIcon} />
        <Resource name="media_slides" list={MediaSlidesList} edit={MediaSlidesEdit} create={MediaSlidesCreate} icon={MediaSlideIcon} />
        <Resource name="text_slides" list={TextSlidesList} edit={TextSlidesEdit} create={TextSlidesCreate} icon={TextSlideIcon} />
    </Admin>
);

export default App;