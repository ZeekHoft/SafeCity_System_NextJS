import React from "react";
import styles from "./notif.module.css";





const ReportHistory = (context) => {
  const param_loc = context.searchParams.location
  const param_des = context.searchParams.description
  const param_type = context.searchParams.emergency


  console.log(param_loc, "this is the location beep boop bop")
  const data2 = [
    {
      id: 1,
      location: "Brazil",
      description: "Was walking on the beach then i saw a big shadow heading towards us, it was a tsunami. I dropped my phone while  I was on a call.",
      emergency: "Geological",
    },
    {
      id: 2,
      location: "Philippines",
      description: "I was in a call with my friend then he just hung up, after that my phone got stolen, I was gonna  recycle it since the battery was about to burn out.",
      emergency: "Human-made",
    },
    {
      id: 3,
      location: "Philippines",
      description: "I got a phone (not gonna explain where) it was heating up and now my apartment burned down...",
      emergency: "Hazards",
    },
    {

      id: 4,
      location: param_loc ? param_loc : '',
      description: param_des ? param_des : <div className={styles.label}>Waiting for more reports...</div>,
      emergency: param_type ? param_type : ''

    }];


  function generateList() {
    var list = [];
    data2.forEach((notif) => {
      list.push(


        <li className={styles.notificationItem} key={notif["id"]}>
          <div className={styles.label}>{notif["type"]}</div>

          <div className={styles.verticalLine}>
            <time className={styles.date}>{notif["location"]}</time>
            <div className={styles.title}>{notif["description"]}</div>
          </div>
          <div className={styles.details}>{notif["emergency"]}</div>
        </li>

      );
    });
    return list;
  }



  return (
    <>
      <div className="px-24 py-12">
        <h1 className="text-4xl border-b-4">History Reports For Emergencies</h1>
      </div>
      {/* <h1>{param_loc.location ? param_loc.location : ''}</h1>
      <h1>{param_des.description ? param_des.description : ''}</h1>
      <h1>{param_type.emergency ? param_type.emergency : ''}</h1> */}

      <ul className="my-4 px-28 py-6">{generateList()}</ul>


    </>

  );
};

export default ReportHistory;


