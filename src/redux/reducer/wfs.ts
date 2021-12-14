interface InitialState {
    layers: {
        url: string;
        servicename: string;
        layername: string;
        visible: boolean;
    }[]
}

const initialState: InitialState = {
    layers: []
}

interface DefaultAction {
    type: string;
    payload?: any;
}

export const wfsReducer = (state = initialState, action: DefaultAction): InitialState => {

    if (action.type === 'SET_WFS_LAYER') {
        return {
            ...state,
            layers: action.payload
        }
    }
    if (action.type === 'CHANGE_WFS_LAYER_VISIBILITY') {
        const { index, visible } = action.payload;
        const item = state.layers[index];
        if (!item) {
            return state;
        }
        state.layers[index] = {
            ...item,
            visible
        }
        return {
            ...state,
            layers: [...state.layers]
        }
    }


    return state;
}