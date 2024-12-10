import React from 'react';
import MapView from '../components/MapView'; // Importing the existing MapView component

// Sample incident data
const incidentData = [
  {
    id: 1,
    name: "Traffic accident",
    address: "123 5th Ave, New York, NY",
    latitude: 40.730610,
    longitude: -73.935242,
  },
  {
    id: 2,
    name: "Suspicious activity",
    address: "456 Elm St, Brooklyn, NY",
    latitude: 40.740610,
    longitude: -73.925242,
  },
  {
    id: 3,
    name: "Car accident",
    address: "789 Oak St, Manhattan, NY",
    latitude: 40.745610,
    longitude: -73.935742,
  },
  {
    id: 4,
    name: "Burglary attempt",
    address: "101 Pine St, Bronx, NY",
    latitude: 40.735610,
    longitude: -73.925242,
  },
  {
    id: 5,
    name: "Suspicious package",
    address: "102 Maple St, Queens, NY",
    latitude: 40.750610,
    longitude: -73.915242,
  },
  {
    id: 6,
    name: "Fight in progress",
    address: "123 Birch St, Brooklyn, NY",
    latitude: 40.755610,
    longitude: -73.905242,
  },
];

function Hotspots() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Safety Hotspots</h1>

      {/* Flexbox container to split the map and incident list */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px', // Adds a gap between the map and the list
          width: '100%',
        }}
      >
        {/* MapView Section */}
        <div style={{ flex: 1, height: '530px' }}>
          <MapView /> {/* This renders the map as part of the layout */}
        </div>

        {/* Incident List Section */}
        <div
          style={{
            flex: 1, // Make the list take the same space as the map
            height: '530px', // Match the height of the map
            overflowY: 'auto', // Enables scrolling if the list is too long
            padding: '15px',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px', // Optional: adds rounded corners
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Incident Reports</h2>
          {incidentData.map((incident) => (
            <div key={incident.id} className="mb-4 p-4 bg-white rounded">
              <h3 className="text-lg font-semibold">{incident.name}</h3>
              <p><strong>Address:</strong> {incident.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotspots;
