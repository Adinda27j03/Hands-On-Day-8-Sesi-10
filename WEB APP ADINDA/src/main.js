import { Map } from 'maplibre-gl';
import dataTkp from "./data/tkpSoreang.geojson?url"
import soreang from "./data/Soreang.geojson?url"


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [107.51969117520541, -7.03375223175306],
    zoom: 11
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

//LAYER POLYGON
map.addSource('pulau', {
    type: "geojson",
    data: soreang
  });

map.addLayer({
    id: "area-pulau",
    type: "fill",
    source: "pulau",
    paint: {
        "fill-color": "orange",
        "fill-outline-color": "black"
    }
  });

//LAYER TITIK
map.addSource('kota', {
    type: 'geojson',
    data: dataTkp
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

//LAYER RASTER 
 map.addSource("soreang", {
    type: "image",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Peta_Kecamatan_Soreang.jpg",
    coordinates: [
      [79.16, -0.40], // top-left
      [94.18, -1.66], // top-right
      [94.65, -14.73], // bottom-right
      [72.97, -13.74] // bottom-left
    ]
  });

 map.addLayer({
    id: "soreang-image",
    type: "raster",
    source: "soreang",
  });


});
  