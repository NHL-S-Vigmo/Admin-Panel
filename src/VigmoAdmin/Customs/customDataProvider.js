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
                let file = params.data.resource;
                if (typeof file === "string") {
                    return dataProvider.update(resource, params);
                }
                else{
                    return Promise.resolve(convertFileToBase64(file))
                    .then((file64) => ({
                        data: file64,
                        name: `${file.rawFile.name}`,
                        mimeType: `${file.rawFile.type}`,
                    }))
                    .then(data => uploadFileToApi(data))
                    .then(file => {
                        params.data.type = file.data.mimeType;
                        params.data.resource = `${process.env.REACT_APP_DATA_URL}/files/${file.data.key}/render`;
                        return dataProvider.update(resource, params);
                    });
                }
                
            case 'users':
                let image = params.data.pfpLocation;
                // check if the file was changed, you can do this by checking if its type is string, 
                // if the image was changed, it would be of type object.
                if (typeof image === "string") {
                    return dataProvider.update(resource, params);
                }
                else {
                    //TODO: Check if it is an image

                    return Promise.resolve(convertFileToBase64(image))
                        .then((picture64) => ({
                            data: picture64,
                            name: `${image.rawFile.name}`,
                            mimeType: `${image.rawFile.type}`,
                        }))
                        .then(data => uploadFileToApi(data))
                        .then(file => {
                            params.data.pfpLocation = `${process.env.REACT_APP_DATA_URL}/files/${file.data.key}/render`;
                            return dataProvider.update(resource, params);
                        });
                }
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

/**
 * Function that takes the base64 of a file and upload it to the API. The function will return the file object it created.
 * @param {String} data the base64 representation of the file
 * @returns returns the file object from the database.
 */
const uploadFileToApi = data =>
    new Promise((resolve, reject) => {
        dataProvider.create('files', { data })
            .then(file => dataProvider.getOne('files', { id: file.data.id }))
            .then(result => resolve(result));
    });

export default customDataProvider;