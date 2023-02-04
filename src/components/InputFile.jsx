import React, { useState } from 'react';

const ImageUpload = ({setImage}) => {

  const [imageData, setImageData] = useState(null);

  const handleFiles = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const imageData = event.target.result;
      setImageData(imageData);
    };
  };

  // const saveToDatabase = async (imageData) => {
  //   let res = await fetch('http://localhost:3000/images', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({url:imageData})
  //       })
  //       let data = await res.json()
  //   console.log("Image saved to database:", data);
  //   setImageData(null);
  //   };

  return (
    <div className=' flex flex-col'>
      <div className='flex items-end'>
      <div className='h-16 border w-2/3 overflow-hidden flex items-center justify-center '><img src={imageData} alt="Selected Image" className='object-cover object-center w-64 h-16' /> </div>
      <div>
      <input type="file" id="image-input" onChange={handleFiles} className="w-16" />
        <button onClick={() => setImage(imageData)} className="w-2/3">done</button>

      </div>
      </div>
      
    </div>
  );
};

export default ImageUpload;
