// import React from 'react'

// function App() {
//   return (
//     <div className="w-full h-screen bg-cyan-500 p-4">
//       <div className="w-60 h-32 rounded-xl bg-purple-600 p-6 text-white">
//         <h2>HELLLOOOOO</h2>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import PRO from './PRO';

function App() {
  var[a,b]=useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* <h1>{a}</h1> 
      <button onClick={()=>b(a+1)} className="px-3 py-1 bg-yellow-500 rounded-md text-xs text-white">click</button> */}
      <PRO naam="10000" data={{age:20, name:"vatsal"}}/>
    </div>
  )
}

export default App
