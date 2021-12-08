interface State  {
    layers: any
}
const initialState: State = {
    layers: {},
}
export function layersReducer(state: State = initialState, action: any): State {
    if (action.type === "GET_LAYERS") {
      return { ...state, layers: action.payload }
    }
    return state;
}
