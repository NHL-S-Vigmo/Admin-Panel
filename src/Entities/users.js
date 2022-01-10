import * as React from "react";
import { List, Datagrid, TextField, BooleanField, ImageField, Edit, TextInput, BooleanInput, SimpleForm, Create, ReferenceInput, SelectInput, ImageInput } from 'react-admin';

export const UsersList = props => (
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

export const UsersEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="password" />
            <BooleanInput source="enabled" />
            <TextInput source="role" />
            {/* <TextInput source="pfpLocation" /> */}
            <ImageInput source="pfpLocation" label="Profile Picture" accept="image/*">
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
            <BooleanInput source="enabled" />
            <TextInput source="role" />
            {/* <TextInput source="pfpLocation" /> */}
            <ImageInput source="pfpLocation" label="Profile Picture" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);