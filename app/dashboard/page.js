{/*NOTE:STILL NOT FINISHED, NEED TO ADD MORE STUFF LIKE CHARTS AND STUFF IF  POSSIBLE MY  HEAD HURTS SMH */}

import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>SafeCity Dashboard</title>
      </Head>
      <div className="min-h-screen bg-gray-100 p-6">

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">SafeCity Dashboard</h1>
        </header>

        {/* Overview Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Total Incidents</h2>
            <p className="text-2xl font-bold text-gray-900">--</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Most Common Incident</h2>
            <p className="text-2xl font-bold text-gray-900">--</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Average Response Time</h2>
            <p className="text-2xl font-bold text-gray-900">--</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-600 text-sm">Safety Hotspot</h2>
            <p className="text-2xl font-bold text-gray-900">--</p>
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
                  <td className="py-2 px-4">--</td>
                  <td className="py-2 px-4">--</td>
                  <td className="py-2 px-4">--</td>
                  <td className="py-2 px-4">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

         {/*Response Times*/}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Response Times</h2>
          <div className="bg-white rounded shadow p-4">
            <p>Chart Place (use a chart library)</p>
          </div>
        </section>

        {/* Trends */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Incident Trends</h2>
          <div className="bg-white rounded shadow p-4">
            <p>another place for the Chart  (use a chart library)</p>
          </div>
        </section>

        {/* Safety Map */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Safety Hotspots</h2>
          <div className="bg-white rounded shadow p-4">
            <p>Map Placeholder (use Leaflet.js or Google Maps)</p>
          </div>
        </section>
      </div>
    </>
  );
}

