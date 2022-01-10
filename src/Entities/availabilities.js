import * as React from "react";
import { List, Datagrid, TextField, Edit, TextInput, SimpleForm, Create, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';

export const AvailabilitiesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"><TextField source="username" /></ReferenceField>
            <TextField source="weekDay" />
            <TextField source="startTime" />
            <TextField source="endTime" />
        </Datagrid>
    </List>
);

export const AvailabilitiesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="username" /></ReferenceInput>
            <TextInput source="weekDay" />
            <TextInput source="startTime" />
            <TextInput source="endTime" />
        </SimpleForm>
    </Edit>
);

export const AvailabilitiesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="username" /></ReferenceInput>
            <TextInput source="weekDay" />
            <TextInput source="startTime" />
            <TextInput source="endTime" />
        </SimpleForm>
    </Create>
);