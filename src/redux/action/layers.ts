import { RestApi } from "../../utils/restapi";
import { AppDispatch } from "../store";

export const actionGetLayers = () => (dispatch: AppDispatch) => {
    RestApi.getAllLayers().then(res => {
      dispatch({
        type: 'GET_LAYERS', payload: {
          layers: res.data.layers,
        }
      });
      //console.log(res.data);
    })
}