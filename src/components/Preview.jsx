import React from 'react';

const Preview = ({ data }) => {
  
  return (
    <div>
      <h2>Form Data</h2>
      {data.file && (
        <div>
          <img src={URL.createObjectURL(data.file[0])} alt="Uploaded file" />
        </div>
      )}
         <h2>Form Data</h2>
      <p>Company Name: {data.whofrom}</p>
      <p>Client: {data.billto}</p>
      <p>location: {data.shipto}</p>
      <p>Date: {data.ddate}</p>
      <p>Payment terms: {data.paymentterms}</p>
      <p>Due Date: {data.duedate}</p>
      <p>PO Number: {data.ponumber}</p>
      <ul>
            {data.cart.map((item, index) => (
              <li key={index}>
                Description: {item.description}, Quantity: {item.quantity}, Rate: {item.rate}, Amount: {item.amount}
              </li>
            ))}
          </ul>
    </div>
  );
 };

// const Preview = () => {
//   const location = useLocation();
//   const jsonData = location.state ? location.state.jsonData : null;
//   return (
//     <div>
//         <h2>Display JSON data</h2>
//           {jsonData && (
//           <pre>{jsonData}</pre>
//         )}
       
//     </div>
//   )
// }

export default Preview