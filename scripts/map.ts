import * as maplibregl from 'maplibre-gl';

const initMap = (): void => {
    const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
};

document.addEventListener('DOMContentLoaded', initMap);
