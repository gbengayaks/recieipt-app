import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  const jsonData = location.state ? location.state.jsonData : null;
  return (
    <div>
        <h2>Display JSON data</h2>
          {jsonData && (
          <pre>{jsonData}</pre>
        )}
       
    </div>
  )
}

export default Preview