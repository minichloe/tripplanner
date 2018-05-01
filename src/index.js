console.log('Cookie');

// Real content starts here!
const mapboxgl = require("mapbox-gl");
import { buildMarker } from './marker';

mapboxgl.accessToken = 'pk.eyJ1IjoibWluaWNobG9lIiwiYSI6ImNqZ280OHU4bTBjMG4yeXBtc3MxaGp1anMifQ.RsJ5GoIvu6BGfO-WS53IZw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// If you want to create a div to add a marker you have to have your own image
// const htmlFSMarker = document.createElement('div');
// htmlFSMarker.style.width = '32px';
// htmlFSMarker.style.height = '39px';
// htmlFSMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const FSMarker = new mapboxgl.Marker()
    .setLngLat([-74.009151, 40.705086])
    .addTo(map);

const empireState = buildMarker('activity', [40.748817, -73.985428]);
empireState.addTo(map);