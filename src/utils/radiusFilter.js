export function getDistance(centerPos, coords) {
    var lat1 = centerPos[0]
    var lon1 = centerPos[1]
    var lat2 = coords[0]
    var lon2 = coords[1]

    const R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 1000;

    return d;
}

export function filterProductsByRadius(centerPos, radius, coords) {
    return getDistance(centerPos, coords) <= radius;
}
