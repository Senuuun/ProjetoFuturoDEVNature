// src/components/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markIcon from '../assets/images/Mark.png'; // Caminho para o ícone Mark.png

// Corrigir o ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Criar um ícone personalizado para a marcação
const markCustomIcon = new L.Icon({
    iconUrl: markIcon,
    iconSize: [32, 32], // Ajuste o tamanho do ícone conforme necessário
    iconAnchor: [16, 32], // Ponto do ícone que será posicionado sobre as coordenadas do marcador
    popupAnchor: [0, -32] // Ponto do popup em relação ao ícone
});

const MapView = ({ areas }) => {
    const mapCenter = areas.length > 0 ? areas[0].position : [48.8566, 2.3522]; // Centraliza no primeiro ponto ou em Paris por padrão

    return (
        <MapContainer center={mapCenter} zoom={10} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {areas.map((area) => (
                <Marker key={area.id} position={area.position} icon={markCustomIcon}>
                    <Popup>
                        {area.name}<br/>
                        Usuários Ativos: {area.usuariosAtivos}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
