import React, {useState, Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Explore.css';
import { Icon } from "leaflet";

class Explore extends Component {
    render() {
        return(
            <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false}>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                           attribution='&copy; < href="https://osm.org/copyright">OpenStreetMap</a> contributors' />
            </MapContainer>
        )
    }
}

export default Explore