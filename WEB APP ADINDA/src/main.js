import { 
  Map,
  FullscreenControl,
  GlobeControl,
  LogoControl
} from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';
import { addTKPLayer , addKecLayer} from './layers/vector';
import { addRasterLayer } from './layers/raster';
import { addAttribution } from './controls/basicControls';
import { LogoJabarControl } from './controls/customLogoControls'
import { addDataPopup } from './popups/layerPopups';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [107.51969117520541, -7.03375223175306],
    zoom: 11,
    attributionControl: false
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
  addRasterLayer(map);
  addKecLayer(map);
  addTKPLayer(map);
});

map.on("click", "titik-tkp", function(event){
  addDataPopup(map, event);
})

map.doubleClickZoom.disable();

// Controls setting
addAttribution(map);
map.addControl(new FullscreenControl())
map.addControl(new GlobeControl())
map.addControl(new LogoControl({compact: false}))
map.addControl(new LogoJabarControl(), "top-left")
