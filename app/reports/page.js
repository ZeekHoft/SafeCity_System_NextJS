"use client"

import React, { use } from 'react';
import Form from 'next/form'
import { useState } from 'react';
import Link from 'next/link';
import ReportHistory from '../report_history/page';


function Blog() {
  const [descriptionValue, setDescription] = useState("")
  const [locationValue, setLocation] = useState("")
  const [emergencyValue, setEmergency] = useState("Choose Emergency Category")
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['Geological', 'Meteorological', 'Biological',
    'Hazards', 'Human-made'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setEmergency(language);
    setIsOpen(false);
  };


  const sendData = (FormData) => {
    console.log(descriptionValue, "description")
    console.log(locationValue, "location")
    console.log(emergencyValue, "emergency")


  }
  return (
    <>
      <div className="py-2 px-12">
        <h1 className="text-4xl border-b-4">History Reports For Emergencies</h1>
      </div>

      <div className="min-h-screen flex justify-center items-center p-4">

        <div className="bg-blue-500 p-8 w-full max-w-8xl rounded-lg max-h-lg">




          <div className="grid grid-cols-2 gap-4">
            <Form >
              <h1 className="text-2xl font-bold text-white underline mb-4"> Emergency Description</h1>
              {/* {descriptionValue} */}

              <textarea name='Description' onChange={(description) => setDescription(description.target.value)}
                id="message" rows="6" className="text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Description...">
              </textarea>

              <div className="py-8 row-span-2 col-span-2 py-4 text-2xl font-bold text-white underline mb-4 ">Location of Emergency</div>

              <input name='Location' onChange={(location) => setLocation(location.target.value)}
                type="text" placeholder="Location..." className="text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500" />


              <div name="dropdown area">

                <div className="py-8 row-span-2 col-span-2 py-4 text-2xl font-bold text-white underline mb-4 ">Type of Emergency</div>
                {/* 
            <details name='Emergency' onChange={(location) => setEmergency(location.target.value)}
              className="dropdown text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <summary className="btn m-1">open or close</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details> */}


                <button
                  type="button"
                  className="dropdown text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onClick={toggleDropdown}
                >
                  {emergencyValue}
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div


                    className="dropdown text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div name='Emergency' onChange={(location) => setEmergency(location.target.value)}

                      className="py-1">
                      {languages.map((language, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2
                                               text-lg text-white
                                               hover:bg-gray-100"
                          onClick={() => handleSelect(language)}
                        >
                          {language}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className=" pt-6 row-span-2 col-span-2 text-2xl font-bold text-white underline ">Image of Emergency</div>
                <input type="file" className=" file-input file-input-bordered file-input-secondary w-full max-w-xs" />





                <div className="row-span-2 pt-6 flex justify-end">


                  <Link href={{
                    pathname: "/report_history",
                    query: {
                      location: `Location: ${locationValue}`,
                      description: `Description: ${descriptionValue}`,
                      emergency: `Emergency: ${emergencyValue}`

                    }


                  }}><button type="button" onClick={sendData} disabled={isLoading}
                    className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4
                  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm
                  px-5 py-2.5 text-center me-2 mb-2 ">
                      {isLoading && <spand>Adding report...</spand>}
                      {!isLoading && <span>Send Report</span>}

                    </button></Link>






                </div>
              </div>
            </Form>







            <div className='pt-12'>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800  ">Instructions  For Emergency Reports</h2>
                {/* <p className="text-3xl font-semibold text-gray-800  "> emergency {emergencyValue}</p> */}
                <br>
                </br>
                <ul className="text-2xl text-gray-800 tracking-wide " >
                  <ol>1. Once the Emergency has been taken care of follow the Prcedures below</ol>
                  <ol>2. Take a picture of the Emergency</ol>
                  <ol>3. Write a Detailed Description of what had happend</ol>
                  <ol>4. Upload the image taken and send it to us so that we can store it in our reports</ol>

                </ul>

                <br>
                </br>

                <h2 className=" text-3xl font-semibold text-gray-800 ">Rules for Reporting Emergencies: A Guide to Responsible Reporting</h2>

                <ul className="p-4 text-2xl text-gray-800 list-outside list-disc ml-6 p-7 tracking-wide" >
                  <li>Legal Penalties: False reporting can lead to fines, imprisonment, or both.</li>
                  <li>Civil Liability: You may be held liable for any damages or losses resulting from a false report.</li>
                  <li>Tarnished Reputation: False reporting can damage your credibility and reputation.</li>
                </ul>
              </div>



            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default Blog;