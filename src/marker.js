const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoibWluaWNobG9lIiwiYSI6ImNqZ280OHU4bTBjMG4yeXBtc3MxaGp1anMifQ.RsJ5GoIvu6BGfO-WS53IZw';

export function buildMarker (type, coordinates) {
    // if (type.toLowerCase() === 'restaurant')
    const markerType = document.createElement('div');
    markerType.style.width = '32px';
    markerType.style.height = '39px';
    // markerType.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    switch (type.toLowerCase()) {
        case 'restaurant':
            markerType.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        break;

        case 'activity':
            markerType.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        break;

        case 'hotel' :
            markerType.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        break;

        default:
            markerType.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }

    return new mapboxgl.Marker(markerType).setLngLat(coordinates);
}