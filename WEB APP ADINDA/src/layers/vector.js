import soreang from "../data/Soreang.geojson?url"
import dataTkp from "../data/tkpSoreang.geojson?url"

export function addKecLayer(map){
//LAYER VECTOR POLYGON
map.addSource('kecamatan', {
    type: "geojson",
    data: soreang
  });

map.addLayer({
    id: "area-kecamatan",
    type: "fill",
    source: "kecamatan",
    paint: {
        "fill-color": "orange",
        "fill-outline-color": "black"
    }
  });
};

export function addTKPLayer(map){
//LAYER VECTOR TITIK
map.addSource('tkp', {
    type: 'geojson',
    data: dataTkp
  });

map.addLayer({
    id: "titik-tkp",
    type: "circle",
    source: "tkp",
    paint: {
        "circle-radius": 8,
        "circle-color": "blue",
        "circle-stroke-width": 1,
        "circle-stroke-color": "black"
        }
  })
};

