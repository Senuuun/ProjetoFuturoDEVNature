// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markIcon from '../assets/images/Mark.png'; // Caminho para o ícone Mark.png

const markCustomIcon = new L.Icon({
    iconUrl: markIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const Map = () => {
    // Carrega as áreas do localStorage
    const areasDePreservacao = JSON.parse(localStorage.getItem('areas')) || [];

    return (
        <MapContainer center={[areasDePreservacao.length > 0 ? areasDePreservacao[0].position[0] : 48.8566, 
                              areasDePreservacao.length > 0 ? areasDePreservacao[0].position[1] : 2.3522]} 
                      zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {areasDePreservacao.map((area, index) => (
                <Marker
                    key={index}
                    position={[area.position[0], area.position[1]]}
                    icon={markCustomIcon}
                >
                    <Popup>
                        <strong>{area.nome}</strong><br />
                        {area.descricao}<br />
                        Número de Pessoas: {area.peopleCount} {/* Exibe o número de pessoas */}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
