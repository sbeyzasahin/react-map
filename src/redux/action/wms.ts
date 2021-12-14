import { AppDispatch } from "../store"


export const actionInitWmsLayers = () => (dispatch: AppDispatch) => {
    const arr = [
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Fakulte_usr'],
            visible: false,
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Rektorluk_usr'],
            visible: false,
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Sosyal Tesis_usr'],
            visible: false,
        }
    ]
    dispatch({
        type: 'SET_WMS_LAYERS',
        payload: arr
    });
}

export const actionChangeWmsLayerVisibility = (index: number, visible: boolean) => {
    return {
        type: 'CHANGE_WMS_LAYER_VISIBILITY',
        payload: {
            index, visible
        }
    }
}


