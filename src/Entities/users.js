import * as React from "react";
import { List, Datagrid, TextField, BooleanField, ImageField, SelectField, Edit, TextInput, BooleanInput, SimpleForm, Create, ReferenceInput, SelectInput, ImageInput } from 'react-admin';
import { userRoles } from '../Constants';

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <SelectField source="role" choices={userRoles} />
            <TextField source="pfpLocation" />
            <BooleanField source="enabled" />
        </Datagrid>
    </List>
);

export const UsersEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="password" placeholder="(leave blank to not change)" />
            <BooleanInput source="enabled" checked />
            <SelectInput source="role" choices={userRoles} />
            {/* <TextInput source="pfpLocation" /> */}
            <ImageField source="pfpLocation" label="Profile Picture" emptyText="Picture not available" />
            <ImageInput source="pfpLocation" label="Upload a new picture" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const UsersCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <BooleanInput source="enabled" defaultValue />
            <SelectInput source="role" choices={userRoles} />
            {/* <TextInput source="pfpLocation" /> */}
            <ImageInput source="pfpLocation" label="Profile Picture" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);