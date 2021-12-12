import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Map from './components/map/Map';
import WmsLayer from './components/map/wms-layer/WmsLayer';
import SidebarContainer from './components/SidebarContainer';
import { actionInitWmsLayers } from './redux/action/wms';
import { useAppSelector } from './redux/hooks';

function App() {
  const wmsLayers = useAppSelector(state => state.wms.layers);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionInitWmsLayers())
  }, []);
  return (
    <div className="App">
      <div className="sidebar">
        <SidebarContainer />
      </div>
      <div className="map-container">
        <Map>
          {
            wmsLayers.map(a =>
              <WmsLayer
                key={a.url + a.layername}
                url={a.url}
                layerName={a.layername}
                visible={a.visible}
              ></WmsLayer>
            )
          }
        </Map>
      </div>
    </div>
  );
}

export default App;
