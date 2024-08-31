import React, { useState } from 'react'

function PRO({naam,data}) {
  const [Toggle , setToggle] = useState(1);
  return (
    <div className='w-full h-70 bg-zinc-600 text-white'>
        {/* <h1>{naam}</h1>
        <h1>{data.age}</h1>
        <h1>{data.name}</h1>
        <h1>{Toggle}</h1> */}
        <h1 className={`${Toggle===1 ? "text-red-600":"text-blue-600"}`}>{Toggle===1?"111":"000"}</h1>
    </div>
  )
}

export default PRO