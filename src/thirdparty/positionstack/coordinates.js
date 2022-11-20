export function getCoordinates(address) {
    const apiKey = "326804ffeb1e7c6bac46e2c520a0ea75"
    const url = "http://api.positionstack.com/v1/forward?access_key=" + apiKey + "&query=" + address;

    const request = new XMLHttpRequest();

    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var actualData = JSON.parse(request.responseText);

        return [actualData.data[0].latitude, actualData.data[0].longitude];
    } else
        return null
}

export function currentPosition(onSuccess){
    const fetchUserLocationOptions = {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0
    };
    const onError = error => {
        console.warn(`Error during fetching your location: ERROR(${error.code}): ${error.message}`);

    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, fetchUserLocationOptions);
}
