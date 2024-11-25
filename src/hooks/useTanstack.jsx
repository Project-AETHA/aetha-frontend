import axios from "axios";
import { toast } from "sonner";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import { useQuery } from '@tanstack/react-query';

const useTanstack = ({ url, onSuccess, onError }) => {

    function onSuccess(data) {
        console.log("Data Fetched: ", data);
        toast.success("Data Fetched Successfully");
    }

    function onError(error) {
        console.log("Error Occurred: ", error);
        toast.error("Error Occurred", {
            description: error.message
        });
    }

    return useQuery(url, async () => {
            const response = await axios.get(url);
            if (response.status === 200) {
                switch (response.data.code) {
                    case ResponseCodes.SUCCESS:
                        toast.success(response.data.message);
                        // onSuccess(response.data.content);
                        return response.data.content;
                    case ResponseCodes.ERROR:
                        toast.error(response.data.message);
                        return response.data;
                    case ResponseCodes.DUPLICATED:
                        toast.warning(response.data.message);
                        return response.data;
                    case ResponseCodes.VALIDATION_FAILED:
                        if (response.data.errors !== null) {
                            response.data.errors.forEach(error => {
                                toast.error(error);
                                console.log(error);
                            });
                            onError(response.data.errors);
                        }
                        console.log(response.data.message)
                        return response.data;
                    default:
                        toast.error("Unknown Error", {
                            description: response.data.message
                        });
                        return response.data;
                }
            } else {
                console.log("Error: " + response.data);
                toast.error("Response code : " + response.status, {
                    description: response.data.message
                });
                return response.data;
            }
    });
}

export default useTanstack