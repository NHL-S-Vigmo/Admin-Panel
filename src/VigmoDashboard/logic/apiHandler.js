

export default (apiUrl, httpClient) => ({
    getSlideshows: () => httpClient(`${apiUrl}/slideshows`)
    .then(({ json }) => ({
        data: json,
    })),
    getSlides: (slideshowId) => {

    }
});