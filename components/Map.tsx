'use client';

import L, { latLng } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
})

interface MapProps {
    center?: number[]; 
}
const Map: React.FC<MapProps> = ({
    center,
}) => {
  return (
    <MapContainer
        center={center as L.LatLngExpression || [51.505, -0.01]}
        zoom={center ? 15 : 2}
        scrollWheelZoom={false}
        className='h-[35vh]'    
        >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
        position={center as L.LatLngExpression || [51.505, -0.01]}
        />
    </MapContainer>
  )
}

export default Map