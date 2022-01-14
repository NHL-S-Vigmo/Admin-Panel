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
// const dataProvider = simpleRestProvider(process.env.REACT_APP_DATA_URL);

const customDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        // if (resource !== 'media_slides'){ // resource !== 'users' || !params.data.pfpLocation) {
            return dataProvider.update(resource, params);
        // }

        // console.log(params.data.resource);
        
        // const myFile = params.data.resource;
        // if ( !myFile.rawFile instanceof File ){
        //     return Promise.reject('Error: Not a file...'); // Didn't test this...
        // }
        
        // // const myFile = params.data.pfpLocation;
        // // if ( !myFile.rawFile instanceof File ){
        // //     return Promise.reject('Error: Not a file...'); // Didn't test this...
        // // }

        // return Promise.resolve( convertFileToBase64(myFile) )
        //     .then( (picture64) => ({
        //         file: picture64,
        //         fileName: `${myFile.rawFile.name}`,
        //         mimeType: `${myFile.rawFile.type}`,
        //     }))
        //     .then( data => dataProvider.create('files', { data } ));
        //     // .then(transformedMyFile => dataProvider.update(resource, {
        //     //         ...params,
        //     //         data: {
        //     //             ...params.data,
        //     //             picture: transformedMyFile,
        //     //         },
        //     //     })
        //     // );
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
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default customDataProvider;