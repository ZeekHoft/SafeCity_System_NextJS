import React from 'react';

function Blog() {
  return (
    


    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-gradient-to-r from-blue-500 to-red-500 p-8 w-full max-w-4xl rounded-lg">

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
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Here..."
            ></textarea>
            
            <h1 className="py-4 text-3xl font-bold text-white underline mb-4">
          Image of Emergency
        </h1>
      <input
  type="file"
  className="p-2 file-input file-input-bordered file-input-secondary w-full max-w-xs" />
          </div>




          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Instructions  For Emergency</h2>
            <p className="text-gray-600">
              This is some random text to fill the space beside the text area.
              You can add more content here as needed, such as additional information
              or instructions for the user.
               This is some random text to fill the space beside the text area.
              You can add more content here as needed, such as additional information
              or instructions for the user.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Blog;
