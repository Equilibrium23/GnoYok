export function getDistance(centerPos, coords) {
    const lat1 = centerPos[0]
    const lon1 = centerPos[1]
    const lat2 = coords[0]
    const lon2 = coords[1]

    const R = 6378.137; // Radius of earth in KM
    const dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    const dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000;
}

export function productInSearchRange(centerPos, searchRadius, coords) {
    return getDistance(centerPos, coords) <= searchRadius;
}
