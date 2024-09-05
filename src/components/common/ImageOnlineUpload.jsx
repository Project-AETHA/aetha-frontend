import { IKUpload } from 'imagekitio-react';
import ImageKitVariables from "@/components/predefined/ImageKitVariables.jsx";
import { toast } from 'sonner';
import axios from 'axios';

const ImageOnlineUpload = (props) => {

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
        console.log('Upload successful:', response);
        props.setImage(response.filePath)
        toast.success('Image uploaded successfully');
    };

    const onError = (error) => {
        console.error('Upload failed:', error);
        toast.error('Image upload failed. Please try again.');
    };

    const onUploadProgress = progress => {
        console.log("Progress", progress);
    };

    return (
        <IKUpload
            urlEndpoint={ImageKitVariables.IMAGEKIT_URL}
            publicKey={ImageKitVariables.IMAGEKIT_PUBLIC_KEY}
            authenticator={authenticator}
            onSuccess={onSuccess}
            onError={onError}
            onUploadProgress={onUploadProgress}
            {...props}
        />
    );
};

export default ImageOnlineUpload;