import { fetchUtils } from 'react-admin';

import apiHandler from "../apiHandler.ts";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = apiHandler(process.env.REACT_APP_DATA_URL, httpClient);

const customDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        switch (resource) {
            case 'media_slides':
                return Promise.resolve(convertFileToBase64(params.data.resource))
                    .then((file64) => ({
                        data: file64,
                        name: `${params.data.resource.rawFile.name}`,
                        mimeType: `${params.data.resource.rawFile.type}`,
                    }))
                    .then(data => dataProvider.create('files', { data }))
                    .then(file => { return dataProvider.getOne('files', { id: file.data.id }) })
                    .then(file => {
                        params.data.resource = `${process.env.REACT_APP_DATA_URL}/files/${file.data.key}/render`;
                        return dataProvider.update(resource, params);
                    });
            case 'users':
                //TODO: Check if it is an image

                return Promise.resolve(convertFileToBase64(params.data.pfp_location))
                    .then((picture64) => ({
                        data: picture64,
                        name: `${params.data.pfp_location.rawFile.name}`,
                        mimeType: `${params.data.pfp_location.rawFile.type}`,
                    }))
                    .then(data => dataProvider.create('files', { data }))
                    .then(file => { return dataProvider.getOne('files', { id: file.data.id }) })
                    .then(file => {
                        params.data.pfp_location = `${process.env.REACT_APP_DATA_URL}/files/${file.data.key}/render`;
                        return dataProvider.update(resource, params);
                    });
            default:
                return dataProvider.update(resource, params);
        }
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result.split(',')[1]);
        }
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });

export default customDataProvider;