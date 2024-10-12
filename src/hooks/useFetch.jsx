import { useEffect, useState } from 'react'
import axios from "axios";
import {toast} from "sonner";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            await axios.get(url)
                .then(response => {
                    if (response.status === 200) {
                        switch (response.data.code) {
                            case ResponseCodes.SUCCESS:
                                toast.success(response.data.message);
                                setData(response.data.content);
                                break;
                            case ResponseCodes.ERROR:
                                toast.error(response.data.message);
                                break;
                            case ResponseCodes.DUPLICATED:
                                toast.warning(response.data.message);
                                break;
                            case ResponseCodes.VALIDATION_FAILED:
                                if (response.data.errors !== null) {
                                    response.data.errors.forEach(error => {
                                        toast.error(error);
                                        console.log(error);
                                    });
                                    setError(response.data.errors);
                                }
                                console.log(response.data.message)
                                break;
                            default:
                                toast.error("Unknown Error", {
                                    description: response.data.message
                                });
                                break;
                        }
                    } else {
                        console.log("Error: " + response.data);
                        toast.error("Response code : " + response.status, {
                            description: response.data.message
                        });
                    }
                })
                .catch(error => {
                    console.log("Error: " + error);
                    toast.error("Server Error - Not Responding");
                });

        } catch (error) {
            console.log("Error submitting form:", error);
            toast.error("Error occurred when submitting form");
        }
    }

    useEffect(() => {
        setLoading(true)
        getData();
        setLoading(false)
    }, [url]);

    return { data, loading, error };
}

export default useFetch