

export default (apiUrl, httpClient) => ({
    getSlideshows: () => httpClient(`${apiUrl}/slideshows`)
        .then(({ json }) => ({
            data: json,
        })),
    getSlides: (slideshowId) => httpClient(`${apiUrl}/slideshows/${slideshowId}/slides`)
        .then(({ json }) => ({
            data: json,
        })),
    getRss: (rssId) => httpClient(`${apiUrl}/rss_slides/${rssId}/latest`)
        .then(({ json }) => ({
            data: json,
        })),
});