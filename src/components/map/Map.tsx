import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import 'ol/ol.css';
import { Map as OlMap, MapBrowserEvent } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import './Map.scss'
import { MapContext } from './MapContext';
import { useAppSelector } from '../../redux/hooks';
import { actionSetInfo } from '../../redux/action/info';
import { useDispatch } from 'react-redux';

interface Props { }

const Map = (props: PropsWithChildren<Props>) => {

  const dispatch = useDispatch();
  const mapRef = useRef(document.createElement('div'));
  const [olMap, setOlMap] = useState<OlMap | null>(null);
  const t = useRef<OlMap | null>(null);

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

    t.current = map;
    map.on('click', mapClick);


    setOlMap(map);
    return () => map.dispose();
  }, []);

  const mapClick = (event: MapBrowserEvent<any>) => {
    event.preventDefault();
    const map = t.current!;
    const features: any[] = [];

    map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
      features.push(feature);
    })

    const info = features.map(feature => feature.values_.adi);
    dispatch(actionSetInfo(info))
  }

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
