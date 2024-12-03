import React from "react";

const Notifications = () => {
  return <div className="p-12">

    <h1 className="text-4xl border-b-4">Notifications</h1>
    <p className="">List of notifications</p>
    <ul className="m-5 p-3 rounded-md border-2 border-red-500">
      <li className="pb-4">
        <div className="flex items-center space-x-4">
        <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               notification 1
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               details
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            date
         </div>
        </div>
      </li>
      <li>notification 2</li>
      <li>notification 3</li>
    </ul>
  </div>;
};

export default Notifications;
// blue 500, red 500