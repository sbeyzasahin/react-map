import { AppDispatch } from "../store"


export const actionSetInfo = (value: string[]) => (dispatch: AppDispatch) => {

    return dispatch({
        type: 'SET_INFO',
        payload: value

    })
}
export const actionChangeInfoVisibility = (visible: boolean) => {
    return {
        type: 'CHANGE_INFO_VISIBILITY',
        payload: visible
    }
}