import React from 'react';

function Blog() {
  return (



    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-gradient-to-r from-blue-500 to-red-500 p-8 w-full max-w-8xl rounded-lg max-h-lg">

        <h1 className="text-3xl font-bold text-white underline mb-4">
          Emergency Description
        </h1>



        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >            </label>



            <textarea
              id="message"
              rows="6"
              className="text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Type Here..."
            ></textarea>


            <div className="py-8 row-span-2 col-span-2 py-4 text-3xl font-bold text-white underline mb-4 ">Location of Emergency</div>

            <input type="text" placeholder="Type here" className="text-2xl block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />







            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="py-8 row-span-2 col-span-2 py-4 text-3xl font-bold text-white underline mb-4">Image of Emergency</div>
              <input type="file" className=" file-input file-input-bordered file-input-secondary w-full max-w-xs" />


            </div>
            <div className="row-span-2 pt-6 flex justify-end"><button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4
            focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm
            px-5 py-2.5 text-center me-2 mb-2 ">SEND EMERGENCY</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800">Instructions  For Emergency Reports</h2>
            <p className="text-gray-600">
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

            </p>
          </div>







        </div>
      </div>
    </div>
  );
}

export default Blog;
