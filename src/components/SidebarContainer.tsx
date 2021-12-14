
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { InputSwitch } from 'primereact/inputswitch';
import { actionChangeWmsLayerVisibility } from '../redux/action/wms';
import { useState } from 'react';
import { actionChangeInfoVisibility } from '../redux/action/info';
import { actionChangeWfsLayerVisibility } from '../redux/action/wfs';

const SidebarContainer = () => {

    const wmsLayers = useAppSelector(state => state.wms.layers);
    const wfsLayers = useAppSelector(state => state.wfs.layers);
    const dispatch = useDispatch()

    const changeWmsLayerVisibility = (index: number, visible: boolean) => {
        dispatch(
            actionChangeWmsLayerVisibility(index, visible)
        )
    }

    const changeWfsLayerVisibility = (index: number, visible: boolean) => {
        dispatch(
            actionChangeWfsLayerVisibility(index, visible)
        )
    }

    const [infoState, setInfoState] = useState(false);
    const changeInfoState = (state: boolean) => {
        dispatch(actionChangeInfoVisibility(state));
        setInfoState(state);
    }

    return (
        <div>
            <div className="SidebarRowTitle">
                WMS LAYERS
            </div>
            {wmsLayers.map((l, index) => {
                return (
                    <div className="SidebarRowContent" key={index}>
                        {l.layername}
                        <InputSwitch
                            checked={l.visible}
                            onChange={e => changeWmsLayerVisibility(index, e.value)}
                        />
                    </div>
                )
            }
            )}
            <div className="SidebarRowTitle">
                WFS LAYERS
            </div>
            {wfsLayers.map((l, index) => {
                return (
                    <div className="SidebarRowContent" key={index}>
                        {l.layername}
                        <InputSwitch
                            checked={l.visible}
                            onChange={e => changeWfsLayerVisibility(index, e.value)}
                        />
                    </div>
                )
            }
            )}

            <div className="InfoSwitch">
                Info Al
                <InputSwitch checked={infoState} onChange={e => changeInfoState(e.value)} />
            </div>
        </div>
    )
}

export default SidebarContainer
