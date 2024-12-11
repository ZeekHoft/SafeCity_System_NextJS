import React from "react";

const data = [
    {
        title: "Alert: Near Volcanic Eruption",
        details:
            "A volcanic eruption has occurred near the area. Wearing masks are adviced to avoid inhalation of ashfall.",
        date: "12/11/2024",
    },
    {
        title: "Car Accident",
        details:
            "A collision between a motorcycle and jeepney. Please be adviced to follow traffic rules for your safety.",
        date: "12/5/2024",
    },
    {
        title: "Heavy Rainfall",
        details:
            "The recent typhoon has brought heavy rainfall and strong winds. Residents affected should stay indoors and prepare for evacuation when needed. Flooding may occur.",
        date: "11/29/2024",
    },
    {
        title: "Recent Robbery",
        details:
            "There was a robbery that happened last night at 10pm. Please report when suspect is spotted.",
        date: "11/27/2024",
    },
];

function generateList() {
    var list = [];
    data.forEach((product) => {
        list.push(
            <li className="pb-4">
                <div className="flex items-center space-x-6">
                    <div class="flex-1 min-w-0">
                        <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
                            {product["title"]}
                        </p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            {product["details"]}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {product["date"]}
                    </div>
                </div>
            </li>
        );
    });
    return list;
}

const Notifications = () => {
    return (
        <div className="p-12">
            <h1 className="text-4xl border-b-4">Notifications</h1>
            <p className="">List of notifications</p>
            <ul className="m-2 p-3 rounded-md border-2 border-red-500">
                {generateList()}
            </ul>
        </div>
    );
};

export default Notifications;
// blue 500, red 500
