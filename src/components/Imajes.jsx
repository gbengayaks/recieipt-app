import React, {useState} from 'react'

const Imajes = () => {
    const [picture, setPicture] = useState([]);
    console.log(picture)
  return (
    <div>
        <input
        type="file"
        onChange={(e) => {
          const [file] = e.target.files;
          setPicture((picture) => [...picture, file]);
        }}
      />
    </div>
  )
}

export default Imajes