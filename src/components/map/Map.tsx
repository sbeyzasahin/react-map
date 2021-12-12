import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import 'ol/ol.css';
import { Map as OlMap } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import './Map.scss'
import { MapContext } from './MapContext';

interface Props { }

const Map = (props: PropsWithChildren<Props>) => {

  const mapRef = useRef(document.createElement('div'));
  const [olMap, setOlMap] = useState<OlMap | null>(null);

  useEffect(() => {
    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapRef.current,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    setOlMap(map);
    return () => map.dispose();
  }, []);

  return (
    <>
      <div className="Map" ref={mapRef}></div>
      {
        olMap &&
        <MapContext.Provider value={olMap}>
          {props.children}
        </MapContext.Provider>
      }
    </>
  )
}

export default Map
