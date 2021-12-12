import { Tile } from 'ol/layer';
import { TileWMS } from 'ol/source';
import { useContext, useEffect, useRef } from 'react'
import { MapContext } from '../MapContext';


interface Props {
    url: string;
    layerName: string[];
    visible: boolean;
}
export default function WmsLayer(props: Props) {

    const map = useContext(MapContext)
    const t = useRef<Tile<any> | null>(null);
    useEffect(() => {
        const tileLayer = new Tile({
            source: new TileWMS({
                params: {
                    layers: props.layerName
                },
                url: props.url
            }),
            visible: props.visible
        })

        t.current = tileLayer;
        map.addLayer(tileLayer);
        return () => { map.removeLayer(tileLayer) }
    }, [])


    useEffect(() => {
        const tileLayer = t.current!;
        tileLayer.setVisible(props.visible);
    }, [props.visible])

    return null;
}
