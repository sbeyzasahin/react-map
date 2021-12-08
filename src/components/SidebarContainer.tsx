
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionGetLayers } from '../redux/action/layers';

const mystyle = {
    sidebar:{
        position:'absolute',
        width: '20%',
        top:'0',
        left:'0',
        height:'100%'
    },
    button:{
        backgroundColor:'orange',
        top:'0',
        left:'10',
    }
  };

const SidebarContainer = () => {
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch()
    const layer = useAppSelector((state)=>state.layers.layers);

    const getFacultyLayers = () => {
        dispatch(actionGetLayers())
    }

    return (
        <div>
            <div>
                <Sidebar  style={mystyle.sidebar} visible={visible} position="top" onHide={() => setVisible(false)}>
                    Content
                </Sidebar>
                <Button style={mystyle.button} icon="pi pi-arrow-right" onClick={() => getFacultyLayers()}/>
            </div>
        </div>
    )
}

export default SidebarContainer
