GeoCode.setApiKey("AIzaSyAEGJicQ0P8wkIJw4DscNsOLA-_OFVWoFo");
GeoCode.setLanguage("en");
GeoCode.setRegion("in");

const getGeoCode = (e) => {
    let zipCode = e.target.value;
    const latitude = ''

    GeoCode.fromAddress(zipCode).then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        createTicketFormik.values.lat = lat;
        createTicketFormik.values.lng = lng;
    });
};

export default getGeoCode;