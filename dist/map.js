"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maplibregl = require("maplibre-gl");
var initMap = function () {
    var map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
};
document.addEventListener('DOMContentLoaded', initMap);
