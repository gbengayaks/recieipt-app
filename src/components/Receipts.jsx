import React from 'react';
import { useForm, useFieldArray, useWatch } from "react-hook-form"

const Receipts = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  })
  return (
    <div className='container grid grid-cols-12'>
      <div className='m-2 col-span-12 md:col-span-10 border-1 border border-gray-600'>
            <div className='mx-auto p-5'>
              <div className='flex flex-col md:flex-row justify-between'>
                  <div className='w-36 h-28 border-2 rounded-md bg-gray-400'>
                    <div className=''>
                      <label className='text-sm' htmlFor="file">+ Add Your Logo </label>
                      <input type="file" className='p-4 invisible' />
                    </div>
                     
                      <div className='mt-10 flex flex-col gap-y-3'>
                          <textarea className='text-xs p-2 border border-1 border-gray-400 rounded-sm w-40 md:w-64' placeholder='Who is this invoice from? (required)' name="" cols="20" rows="" />
                          <div className='flex gap-4 mt-2'>
                              <div className='grid gap-y-3'>
                                <label htmlFor="billto">Bill to</label>
                                    <textarea className='border border-1 border-gray-400 w-40 rounded-sm' name="" cols="20"  id='billto'/>
                              </div>

                              <div className='grid gap-y-3'>
                                <label htmlFor="shipto">Ship to</label>
                                    <textarea className='border border-1 border-gray-400 rounded-sm w-40' name="" cols="20" rows="" id='shipto' /> 
                                </div>
                          </div> 
                      </div>
                  </div>
                  <div className='grid justify-items-end'>
                      <div className='flex flex-col gap-y-2 mb-4'>
                          <h1 className='w-32 md:w-64 text-xl rounded-md flex justify-end p-2 border-1 border border-gray-400'>Receipt</h1>
                          <div className='flex justify-end'><h3 className='w-8 p-1 bg-gray-300 rounded-l-sm border-1 border border-gray-400'>#</h3><h3 className='w-32 p-1 rounded-r-sm border-1 border border-gray-400'></h3></div>
                      </div>
                      <div className='grid justify-items-end gap-y-3 mb-3'>
                          <div className='flex gap-4'>
                              <label className='text-sm' htmlFor="">Date</label>
                              <input type="date" className='text-sm p-1 rounded-sm w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                          </div>
                          <div className='flex gap-4 justify-around'>
                              <label className='text-sm' htmlFor="">Payment Terms</label>
                              <input type="text" className='p-1 rounded-sm w-44 border-1 border border-gray-400'/>
                          </div>
                          <div className='flex gap-4'>
                              <label className='text-sm' htmlFor="">Due Date</label>
                              <input type="date" className='text-sm p-1 rounded-sm w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                          </div>
                          <div className='flex gap-4'>
                              <label className='text-sm' htmlFor="">PO Number</label>
                              <input type="text" className='p-1 rounded-sm w-44 border-1 border border-gray-400' />
                          </div>
                      </div>      
                  </div>
              </div> 
              <div className='my-5'>
                <ul className='bg-blue-600 text-white p-2 rounded-md flex justify-between'>
                    <div className='flex justify-start pl-5'>
                        <li>Item</li>
                    </div>
                    <div className='flex gap-x-8 px-8 '>
                        <li className='mr-3'>Quantity</li>
                        <li className='mx-3'>Rate</li>
                        <li className='mx-3'>Amount</li>
                    </div> 
                </ul>
                <form action="">
                  <div className='flex gap-4'>
                    <input className='p-2 mt-4 border border-1 w-full border-gray-600' placeholder='Description of service and product . . . .' type="text" />
                    <input className='p-2 mt-4 border border-1 w-24 border-gray-600 rounded' placeholder='1' type="text" />
                    <input className='p-2 mt-4 border border-1 w-24 border-gray-600 rounded' placeholder='0.00' type="text" />
                    <input className='p-2 mt-4 border border-1 w-24 border-gray-600 rounded' placeholder='0.00' type="text" />
                  </div>
                <div className='rounded-md my-3'>
                  <button className='text-white rounded text-xs border bg-blue-600 p-2 px-3'>ADD NEW ITEM</button>
                </div>
              </form>
              <div>
                <label htmlFor="notes">Notes</label>
                <div className='my-2'>
                  <textarea className='border border-1 border-gray-400 rounded-sm text-xs p-1 w-80' name="" cols="20" rows="3" id='notes' placeholder='Notes - any relevant information not already covered' />
                </div>
                <label htmlFor="terms">Terms</label>
                <div className='mt-2'>
                  <textarea className='border border-1 border-gray-400 rounded-sm text-xs p-1 w-80' name="" cols="30" rows="3" id='terms' placeholder='terms and conditions - late fees, payment method, delivery schedule' />
                </div>
              </div>
              
              
              </div>
          </div>
      </div>
      <div className='col-span-12 md:col-span-2 m-2'>
        <p className='text-sm'>Select Currency: </p>
        <div>
          <select className='text-xs w-44 p-2 border border-gray-400 rounded my-3' name="" id="">
            <option value="">United States Dollar</option>
            <option value="">Nigeria Naira</option>
          </select>
        </div>
        <p className='text-sm'>Select Type: </p>
        <div>
          <select className='text-xs w-44 p-2 border border-gray-400 rounded my-3' name="" id="">
            <option value="">Receipt</option>
          </select>
        </div>
        <div className=''>
          <button className='text-xs text-white p-2 w-44 bg-blue-700 rounded mt-2'>Download Invoice</button>
        </div>

      </div>
    </div>
  )
}

export default Receipts