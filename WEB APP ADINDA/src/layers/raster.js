import dataRaster from "../data/kabBandung.jpg?url"


export function addRasterLayer(map){
//LAYER RASTER 
 map.addSource("soreang", {
    type: "image",
    url: dataRaster,
   
    coordinates: [
    [107.53084916574922, -7.054700],   // top-left 
    [107.56809968337066, -7.054700],   // top-right 
    [107.56809968337066, -7.068200],   // bottom-right 
    [107.53084916574922, -7.068200]    // bottom-left 
    ]
  });

 map.addLayer({
    id: "soreang-image",
    type: "raster",
    source: "soreang",
  });
};