

export default (apiUrl, httpClient) => ({
    getSlideshows: () => httpClient(`${apiUrl}/slideshows`)
        .then(({ json }) => ({
            data: json,
        })),
    getSlides: (slideshowId) => httpClient(`${apiUrl}/slideshows/${slideshowId}/slides`)
        .then(({ json }) => ({
            data: json,
        })),
});