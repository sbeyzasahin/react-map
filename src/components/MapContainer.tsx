import { useEffect } from 'react'
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const MapContainer = () => {
    useEffect(() => {
        const map = new Map({
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
            ],
            target: 'map',
            view: new View({
              center: [0, 0],
              zoom: 2,
            }),
          });
    }, [])
    return (
        <div>
            <div id='map'>
                
            </div>
        </div>
    )
}

export default MapContainer
