import { AppDispatch } from "../store";


export const actionInitWfsLayer = () => (dispatch: AppDispatch) => {
    const layers = [
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=',
            servicename: 'kampus',
            layername: 'Fakulte_usr',
            visible: false
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=',
            servicename: 'kampus',
            layername: 'Rektorluk_usr',
            visible: false
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=',
            servicename: 'kampus',
            layername: 'Yurtlar_usr',
            visible: false
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=',
            servicename: 'kampus',
            layername: 'atm_usr',
            visible: false
        },
    ]
    return dispatch({
        type: 'SET_WFS_LAYER',
        payload: layers
    });
}

export const actionChangeWfsLayerVisibility = (index: number, visible: boolean) => {
    return {
        type: 'CHANGE_WFS_LAYER_VISIBILITY',
        payload: {
            index, visible
        }
    }
}