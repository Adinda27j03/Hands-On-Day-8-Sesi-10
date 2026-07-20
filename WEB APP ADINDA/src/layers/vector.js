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

export function addBufferLayer(map, data){
    const fid = getRandomInt(1, 1000)
//LAYER BUFFER BERDASARKAN POINT 
    map.addSource(String(fid), {
        type: "geojson",
        data: data
    })

    map.addLayer({
        id: `area-${fid}`,
        type: "fill",
        source: String(fid),
        paint: {
        "fill-color":"red",
        "fill-opacity":0.3,
        "fill-outline-color":"red"
        }
    })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}