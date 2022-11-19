export function generateGoogleMapUrl(origin, destination)
{
    const twoPointsMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`
    const singlePointsMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`
    return origin ? twoPointsMapUrl : singlePointsMapUrl
}