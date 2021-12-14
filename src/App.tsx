import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import InfoBox from './components/InfoBox';
import Map from './components/map/Map';
import WmsLayer from './components/map/wms-layer/WmsLayer';
import SidebarContainer from './components/SidebarContainer';
import { actionInitWmsLayers } from './redux/action/wms';
import { useAppSelector } from './redux/hooks';
import WfsLayer from './components/map/wfs-layer/WfsLayer';
import { actionInitWfsLayer } from './redux/action/wfs';

function App() {
  const infoBoxVisibility = useAppSelector(state => state.info.visible);
  const wmsLayers = useAppSelector(state => state.wms.layers);
  const wfsLayers = useAppSelector(state => state.wfs.layers);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionInitWmsLayers())
    dispatch(actionInitWfsLayer())
  }, []);

  return (
    <div className="App">
      <div className="sidebar" >
        <SidebarContainer />
      </div>
      <div className="map-container" >
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
          {
            wfsLayers.map(a =>
              < WfsLayer
                key={a.url + a.layername}
                url={a.url}
                serviceName={a.servicename}
                layerName={a.layername}
                visible={a.visible}></WfsLayer>
            )
          }
          <div>
          </div>
        </Map>
      </div>

      {
        infoBoxVisibility &&
        <div className="info-box">
          <InfoBox />
        </div>
      }

    </div >
  );
}

export default App;
