import * as React from "react";
import { List, Datagrid, TextField, BooleanField, Edit, TextInput, BooleanInput, SimpleForm, Create } from 'react-admin';

export const ConsultationHoursList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <TextField source="weekDay" />
            <TextField source="startTime" />
            <TextField source="endTime" />
        </Datagrid>
    </List>
);

export const ConsultationHoursEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="description" />
            <TextInput source="weekDay" />
            <TextInput source="startTime" />
            <TextInput source="endTime" />
        </SimpleForm>
    </Edit>
);

export const ConsultationHoursCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="description" />
            <TextInput source="weekDay" />
            <TextInput source="startTime" />
            <TextInput source="endTime" />
        </SimpleForm>
    </Create>
);