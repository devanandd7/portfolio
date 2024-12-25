import React, { useState } from 'react';

const ImageComponent = () => {
    const [image, setImage] = useState();

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        setImage(file ? URL.createObjectURL(file) : undefined);
    };

    console.log(image);

    return (
        <>
            <div>
                <h3>Image Upload</h3>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                />
                {image && <img src={image} alt="Selected" style={{ width: '100px', height: '100px' }} />}
            </div>
        </>
    );
};

export default ImageComponent;
