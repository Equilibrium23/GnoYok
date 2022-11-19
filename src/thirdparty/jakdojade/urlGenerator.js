function generateJakDojadeUrl(town, fromCoords, toCoords, date, time){
    return `
        https://jakdojade.pl/${town}/trasa/z----do--
        ?fc=${fromCoords}
        &tc=${toCoords}
        &ft=LOCATION_TYPE_COORDINATE
        &tt=LOCATION_TYPE_COORDINATE
        &d=${date}
        &h=${time}
        &aro=0
        &t=1
    `
}