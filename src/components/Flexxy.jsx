import React from 'react'

const Flexxy = () => {
  return (
    <div>
        <div class="flex flex-row gap-x-2 p-5">
            {/* <div class="basis-1/4 bg-blue-400">01</div> */}
            {/* <div className="basis-1/4 bg-green-400 flex justify-center p-3"><textarea name="" id="" cols={40} rows="{2}" /></div>
            <div className="basis-1/4 bg-red-400 flex justify-center p-3"><textarea name="" id="" cols={40} rows="{2}" /></div> */}
        </div>

        <div className="grid h-screen place-items-center">Centered using Tailwind Grid</div>
    </div>
  )
}

export default Flexxy