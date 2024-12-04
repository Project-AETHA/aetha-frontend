import axios from "axios";
import { toast } from "sonner";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import { useQuery } from '@tanstack/react-query';

const useGet = ({ queryKey, url, params = {}, onSuccess, onError }) => {
    // Default onSuccess handler
    const defaultOnSuccess = (data) => {
        console.log("Data Fetched: ", data);
        toast.success("Data Fetched Successfully");
    };

    // Default onError handler
    const defaultOnError = (error) => {
        console.log("Error Occurred: ", error);
        toast.error("Error Occurred", {
            description: error.message
        });
    };

    return useQuery({
        queryKey: [queryKey, params], // Include params in queryKey for caching
        queryFn: async () => {
            const response = await axios.get(url, { params });

            if (response.status === 200) {
                switch (response.data.code) {
                    case ResponseCodes.SUCCESS:
                        // toast.success(response.data.message);
                        return response.data.content;
                    case ResponseCodes.ERROR:
                        // toast.error(response.data.message);
                        return response.data;
                    case ResponseCodes.DUPLICATED:
                        // toast.warning(response.data.message);
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
            console.log(response);
        },
        onSuccess: onSuccess || defaultOnSuccess,
        onError: onError || defaultOnError,
        staleTime: 30000,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: true,
        refetchInterval: 60000,
        retry: 3,
    });
};

export default useGet;