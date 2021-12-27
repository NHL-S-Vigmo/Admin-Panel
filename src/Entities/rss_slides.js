import * as React from "react";
import { List, Datagrid, TextField, BooleanField, Edit, TextInput, BooleanInput, SimpleForm, Create, ReferenceInput, SelectInput } from 'react-admin';

export const RssSlideList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="role" />
            <TextField source="pfpLocation" />
            <BooleanField source="enabled" />
        </Datagrid>
    </List>
);

export const RssSlideEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="password" />
            <BooleanInput source="enabled" />
            <TextInput source="role" />
            <TextInput source="pfpLocation" />
        </SimpleForm>
    </Edit>
);

export const RssSlideCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <BooleanInput source="enabled" />
            <TextInput source="role" />
            <TextInput source="pfpLocation" />
        </SimpleForm>
    </Create>
);