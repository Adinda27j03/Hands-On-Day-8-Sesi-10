import { Map } from 'maplibre-gl';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [107.61692866605371, -6.81381784164011],
    zoom: 5
  });
  
//DATA GEOJSON
//const data = {
//  "type": "FeatureCollection",
//  "features": [
//    {
//      "type": "Feature",
//      "properties": {
//        "marker-color": "rgba(31, 24, 230, 1)",
//        "marker-size": "medium",
//        "marker-symbol": "home"
//      },
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          107.6168514,
//          -6.8113845
//        ]
//      }
//    }
//  ]
//}

map.on('load', () => {

map.addSource('kota', {
    type: 'geojson',
    data: tkp
  });

map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "kota",
    paint: {
        "circle-radius": 8,
        "circle-color": "blue",
        "circle-stroke-width": 1,
        "circle-stroke-color": "black"
        }
  });

});
  