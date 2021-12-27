import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, Edit } from 'react-admin';
import apiHandler from "./apiHandler.ts";

import UserIcon from '@material-ui/icons/People';
import AvailablilityIcon from '@material-ui/icons/EventAvailable';
import ConsultationHourIcon from '@material-ui/icons/HourglassEmptyOutlined';
import ScreenIcon from '@material-ui/icons/DesktopWindows';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import SlideshowVariableIcon from '@material-ui/icons/Functions';

import { UserList, UserEdit, UserCreate } from './Entities/users';
import { AvailabilitiesList, AvailabilitiesEdit, AvailabilitiesCreate } from './Entities/availabilities';
import { ConsultationHoursList, ConsultationHoursEdit, ConsultationHoursCreate } from './Entities/consultation_hours';
import { ScreenList, ScreenEdit, ScreenCreate } from './Entities/screens';
import { SlideshowList, SlideshowEdit, SlideshowCreate } from './Entities/slideshows';
import { SlideshowVariablesList, SlideshowVariablesEdit, SlideshowVariablesCreate } from './Entities/slideshow_variables';

const dataProvider = apiHandler('http://localhost:6965');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name="availabilities" list={AvailabilitiesList} edit={AvailabilitiesEdit} create={AvailabilitiesCreate} icon={AvailablilityIcon} />
        <Resource name="consultation_hours" list={ConsultationHoursList} edit={ConsultationHoursEdit} create={ConsultationHoursCreate} icon={ConsultationHourIcon} />
        
        <Resource name="screens" list={ScreenList} edit={ScreenEdit} create={ScreenCreate} icon={ScreenIcon} />
        <Resource name="slideshows" list={SlideshowList} edit={SlideshowEdit} create={SlideshowCreate} icon={SlideshowIcon} />
        <Resource name="slideshow_variables" list={SlideshowVariablesList} edit={SlideshowVariablesEdit} create={SlideshowVariablesCreate} icon={SlideshowVariableIcon} />

        <Resource name="rss_slides" list={ListGuesser} edit={EditGuesser} /> 
        {/* create={ScreenCreate} icon={ScreenIcon} /> */}
        <Resource name="media_slides" list={ListGuesser} edit={EditGuesser} /> 
        {/* create={ScreenCreate} icon={ScreenIcon} /> */}
        <Resource name="text_slides" list={ListGuesser} edit={EditGuesser} /> 
        {/* create={ScreenCreate} icon={ScreenIcon} /> */}
    </Admin>
);

export default App;