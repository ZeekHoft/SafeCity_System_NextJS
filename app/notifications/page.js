import React from "react";
import styles from "./notif.module.css";

const data = [
    {
        id: 0,
        title: "Alert: Near Volcanic Eruption",
        details:
            "A volcanic eruption has occurred near the area. Wearing masks are adviced to avoid inhalation of ashfall.",
        date: "12/11/2024",
    },
    {
        id: 1,
        title: "Car Accident",
        details:
            "A collision between a motorcycle and jeepney. Please be adviced to follow traffic rules for your safety.",
        date: "12/5/2024",
    },
    {
        id: 2,
        title: "Heavy Rainfall",
        details:
            "The recent typhoon has brought heavy rainfall and strong winds. Residents affected should stay indoors and prepare for evacuation when needed. Flooding may occur.",
        date: "11/29/2024",
    },
    {
        id: 3,
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
            <li className={styles.notificationItem} key={notif["id"]}>
                <div className={styles.label}>{notif["type"]}</div>

                <div className={styles.verticalLine}>
                    <time className={styles.date}>{notif["date"]}</time>
                    <div className={styles.title}>{notif["title"]}</div>
                </div>
                <div className={styles.details}>{notif["details"]}</div>
            </li>
        );
    });
    return list;
}

const Notifications = () => {
    return (
        <div className="px-24 py-12">
            <h1 className="text-4xl font-bold border-b-4 border-blue-200">
                Notifications
            </h1>
            <p className="text-slate-400">
                Local authorities and emergency responders are automatically
                notified based on incident type and priority.
            </p>
            <ul className="my-4 px-28 py-6">{generateList()}</ul>
        </div>
    );
};

export default Notifications;
