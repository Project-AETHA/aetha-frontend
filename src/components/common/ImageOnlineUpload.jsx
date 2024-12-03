import { IKUpload } from 'imagekitio-react';
import ImageKitVariables from "@/components/predefined/ImageKitVariables.jsx";
import { toast } from 'sonner';
import axios from 'axios';
import { Progress, Card } from "@nextui-org/react";
import { useState } from "react";

const ImageOnlineUpload = (props) => {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const authenticator = async () => {
        try {
            const response = await axios.get('/api/imagekit/auth');
            if (response.status === 200) {
                const { signature, expire, token } = response.data;
                return { signature, expire, token };
            } else {
                throw new Error('Failed to fetch authentication parameters');
            }
        } catch (error) {
            toast.error('Error fetching authentication parameters');
            console.error(error);
            throw error; // rethrow the error to handle it in the component
        }
    };

    const onSuccess = (response) => {
        setProgress(0);
        setIsUploading(false);
        console.log('Upload successful:', response);
        props.setimage(response.filePath);
        toast.success('Image uploaded successfully');
    };

    const onError = (error) => {
        setProgress(0);
        setIsUploading(false);
        console.error('Upload failed:', error);
        toast.error('Image upload failed. Please try again.');
    };

    const onUploadProgress = (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percent = Math.round((loaded / total) * 100);
        setProgress(percent);
        console.log("Progress:", percent);
    };

    return (
        <Card css={{ p: "$6", mw: "400px" }}>
            <IKUpload
                urlEndpoint={ImageKitVariables.IMAGEKIT_URL}
                publicKey={ImageKitVariables.IMAGEKIT_PUBLIC_KEY}
                authenticator={authenticator}
                onSuccess={onSuccess}
                onError={onError}
                onUploadProgress={(event) => {
                    setIsUploading(true);
                    onUploadProgress(event);
                }}
                {...props}
            />
            {isUploading && (
                <Progress
                    color="primary"
                    value={progress}
                    label={`${progress}%`}
                    max={100}
                    css={{ mt: "$4" }}
                />
            )}
        </Card>
    );
};

export default ImageOnlineUpload;
