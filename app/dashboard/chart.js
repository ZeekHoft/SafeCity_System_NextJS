// ./chart
// components/Chart.js
'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';


const formatTime = (value) => {
    const hours = value.hours || 0;
    const minutes = value.minutes || 0;
    return `${hours}h ${minutes}m`; // Display as "Xh Ym"
  };

  export default function MonthlyIncident({ data }) {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip
              formatter={(value, name) => [`${value} incidents`, `${name}`]} // Customize tooltip content
              labelFormatter={(label) => `Month: ${label}`} // Format the label
            />
            <Line type="monotone" dataKey="incidents" stroke="#E05194" strokeWidth={5} />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  


export function AverageResponse({ data }) {
    // Prepare the data for the chart
    const formattedData = data.map((item) => ({
      ...item,
      totalMinutes: item.incidents.hours * 60 + item.incidents.minutes, // Total minutes
    }));
  
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(value) => `${Math.floor(value / 60)}h ${value % 60}m`} // Format Y-axis
            />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip
              formatter={(value) =>
                typeof value === 'object' ? formatTime(value) : value
              }
            />
            <Line
              type="monotone"
              dataKey="totalMinutes" // Use totalMinutes as dataKey
              stroke="#14AAF5"
              strokeWidth={5}
            />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  export function SafetyHotspots({ data }) {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip
              formatter={(value, name) => [`${value} Incidents`, `${name}`]} // Customize tooltip content
              labelFormatter={(label) => `Place: ${label}`} // Format the label
            />
            <Line type="monotone" dataKey="incidents" stroke="#660000" strokeWidth={5} />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
