import React from "react";


export default function ReportHistory(context) {
  const param_loc = context.searchParams
  const param_des = context.searchParams
  const param_type = context.searchParams
  return (
    <>
      <div className="p-12">
        <h1 className="text-4xl border-b-4">History Reports For Emergencies</h1>
      </div>
      <h1>{param_loc.location ? param_loc.location : ''}</h1>
      <h1>{param_des.description ? param_des.description : ''}</h1>
      <h1>{param_type.emergency ? param_type.emergency : ''}</h1>
    </>

  )
}