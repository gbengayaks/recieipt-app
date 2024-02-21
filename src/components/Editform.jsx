import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Editform = ({ formData }) => {
    console.log('new data:', formData);
   
    const { register, handleSubmit, setValue } = useForm({
         defaultValues: { // Set default values for form fields
            picture: formData.picture,
             shipto: formData.shipto,
             whofrom: formData.whofrom,
             billto: formData.billto,
             ddate: formData.ddate,
             duedate: formData.duedate,
             paymentterms: formData.paymentterms,
             ponumber: formData.ponumber,
             notes: formData.notes,
             terms: formData.terms,
             cart: formData
         }
      });

    //   const {fields, append, remove} = useFieldArray({
    //     control,
    //     name: "cart",
    //     });

    
      const onSubmit = (data) => {
        // You can perform any validation or additional processing here
        // After editing, you may want to save the changes or navigate to another page
    
        // Navigate back to the FormComponent after editing
        //navigate('/');
      };

  return (
    <div>     
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='container grid grid-cols-12'>
            <div className='m-2 col-span-12 md:col-span-10 border-1 border border-gray-600'>
                <div className='mx-auto p-5'>
                <div className='flex flex-col md:flex-row justify-center mb-5 text-red-600 font-bold'> PLEASE PREVIEW BEFORE FINAL SUBMISSION</div>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className=''>
                            <div className='mx-auto w-68 h-52 border-2 rounded-md bg-gray-400 md:w-60 md:h-40 md:mx-0'>
                                <label className='text-sm' htmlFor="file">+ Add Your Logo </label>
                                <input 
                                    {...register("picture", {
                                        required: "logo is required",
                                    })}
                                    type="file"
                                    className='p-4'
                                    
                                />
                            </div> 
                            
                            <div className='mt-10 flex flex-col gap-y-3'>
                                <textarea 
                                    {...register("whofrom", {
                                    required: "field is required",
                                    })}
                                    type="text" 
                                    placeholder='Who is this invoice from? (required)'
                                    className='w-full text-sm p-2 border border-1 border-gray-400 rounded md:w-64' cols="20" 
                                    />
                                <div className='md:flex gap-4 mt-2'>
                                    <div className='mb-2 md:grid gap-y-3'>
                                        <label htmlFor="billto">Bill to</label>
                                            <textarea {...register("billto", {
                                                required: "filed is required",
                                            })}
                                                type="text"  
                                                className='w-full pl-2 border border-1 border-gray-400 rounded md:w-48' 
                                                cols="20" />
                                        </div>

                                    <div className='mb-2 md:grid gap-y-3'>
                                        <label htmlFor="shipto">Ship to</label>
                                            <textarea 
                                            {...register("shipto", {
                                            required: "Field is required",
                                            })}
                                            type="text"
                                            className='w-full pl-2 border border-1 border-gray-400 rounded md:w-48' cols="20" /> 
                                        </div>
                                </div> 
                            </div>
                        </div>
                        <div className='grid justify-items-end'>
                            <div className='flex flex-col justify-end gap-y-2 mb-4'>
                                <input type="text" className='w-full md:w-96 text-xl font-semibold text-end rounded p-2 border-1 border border-gray-400' placeholder='Receipt' />
                                <div className='flex justify-end'>
                                <label className='w-8 p-1 bg-gray-300 rounded-l-sm border-1 border border-gray-400' htmlFor="">#</label>
                                <input type="text" className='w-32 p-1 rounded-r-sm border-1 border border-gray-400' />
                                </div>
                            </div>
                            <div className='grid justify-items-end gap-y-3 mb-3'>
                                <div className='flex gap-2'>
                                    <label className='text-sm' htmlFor="">Date</label>
                                    <input 
                                        {...register("ddate", {
                                        required: "Date to is required",
                                        })}
                                        type="date" 
                                        className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' 
                                    />
                                </div>
                                <div className='md:flex gap-2'>
                                    <label className='text-sm' htmlFor="">Payment Terms</label>
                                    <input 
                                        {...register("paymentterms")}
                                        type="text"
                                        className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400'
                                    />
                                </div>
                                <div className='flex gap-2 '>
                                    <label className='text-sm' htmlFor="">Due Date</label>
                                    <input 
                                        {...register("duedate", {
                                        required: "due date to is required",
                                        })}
                                        type="date" 
                                        className='w-72 text-sm p-2 rounded-sm md:w-44 border-1 border border-gray-400' />
                                </div>
                                <div className='flex gap-2'>
                                    <label className='text-sm' htmlFor="">PO Number</label>
                                    <input 
                                        {...register("ponumber")}
                                        type="number"
                                        className='w-72 p-2 rounded-sm md:w-44 border-1 border border-gray-400' 
                                    />
                                </div>
                            </div>      
                        </div>
                    </div> 
                     {/* <div className='my-5'>
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
                            <input defaultValue={cart.field.description} {...register(`cart.${index}.description`)} className='w-full p-2 md:p-2 mt-4 md:w-full border border-1 border-gray-600' type="text" />
                            <input defaultValue={cart.field.quantity} {...register(`cart.${index}.quantity`)} className='w-16 p-2 md:p-2 mt-4 border border-1 border-gray-600 rounded' type="number" />
                                <span id='currency' className='px-2 md:mt-5 md:px-1'>$</span>
                                <input defaultValue={cart.field.rate} {...register(`cart.${index}.rate`)} className='w-20 p-2 md:mt-4 border border-1 border-gray-600 rounded' type="number" />
                                <span id='currency' className='px-2 md:mt-5 md:px-1'>$</span>
                                <input defaultValue={cart.field.amount} {...register(`cart.${index}.amount`)} className='w-20 p-2 mr-3 md:mt-4' type="text" />
                                <button type='button' className='text-white bg-red-800 p-2 mt-4' onClick={() => remove(index)}>X</button>
                            </div>)  
                            })}
                        <div className='rounded-md my-3'>
                            <button type='button' className='text-white rounded text-xs border bg-blue-600 p-2 px-3 hover:bg-blue-400' onClick={() => append({
                                description: 'Description of service and product . . . .',
                                quantity: 1,
                                rate: 0.00,
                                amount: 0.00
                                })}>
                                ADD NEW ITEM
                            </button>
                        </div> 
                            <p className='text-red-800 text-center text-xl'>{errors.cart?.root?.message}</p>      
                        <div>
                            <label htmlFor="notes">Notes</label>
                            <div className='my-2'>
                                <textarea 
                                    {...register("notes")}
                                    type="text"
                                    className='w-full border border-1 border-gray-400 rounded-sm text-xs p-1 md:w-80' cols="20" rows="3" 
                                    placeholder='Notes - any relevant information not already covered' 
                                />
                            </div>
                            <label htmlFor="terms">Terms</label>
                            <div className='mt-2'>
                              <textarea
                                {...register("terms")}
                                    type="text" 
                                className='w-full border border-1 border-gray-400 rounded-sm text-xs p-1 md:w-80' cols="30" rows="3"  
                                placeholder='terms and conditions - late fees, payment method, delivery schedule' 
                              />
                            </div>
                        </div>
                    </div>  */}
                </div>
            </div>
            <div className='col-span-12 md:col-span-2 m-2'>
                <p className='text-sm'>Select Currency: </p>
                <div>
                    <select className='w-full text-lg p-2 border border-gray-400 rounded my-3 md:w-44 md:text-sm' >
                        <option value="$">United States Dollar</option>
                        <option value="N">Nigeria Naira</option>
                    </select>
                </div>
                <p className='text-sm'>Select Type: </p>
                <div>
                <select className='w-full text-lg p-2 border border-gray-400 rounded my-3 md:w-44 md:text-sm' >
                    <option value="RECEIPT">Receipt</option>
                </select>
                </div>
            
                <div className='flex justify-center'>
                    <button type='submit' className='text-sm text-white p-4 w-44 bg-green-700 rounded hover:bg-green-500 mt-2'>SAVE CHANGES</button>
                </div>
            </div>
            </div>
        </form>  
    </div>
  )
}

export default Editform
