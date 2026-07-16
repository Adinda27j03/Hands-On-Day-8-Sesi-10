


export function addRasterLayer(map){
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
};