import { Image, Input, Button } from '@nextui-org/react'
import { useState, useRef } from "react";

export default function ImageUpload () {

    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [imageName, setImageName] = useState("");
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fileInputRef = useRef(null);

    function handleUploadClick(e) {
        fileInputRef.current.click();
        setImage(e.target.files[0]);
        console.log("Image: ", e.target.files[0]);
    }

    function handleChange () {
        console.log("Image Name: ", imageName);
        console.log("Image Data: ", imageData);
    }

    function uploadImageWithAdditionalData () {
        console.log("Image Name: ", imageName);
        console.log("Image Data: ", imageData);
    }

    return (
        <div className="flex flex-col items-center justify-evenly flex-wrap gap-4">
            <Image
                width={200}
                height={160}
                alt="NextUI hero Image with delay"
                src={imagePreview !== null ? imagePreview : "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"}
            />

            <input
                accept="image/*"
                type="file"
                className=""
                ref={fileInputRef}
                onChange={handleUploadClick}
            />
            <Button
                variant="flat"
                color="secondary"
                component="span"

            >
                Change Image
            </Button>

            <Input
                key="imageName"
                type="text"
                name="image-name"
                label="Image Name"
                size="md"
                labelPlacement="outside"
                className="max-w-[300px]"
                onChange={handleChange}
                value={imageName}
                variant="outlined"
            />

            <Button
                variant="flat"
                color="secondary"
                className=""
                onClick={() => uploadImageWithAdditionalData()}
            >
                Upload Image
            </Button>

        </div>
    );
}