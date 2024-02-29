import React from 'react'

const FinalReceipt = ({ formData }) => {

  console.log("new data :",  formData);

  return (
    <div className='m-10'>
        <div className='flex justify-between'>
          <div className='flex'>
            { formData.file && ( 
              <div className='mx-auto w-60 h-60 border-2 rounded-md md:w-60 md:h-60 md:mx-0'>
                  <img className='object-cover h-60 w-60' src={URL.createObjectURL(formData.file[0])} alt="Uploaded file" />
              </div> 
              )}
              <div className='p-5'>
                <p className='w-full text-xl font-semibold'>{formData.whofrom}</p>
              </div>
          </div>
          
          <div className=''>
            <h1 className='text-3xl font-bold'>{formData.receiptt}</h1> 
            <p>{formData.tagg}{formData.receiptno}</p>
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <div className='text'>
            <p>Bill To: <span className='ml-3'>{formData.billto} </span></p>
          </div>
          <div>
          <div className='flex '>
            <div className='grid justify-items-end mr-10 gap-y-2'>
              <p>Date : </p>
              <p>Payment Terms : </p>
              <p>Due Date :</p>
              <p>P O Number : </p>
            </div>
            <div className='grid justify-items-end gap-y-2'>
              <p>{formData.ddate}</p>
              <p>{formData.paymentterms}</p>
              <p>{formData.duedate}</p>
              <p>{formData.ponumber}</p>
            </div>
          </div>
          <div className='p-2 mt-2 bg-slate-300 rounded'>Balance Due: <span className='ml-10 text-2xl font-semibold'>20000</span></div>
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
              </div> 
          </ul>
          {formData.cart.map((item, index) => (
          <div className='md:flex gap-4 px-2'>
              <p className='w-full md:p-2 mt-4 md:w-full'>{item.description}</p>
              <p className='w-20 md:p-2 mt-4'>{item.quantity}</p>
              <p className='w-20 md:p-2 mt-4'>{item.rate}</p>
              <p className='w-20 md:p-2 mt-4'>{item.amount}</p>
          </div> 
          ))}               
        </div>
        <div className='mt-10'>
          <div className='my-5'>
            <p>Notes</p>
            <h1>This is a good product and worthy of its price</h1>
          </div>
          
          <div>
            <p className=''>Terms </p>
            <h1>Good and serices taking in good condition coulg not be refunded</h1>
          </div>
        </div>
    </div>
  )
}

export default FinalReceipt




// import React from 'react';

// const FinalReceipt = () => {
//   return (
//     <div className='m-10'>
//       <div className='flex justify-between'>
//         <div className='flex my-5'>
//           <div className='mx-auto w-40 h-40 border-2 rounded-md bg-gray-200 md:w-40 md:h-40 md:mx-0'>
//             <img className='object-cover h-40 w-40' alt="Uploaded file" />
//           </div> 
//           <div className='p-5'>
//             <h1 className='text-4xl'>TOSKO KLOTHE KLASS</h1>
//           </div>
//         </div>
        
//         <div className=''>
//           <h1 className='text-3xl font-bold'>RECEIPT</h1> 
//           <p>#1010</p>
//         </div>
//       </div>
      
//       <div className='flex justify-between'>
//         <div className='tex'>
//           <p>Bill To: <span className='ml-3'> MRS BADEJO ONAKOYA</span></p>
//         </div>
//         <div>
//           <div className='flex '>
//             <div className='grid justify-items-end mr-10 gap-y-2'>
//               <p>Date : </p>
//               <p>Payment Terms : </p>
//               <p>Due Date :</p>
//               <p>P O Number : </p>
//             </div>
//             <div className='grid justify-items-end gap-y-2'>
//               <p>20024-02-22</p>
//               <p>Cash</p>
//               <p>2024-02-22</p>
//               <p>2024</p>
//             </div>
//           </div>
//           <div className='p-2 mt-2 bg-slate-300 rounded'>Balance Due: <span className='ml-10 text-2xl font-semibold'>20000</span></div>
//         </div>
//       </div>
      
//       <div className='my-5'>
//         <ul className='bg-blue-600 text-white p-2 rounded-md flex justify-between'>
//           <div className='flex justify-start pl-5'>
//             <li>Item</li>
//           </div>
//           <div className='invisible h-7 md:flex gap-x-10 md:visible'>
//             <li className='px-2'>Quantity</li>
//             <li className='px-2'>Rate</li>
//             <li className='px-2'>Amount</li>
//           </div> 
//         </ul>
      
//         <div className='md:flex gap-4 px-2' >
//           <input  className='w-full md:p-2 mt-4 md:w-full border border-1 border-gray-600' type="text" />
//           <input   className='w-20 md:p-2 mt-4 border border-1 border-gray-600 rounded' type="" />
//           <input  className='w-20 md:mt-4 border border-1 border-gray-600 rounded' type="" />
//           <input className='w-20  md:mt-4' type="text" />
//         </div>                
//       </div>
      
//       <div className='mt-10'>
//         <div className='my-5'>
//           <p>Notes</p>
//           <h1>This is a good product and worthy of its price</h1>
//         </div>
        
//         <div>
//           <p className=''>Terms </p>
//           <h1>Good and services taking in good condition could not be refunded</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalReceipt;
