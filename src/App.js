import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import apiHandler from "./apiHandler.ts";
import { UserList, UserEdit, UserCreate } from './Entities/users';
import { ScreenList, ScreenEdit, ScreenCreate } from './Entities/screens';
import { SlideShowList, SlideShowEdit, SlideShowCreate } from './Entities/slideshows';

const dataProvider = apiHandler('http://localhost:6965');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="screens" list={ScreenList} edit={ScreenEdit} create={ScreenCreate} />
        <Resource name="slideshows" list={ListGuesser} />
        {/* // edit={SlideShowEdit} create={SlideShowCreate} /> */}
    </Admin>
);

export default App;