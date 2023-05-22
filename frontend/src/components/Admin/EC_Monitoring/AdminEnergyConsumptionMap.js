import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../../assets/css/map.css';


const position = [6.927079, 79.861244]
const customIcon = new Icon({
    iconUrl: require("../../../assets/img/map_icon.png"),
    iconSize: [33, 33]
});


function AdminEnergyConsumptionMap() {
    return (
        <div className="col-xl-12 col-lg-7">

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Map</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        <div className="map" id="map" >
                            <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}
                                    icon={customIcon}
                                >
                                    <Popup>
                                        Tiger, Wariyapola🐻🍻🎉
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                    <hr />
                    You can see the highly energy consumed houses in the map.
                </div>
            </div>
        </div>
    )
}
export default AdminEnergyConsumptionMap;