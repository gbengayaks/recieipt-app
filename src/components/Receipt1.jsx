import React, {useState} from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import FinalReceipt from "./FinalReceipt";

const Receipt1 = () => {
  const [submittedData, setSubmittedData] = useState(null);
  
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      receiptt: "RECEIPT",
    }
  });

  const {fields, append, remove} = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least one item"
    }
  });

  const calculateProduct = (index) => {
    const quantity = fields[index]?.quantity || 0;
    const rate = fields[index]?.rate || 0;
    return quantity * rate;
  };

  const onSubmit = (data) => {
    // Handle form submission, data will contain the uploaded image

    setSubmittedData(data);
  };


  return (
    <div>
      {submittedData ? (
        <FinalReceipt formData={submittedData} />
      ) : (
      <form onSubmit={handleSubmit(onSubmit)}>            
        <div className='container grid grid-cols-12'>
          <div className='m-2 col-span-12 md:col-span-10 border-1 border border-gray-600'>
                <div className='mx-auto p-5'>
                  <div className='flex flex-col md:flex-row justify-between'>
                      <div className=''>
                        <div className='mx-auto w-60 h-50 border-2 rounded-md bg-gray-400 md:w-50 md:h-60 md:mx-0'>
                          
                          <input {...register("file", {
                                required: "logo is required",
                              })} 
                              type="file"  
                              id='file'
                              className= "pb-10 invisible" 
                          />
                          <label className='p-5 text-2xl' type='file' htmlFor="file">+ Add Your Logo </label>
                        </div>
                        
                          <div className='mt-10 flex flex-col gap-y-3'>
                              <textarea {...register("whofrom")} className='w-full text-sm p-2 border border-1 border-gray-400 rounded md:w-64' placeholder='Who is this invoice from? (required)' cols="20" />
                              <div className='md:flex gap-4 mt-2'>
                                  <div className='mb-2 md:grid gap-y-3'>
                                    <label htmlFor="billto">Bill to</label>
                                        <textarea {...register("billto")} className='w-full pl-2 border border-1 border-gray-400 rounded md:w-48' cols="20" />
                                  </div>

                                  <div className='mb-2 md:grid gap-y-3'>
                                    <label htmlFor="shipto">Ship to</label>
                                        <textarea {...register("shipto")} className='w-full pl-2 border border-1 border-gray-400 rounded md:w-48' cols="20" /> 
                                    </div>
                              </div> 
                          </div>
                      </div>
                      <div className='grid justify-items-end'>
                        <div className="flex flex-col justify-end gap-y-2 mb-4">
                      <input
                        {...register("receiptt")}
                        type="text"
                        className="w-full md:w-96 text-xl font-semibold text-end rounded p-2 border-1 border border-gray-400"
                        placeholder="Receipt"
                      />
                      <div className="flex justify-end">
                        <input
                          {...register("tag")}
                          className="w-8 p-1 bg-gray-300 rounded-l-sm border-1 border border-gray-400"
                        />
                        <input
                          {...register("receiptno")}
                          type="text"
                          className="w-32 p-1 rounded-r-sm border-1 border border-gray-400"
                          placeholder='receipt number'
                        />
                      </div>
                    </div>
                          <div className='grid justify-items-end gap-y-3 mb-3'>
                              <div className='flex gap-2'>
                                  <label className='text-sm' htmlFor="">Date</label>
                                  <input {...register("ddate")} type="date" className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                              </div>
                              <div className='md:flex gap-2'>
                                  <label className='text-sm' htmlFor="">Payment Terms</label>
                                  <input {...register("paymentterms")} type="text" className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400'/>
                              </div>
                              <div className='flex gap-2 '>
                                  <label className='text-sm' htmlFor="">Due Date</label>
                                  <input {...register("duedate")} type="date" className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' placeholder='mm/dd/yyy' />
                              </div>
                              <div className='flex gap-2'>
                                  <label className='text-sm' htmlFor="">PO Number</label>
                                  <input {...register("ponumber")} type="text" className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400' />
                              </div>
                          </div>      
                      </div>
                  </div> 
                  <div className='my-5'>
                    <ul className='bg-blue-600 text-white p-2 rounded-md flex justify-between'>
                        <div className='flex justify-start pl-5'>
                            <li>Item</li>
                        </div>
                        <div className='invisible h-7 md:flex gap-x-10 md:visible'>
                            <li className='px-2'>Quantity</li>
                            <li className='px-2'>Rate</li>
                            <li className='px-2'>Amount</li>
                            <li className='px-2'>Delete</li>
                        </div> 
                    </ul>
                    {fields.map((field, index) => {
                    return ( 
                        <div className='md:flex gap-4 px-4' key={field.id}>
                          <input 
                            {...register(`cart.${index}.description`)} 
                            className='w-full p-2 md:p-2 mt-4 md:w-full border border-1 border-gray-600' 
                            type="text" 
                            placeholder="Description of service and product . . . ."
                          />
                          <input 
                            {...register(`cart.${index}.quantity`)} 
                            className='w-16 p-2 md:p-2 mt-4 border border-1 border-gray-600 rounded'
                            defaultValue={field.quantity}
                            type="number" 
                          />
                            <span id='currency' className='px-2 md:mt-5 md:px-1'>$</span>
                            <input 
                              {...register(`cart.${index}.rate`)} 
                              className='w-20 p-2 md:mt-4 border border-1 border-gray-600 rounded' 
                              defaultValue={field.rate}
                              type="number"                   
                            />
                            <span id='currency' className='px-2 md:mt-5 md:px-1'>$</span>
                            <input  
                              {...register(`cart.${index}.amount`)} 
                              className='w-20 p-2 mr-3 md:mt-4' 
                              value={calculateProduct(index)}
                              type="number" 
                              readOnly
                            />
                            <button className='text-white bg-red-800 p-2 mt-4' type='button' onClick={() => remove(index)}>X</button>
                        </div>)
                        })}

                        <div className='rounded-md my-3'>
                          <button type='button' onClick={() => append({
                            description: '',
                            quantity: '',
                            rate:''
                              })} 
                            className='text-white rounded text-xs border bg-blue-600 p-2 px-3'>
                            ADD NEW ITEM
                          </button>
                        </div> 
                        <p className='text-red-800 text-center text-xl'>{errors.cart?.root?.message}</p>      
                     <div>
                    <label htmlFor="notes">Notes</label>
                    <div className='my-2'>
                      <textarea {...register("notes")} className='w-full border border-1 border-gray-400 rounded-sm text-xs p-1 md:w-80' cols="20" rows="3" placeholder='Notes - any relevant information not already covered' />
                    </div>
                    <label htmlFor="terms">Terms</label>
                    <div className='mt-2'>
                      <textarea {...register("terms")} className='w-full border border-1 border-gray-400 rounded-sm text-xs p-1 md:w-80' cols="30" rows="3"  placeholder='terms and conditions - late fees, payment method, delivery schedule' />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-span-12 md:col-span-2 m-2'>
            <p className='text-sm'>Select Currency: </p>
            <div>
              <select {...register("currency")} className='w-full text-xs p-2 border border-gray-400 rounded my-3 md:w-44' >
                <option value="$">United States Dollar</option>
                <option value="N">Nigeria Naira</option>
              </select>
            </div>
            <p className='text-sm'>Select Type: </p>
            <div>
              <select {...register("stype")} className='w-full text-xs p-2 border border-gray-400 rounded my-3 md:w-44' >
                <option value="RECEIPT">Receipt</option>
              </select>
            </div>
           
            <div className='flex justify-center'>
              <button type='submit' className='text-sm text-white p-4 w-44 bg-green-700 hover:bg-green-400 rounded mt-2'>SUBMIT</button>
            </div>
          </div>
        </div>
      </form>  
      )};
      
    </div> 
  )
}

export default Receipt1