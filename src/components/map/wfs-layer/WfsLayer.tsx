import { GeoJSON } from 'ol/format'
import { useContext, useEffect, useRef } from 'react'
import { MapContext } from '../MapContext'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

interface Props {
    url: string;
    serviceName: string;
    layerName: string;
    visible: boolean;
}

export default function WfsLayer(props: Props) {
    const map = useContext(MapContext)
    const t = useRef<VectorLayer<any> | null>(null);
    useEffect(() => {
        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                format: new GeoJSON({}),
                url: props.url + props.serviceName + ':' + props.layerName + '&maxFeatures=50&outputFormat=application%2Fjson',
            })
        })
        t.current = vectorLayer;
        map.addLayer(vectorLayer);
        return () => { map.removeLayer(vectorLayer) }
    }, [])

    useEffect(() => {
        const vectorLayer = t.current!;
        vectorLayer.setVisible(props.visible);
    }, [props.visible])

    return null;
}
