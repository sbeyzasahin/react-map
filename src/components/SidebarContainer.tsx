
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { InputSwitch } from 'primereact/inputswitch';
import { actionChangeWmsLayerVisibility } from '../redux/action/wms';
const SidebarContainer = () => {

    const layers = useAppSelector(state => state.wms.layers);
    const dispatch = useDispatch()

    const changeVisibility = (index: number, visible: boolean) => {
        dispatch(
            actionChangeWmsLayerVisibility(index, visible)
        )
    }

    return (
        <div>
            {layers.map((l, index) => {
                return (
                    <div className="SidebarRow" key={index}>
                        {l.layername}
                        <InputSwitch
                            checked={l.visible}
                            onChange={e => changeVisibility(index, e.value)}
                        />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default SidebarContainer
