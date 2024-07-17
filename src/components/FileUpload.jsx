import React, { useState } from 'react';
import { Button, Card, Spacer } from '@nextui-org/react';
import { X } from 'lucide-react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="p-6 w-1/3 shadow-none">
      <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 mb-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12v3m0 0v3m0-3h3m-3 0H9m9 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1M12 6h3m-3 0H9m12 0l-4 4m0 0L9 6m3 10h3"
              />
            </svg>
            <p className="text-gray-600">
              Drag & drop <span className="text-blue-500">image</span>
            </p>
            <p className="text-gray-600">
              or <span className="text-blue-500 cursor-pointer">browse files</span> on your computer
            </p>
          </div>
        </label>
      </div>
      {file && (
        <div className="mt-4 flex items-center justify-between bg-gray-100 p-2 rounded-lg">
          <div className="flex items-center">
            <img src={URL.createObjectURL(file)} alt="preview" className="w-12 h-12 object-cover mr-2 rounded" />
            <div>
              <p className="text-sm">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <button onClick={removeFile} className="text-red-500 hover:text-red-700">
            <X />
          </button>
        </div>
      )}
      <Spacer y={1} />
      <Button>Upload</Button>
    </Card>
  );
};

export default FileUpload;
