import axios from "axios";
import { toast } from "sonner";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import { useMutation } from '@tanstack/react-query';

const usePost = ({ queryKey, url, params = {}, data = {}, onSuccess, onError }) => {
    // Default onSuccess handler
    const defaultOnSuccess = (responseData) => {
        console.log("Data Posted Successfully: ", responseData);
        toast.success("Data Posted Successfully");
    };

    // Default onError handler
    const defaultOnError = (error) => {
        console.log("Error Occurred: ", error);
        toast.error("Error Occurred", {
            description: error.message
        });
    };

    return useMutation({
        mutationKey: [queryKey, params, data], // Use mutationKey with params and data for caching and refetching
        mutationFn: async () => {
            const response = await axios.post(url, data, { params });

            if (response.status === 200) {
                switch (response.data.code) {
                    case ResponseCodes.SUCCESS:
                        toast.success(response.data.message);
                        return response.data.content;
                    case ResponseCodes.ERROR:
                        toast.error(response.data.message);
                        return response.data;
                    case ResponseCodes.DUPLICATED:
                        toast.warning(response.data.message);
                        return response.data;
                    case ResponseCodes.VALIDATION_FAILED:
                        if (response.data.errors !== null) {
                            response.data.errors.forEach((error) => {
                                toast.error(error);
                                console.log(error);
                            });
                        }
                        return response.data;
                    default:
                        toast.error("Unknown Error", {
                            description: response.data.message
                        });
                        return response.data;
                }
            } else {
                toast.error(`Response code: ${response.status}`, {
                    description: response.data.message
                });
                return response.data;
            }
        },
        onSuccess: onSuccess || defaultOnSuccess,
        onError: onError || defaultOnError,
    });
};

export default usePost;