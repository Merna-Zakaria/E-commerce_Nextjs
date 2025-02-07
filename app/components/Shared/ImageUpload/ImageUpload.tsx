import React, { useState, ChangeEvent } from 'react';  

interface ImageUploadProps {  
  onUpload: (file: File) => void; // Callback when the image is successfully uploaded  
}  

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);  
  const [error, setError] = useState<string | null>(null);  

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {  
    const file = e.target.files?.[0];  

    if (file) {  
      // Checking for valid image types and size (optional)  
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];  
      if (!validImageTypes.includes(file.type)) {  
        setError('Please upload a valid image (JPEG, PNG, GIF).');  
        setSelectedImage(null);  
        return;  
      }  

      if (file.size > 5 * 1024 * 1024) { // 5MB max size  
        setError('File size must be less than 5MB.');  
        setSelectedImage(null);  
        return;  
      }  

      setError(null);  
      setSelectedImage(URL.createObjectURL(file)); // Set image preview  
      onUpload(file); // Call the onUpload prop with the selected file  
    }  
  };  

  return (  
    <div className="flex flex-col items-center justify-center bg-white border-2 border-gray-300 border-dashed rounded-md p-4">  
      <input  
        type="file"  
        accept="image/*"  
        onChange={handleImageChange}  
        className="hidden"  
        id="image-upload" // Linking the label to the input  
      />  
      <label  
        htmlFor="image-upload"  
        className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-150"  
      >  
        Upload Image  
      </label>  
      {selectedImage && (  
        <div className="mt-4">  
          <img  
            src={selectedImage}  
            alt="Preview"  
            className="rounded-md max-w-xs" // Styling the preview image  
          />  
        </div>  
      )}  
      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Error message */}  
    </div>  
  );  
};  

export default ImageUpload;