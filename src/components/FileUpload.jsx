import React, { useState } from 'react';
import { Button, Card, Spacer, Avatar, Tooltip, Divider } from '@nextui-org/react';
import { X, Upload } from 'lucide-react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="p-6 w-full max-w-md mx-auto shadow-none" css={{ height: '400px' }}>
      <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center h-64 flex flex-col justify-center">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 mb-2 text-gray-400" />
            <span className="text-gray-600">
              Drag & drop <span className="text-blue-500">image</span>
            </span>
            <span className="text-gray-600">
              or <span className="text-blue-500 cursor-pointer">browse files</span> on your computer
            </span>
          </div>
        </label>
      </div>
      {file && (
        <div className="mt-4 flex items-center justify-between bg-gray-100 p-2 rounded-lg">
          <div className="flex items-center">
            <Avatar src={URL.createObjectURL(file)} alt="preview" className="w-12 h-12 object-cover mr-2 rounded" />
            <div>
              <span className="text-sm">{file.name}</span>
              <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</span>
            </div>
          </div>
          <Tooltip content="Remove file" color="error">
            <Button auto flat color="error" onClick={removeFile}>
              <X size={16} />
            </Button>
          </Tooltip>
        </div>
      )}
      <Spacer y={1} />
      <Divider />
      <Spacer y={1} />
      <Button>Upload</Button>
    </Card>
  );
};

export default FileUpload;
