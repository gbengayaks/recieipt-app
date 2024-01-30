import React from 'react'

const Flexxy = () => {
  return (
    <div>
        <div class="flex flex-row gap-x-2 p-5- h-screen">
            <div class="basis-1/4 bg-blue-400">01</div> 
            <div className="basis-1/4 bg-green-400 flex justify-center p-3"><textarea name="" id="" cols={40} rows="{2}" /></div>
            <div className="basis-1/4 bg-red-400 flex justify-center p-3"><textarea name="" id="" cols={40} rows="{2}" /></div> 
        </div>

        <div className="grid h-screen place-items-center">Centered using Tailwind Grid</div>

        ................
        <div className='col-start-1 col-end-13 md:col-start-1 md:col-end-9 md:col-span-9 md:flex p-2 bg-green-300'>
            <div className='w-96 h-48 md:w-44 md:h-32 border-2 rounded bg-gray-400 p-5'>
              <label className='text-2xl' htmlFor="file">+ Add Your Logo </label>
              <input type="file" className='p-4 invisible' />
            </div>
            <div className='md:col-end-10 md:col-start-6 gap-y-2 my-4 bg-blue-300'>
                  <input className='w-full my-2 text-end text-3xl p-2 border border-gray-400 rounded' type="text" placeholder='RECEIPT' />
                  <div className='flex justify-end rounded'><label className='w-8 flex justify-center items-center bg-gray-300 ' htmlFor="">#</label><input className='w-60 p-3 rounded' type="text" /></div>
                  {/* <div className='flex justify-end'><h3 className='w-8 p-3 bg-gray-300 rounded-l-sm border-1 border border-gray-400'>#</h3><h3 className='w-60 p-1 rounded-r-sm border-1 border border-gray-400'></h3></div> */}
            </div>
        </div>
        <div className='bg-pink-300 col-start-1 col-end-13 md:col-end-13 md:col-span-3 p-2'>
          <label className='text-sm' htmlFor="">Select Currency: </label>
              <div>
                <select className='w-full text-xl p-2 my-3 border border-gray-400 rounded  '>
                  <option className='' value="$">United States Dollar</option>
                  <option value="N">Nigeria Naira</option>
                </select>
              </div>
              <label className='text-sm' htmlFor="">Select Type: </label>
              <div>
                <select className='w-full text-xl p-2 border border-gray-400 rounded my-3' name="" id="">
                  <option value="">Receipt</option>
                </select>
              </div>
        </div> 



        <div className='grid justify-items-end'>
                          <div className='flex flex-col gap-y-2 mb-4'>
                              <h1 className='w-full md:w-64 text-xl rounded-md flex justify-end p-2 border-1 border border-gray-400'>Receipt</h1>
                              <div className='flex justify-end'><h3 className='w-8 p-1 bg-gray-300 rounded-l-sm border-1 border border-gray-400'>#</h3><h3 className='w-32 p-1 rounded-r-sm border-1 border border-gray-400'></h3></div>
                          </div>
                          <div className='grid justify-items-end gap-y-3 mb-3'>
                              <div className='flex gap-2'>
                                  <label className='text-sm' htmlFor="">Date</label>
                                  <input {...register(`cart.${index}.ddate`)} type="date" className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                              </div>
                              <div className='md:flex gap-2'>
                                  <label className='text-sm' htmlFor="">Payment Terms</label>
                                  <input {...register(`cart.${index}.paymentterms`)} type="text" className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400'/>
                              </div>
                              <div className='flex gap-2 '>
                                  <label className='text-sm' htmlFor="">Due Date</label>
                                  <input {...register(`cart.${index}.duedate`)} type="date" className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                              </div>
                              <div className='flex gap-2'>
                                  <label className='text-sm' htmlFor="">PO Number</label>
                                  <input {...register(`cart.${index}.ponumber`)} type="text" className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400' />
                              </div>
                          </div>      
                      </div>
    </div>
  )
}

export default Flexxy