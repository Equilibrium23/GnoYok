export function generateJakDojadeUrl(town, fromCoords, toCoords){
    const currentDateTime = new Date();
    const currentDate = `${currentDateTime.getDate()}.${currentDateTime.getMonth()}.${currentDateTime.getFullYear()}`
    const currentTime = currentDateTime.toISOString().substr(11,5)
    return `https://jakdojade.pl/${town}/trasa/z----do--?fc=${fromCoords.toString().replaceAll(",",":")}&tc=${toCoords.toString().replaceAll(",",":")}&ft=LOCATION_TYPE_COORDINATE&tt=LOCATION_TYPE_COORDINATE&d=${currentDate}&h=${currentTime}&aro=0&t=1`
}