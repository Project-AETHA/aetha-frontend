import { Image, Input, Button } from '@nextui-org/react';
import { useState } from 'react';

export default function ImageUpload({ files, setFiles }) {
    const [imagePreview, setImagePreview] = useState(null);

    function handleUploadClick(e) {
        const selectedFiles = e.target.files;
        if (selectedFiles.length > 0) {
            setFiles(selectedFiles); // Handle multiple files if needed
            setImagePreview(URL.createObjectURL(selectedFiles[0]));
        }
    }

    function handleClearClick() {
        setFiles(null);
        setImagePreview(null);
        // Clear file input value
        document.getElementById('complaint_image_upload').value = '';
    }

    return (
        <div className="flex flex-col items-center justify-evenly flex-wrap gap-4">
            <Image
                width={200}
                height={160}
                alt="Image preview"
                src={imagePreview || "http://localhost:8080/images/complaints/669aa497a1e4c96348da9c51_1.png"}
            />

            <div className="flex gap-2">
                <label>
                    <div className="bg-purple-100 text-purple-700 text-medium py-2 px-4 rounded-xl hover:cursor-pointer active:scale-95">
                        Select Image
                    </div>
                    <input
                        type="file"
                        name="files"
                        className="hidden"
                        id="complaint_image_upload"
                        onChange={handleUploadClick}
                    />

                </label>
                {imagePreview && (
                    <Button
                        variant="flat"
                        color="error"
                        onClick={handleClearClick}
                    >
                        Clear Image
                    </Button>
                )}
            </div>
        </div>
    );
}
