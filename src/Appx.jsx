import React, { useState } from 'react';
import Receipt1 from "./components/Receipt1";
import Preview from "./components/Preview";

const App = () => {
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);

    // const jsonData = JSON.stringify(data, null, 2);
    // console.log({'submit data': data});
  
  // Redirect to the display page
   //navigate('/preview', { state: {jsonData} });

  //navigate('/edit', {state: {formData: data}})
  };

  return (
    <div>
      {/* <Receipt1 onSubmit={onSubmit} />
      {formData && <Preview data={formData} />} */}

       {formData ? (
       <Preview data={formData} />
      ) : (
        <Receipt1 onSubmit={onSubmit} />
      )}
      
    </div>
  );
};

export default App;