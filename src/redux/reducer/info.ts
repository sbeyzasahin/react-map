interface InitialState {
    info: string[];
    visible: boolean;
}

const initialState: InitialState = {
    info: [],
    visible: false
}

interface DefaultAction {
    type: string;
    payload?: any;
}

export const infoReducer = (state = initialState, action: DefaultAction) => {
    if (action.type === 'SET_INFO') {
        return {
            ...state,
            info: action.payload as string[]
        }
    } else if (action.type === 'CHANGE_INFO_VISIBILITY') {
        return {
            ...state,
            info: [],
            visible: action.payload as boolean
        }
    }

    return state;
}