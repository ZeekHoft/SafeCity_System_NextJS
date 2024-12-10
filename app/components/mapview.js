"use client";

// components/MapView.js
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapView = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.730610, // Central latitude
    longitude: -73.935242, // Central longitude
    zoom: 12, // Reasonable zoom level for the area
  });

  return (
    <div className="map-container" style={{ height: '100%', width: '100%' }}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%" // Adjust to fill the container
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      />
    </div>
  );
};

export default MapView;