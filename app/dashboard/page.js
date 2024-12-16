'use client';
{/*NOTE:STILL NOT FINISHED, NEED TO ADD MORE STUFF LIKE CHARTS AND STUFF IF  POSSIBLE MY  HEAD HURTS SMH */}


import Head from 'next/head';

import dynamic from 'next/dynamic';
import { useEffect,useState } from 'react';
import Monthlyincident, {AverageResponse, SafetyHotspots, Safetyhotspots} from './chart';


const Chart = dynamic(() => import('./chart'), { ssr: false });


export default function Dashboard() {
  const [chartWidth, setChartWidth] = useState(800); 
  const Incident = [
    { name: 'Jan', incidents: 150},
    { name: 'Feb', incidents: 500},
    { name: 'Mar', incidents: 600},
    { name: 'Apr', incidents: 160},
    { name: 'May', incidents: 500},
    { name: 'Jun', incidents: 600},
    { name: 'Jul', incidents: 289},
    { name: 'Aug', incidents: 245},
    { name: 'Sep', incidents: 365},
    { name: 'Oct', incidents: 60},
    { name: 'Nov', incidents: 100},
    { name: 'Dec', incidents: 140},

  ];

  const response = [
    { name: 'Jan', incidents: { hours: 1 , minutes: 30  }},
    { name: 'Feb', incidents: { hours: 2 , minutes: 50  } },
    { name: 'Mar', incidents: { hours: 3 , minutes: 40  }},
    { name: 'Apr', incidents: { hours: 1 , minutes: 48  }},
    { name: 'May', incidents: { hours: 2 , minutes: 58  }},
    { name: 'Jun', incidents: { hours: 1 , minutes: 39  }},
    { name: 'Jul', incidents: { hours: 1 , minutes: 10  }},
    { name: 'Aug', incidents: { hours: 1 , minutes: 0   }},
    { name: 'Sep', incidents: { hours: 1 , minutes: 39  }},
    { name: 'Oct', incidents: { hours: 2 , minutes: 20  }},
    { name: 'Nov', incidents: { hours: 1 , minutes: 31  }},
    { name: 'Dec', incidents: { hours: 1 , minutes: 39  }},

  ];

  const Safetyhotspot = [
    { name: 'Diversion Road', incidents: 150},
    { name: 'Plaza Rizal St.', incidents: 50},
    { name: 'Infante Flyover', incidents: 300},
    { name: 'Ungka  Flyover', incidents: 120},
    { name: '12 General Luna St.', incidents: 130},
    { name: 'North Baluarte', incidents: 50},
    { name: 'Molo Plaza', incidents: 300},
    { name: 'Quintin Salas', incidents: 245},
    { name: 'Iloilo Coastal Capiz Rd', incidents: 365},
    { name: 'Mandurriao', incidents: 60},
    { name: 'Iznart St, Iloilo City Proper', incidents: 100},
  ];



  useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth * 0.8);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>SafeCity Dashboard</title>
      </Head>
      <div className="min-h-screen bg-gray-200 p-6">

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">SafeCity Dashboard</h1>
        </header>

        {/* Overview Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="p-4 bg-white rounded shadow">Total Incidents This year
            {/* Dynamically calculate total incidents */}
    <p className="text-2xl font-bold text-gray-900">
      {Incident.reduce((total, item) => total + item.incidents, 0)}
    </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Most Common Incident</h2>
            <p className="text-2xl font-bold text-gray-900">Car Collision</p>
          </div>
          {/*Automatically changes result based on data  provided on the charrt for average rersponse time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
  <div className="p-4 bg-white rounded shadow lg:col-span-2">
    <h2 className="text-gray-600 text-sm">Average Response Time</h2>
    <p className="text-2xl font-bold text-gray-900">
      {
        (() => {
          const totalMinutes = response.reduce((total, item) => total + (item.incidents.hours * 60 + item.incidents.minutes), 0);
          const averageMinutes = Math.floor(totalMinutes / response.length);
          const hours = Math.floor(averageMinutes / 60);
          const minutes = averageMinutes % 60;
          return `${hours} hr${hours !== 1 ? 's' : ''} and ${minutes} Minute${minutes !== 1 ? 's' : ''}`;
        })()
      }
    </p>
  </div>
</div>
{/*End */}

          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Safety Hotspot</h2>
            <p className="text-2xl font-bold text-gray-900">Iloilo Coastal Capiz Rd</p>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Incidents</h2>
          <div className="overflow-x-auto bg-white rounded shadow p-4">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-2 px-4">Type</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Replace with dynamic data */}
                <tr>
                  <td className="py-2 px-4">Car Collision</td>
                  <td className="py-2 px-4">December 05, 2024</td>
                  <td className="py-2 px-4">El 98 St, Jaro, Iloilo City, Iloilo</td>
                  <td className="py-2 px-4">Resolved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Emergency Response Times Chart */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Number of Incidents Every Month</h2>
          <div className="bg-white rounded shadow p-4">
            {/* Use the Chart component here */}
            <Monthlyincident data={Incident}  chartWidth={chartWidth}/>
          </div>
          {/**/}
          <div className="mt-4">
            <div className="text-sm text-gray-700">
              <span className="inline-block w-4 h-4 mr-2" style={{ backgroundColor: '#8884d8' }}></span>
              <strong>Purple Line</strong>: Number of Incidents
            </div>
          </div>
          
        </section>

        {/* Trends Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Average Response Time</h2>
          <div className="bg-white rounded shadow p-4">
            <AverageResponse data = {response} />
          </div>
        </section>

        {/* Safety Map */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Safety Hotspots this year</h2>
          <div className="bg-white rounded shadow p-4">
            <SafetyHotspots data={Safetyhotspot} />
            
          </div>
        </section>
      </div>
    </>
  );
}