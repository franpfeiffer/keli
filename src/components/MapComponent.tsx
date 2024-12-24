'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

type IconDefaultPrototype = {
  _getIconUrl?: () => string;
};

const iconDefault = L.Icon.Default.prototype as IconDefaultPrototype;

if (iconDefault._getIconUrl) {
  delete iconDefault._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function MapComponent() {
  const position: [number, number] = [-31.6333, -60.7]

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Santa Fe Capital, Argentina
        </Popup>
      </Marker>
    </MapContainer>
  )
}
