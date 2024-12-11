import React from "react";

const data = [
    {
        id: "0",
        title: "Alert: Near Volcanic Eruption",
        details:
            "A volcanic eruption has occurred near the area. Wearing masks are adviced to avoid inhalation of ashfall.",
        date: "12/11/2024",
    },
    {
        id: "1",
        title: "Car Accident",
        details:
            "A collision between a motorcycle and jeepney. Please be adviced to follow traffic rules for your safety.",
        date: "12/5/2024",
    },
    {
        id: "2",
        title: "Heavy Rainfall",
        details:
            "The recent typhoon has brought heavy rainfall and strong winds. Residents affected should stay indoors and prepare for evacuation when needed. Flooding may occur.",
        date: "11/29/2024",
    },
    {
        id: "3",
        title: "Recent Robbery",
        details:
            "There was a robbery that happened last night at 10pm. Please report when suspect is spotted.",
        date: "11/27/2024",
    },
];

function generateList() {
    var list = [];
    data.forEach((notif) => {
        list.push(
            <li className="pb-4" key={notif["id"]}>
                <div className="flex items-center space-x-6">
                    <div className="flex-1 min-w-0">
                        <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                            {notif["title"]}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {notif["details"]}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {notif["date"]}
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
