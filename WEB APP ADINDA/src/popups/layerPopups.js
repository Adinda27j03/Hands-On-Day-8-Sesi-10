import { Popup } from "maplibre-gl";

const popup = new Popup();

export function addDataPopup(map, event){
    const coordinate = event.lngLat
    const longitude = coordinate.lng.toFixed(2)
    const latitude = coordinate.lat.toFixed(2)

    const properties = event.features[0].properties
    const tkpName = properties.NO_TINDAK_PIDANA_ALAMAT

    console.log(properties)

    return popup
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <h3>${tkpName}</h3>
                <div>Bujur: ${longitude}</div>
                <div>Lintang: ${latitude}</div>
            </div>    
        `)
        .addTo(map)
}