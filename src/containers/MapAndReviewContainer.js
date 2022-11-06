import React, {Component} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";


class MapAndReviewContainer extends Component {
    render() {
        return (
            <div className="mapAndReviewContainer">
                <MapContainer className="map" center={[40.5, -75.7]} zoom={13} scrollWheelZoom={false}>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                               attribution='&copy; < href="https://osm.org/copyright">OpenStreetMap</a> contributors' />
                </MapContainer>
            </div>

        )
    }
}

export default MapAndReviewContainer;