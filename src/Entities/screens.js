import * as React from "react";
import { List, Datagrid, TextField, BooleanField, Edit, TextInput, BooleanInput, SimpleForm, Create } from 'react-admin';

export const ScreenList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="location" />
        </Datagrid>
    </List>
);

export const ScreenEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="authKey" />
        </SimpleForm>
    </Edit>
);

export const ScreenCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="authKey" />
        </SimpleForm>
    </Create>
);