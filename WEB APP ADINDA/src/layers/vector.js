import soreang from "../data/Soreang.geojson?url"
import dataTkp from "../data/tkpSoreang.geojson?url"

export function addKecLayer(map){
//LAYER VECTOR POLYGON
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

