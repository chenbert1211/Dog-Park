import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

function Map(){
    return (<MapContainer center={[29.7604, -95.3698]} zoom={13} scrollWheelZoom={false} style ={{ height: '800px', width: '220%' }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
        )
}

export default Map