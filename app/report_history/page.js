import React from "react";


export default function ReportHistory(context) {
  const params = context.searchParams
  return (
    <>
      <h1>hellooo </h1>
      <h2>emergency in {params.name ? params.name : ''}</h2>

    </>

  )
}