"use client";

import SupportTable from "./components/SupportTable";
import CreateTicket from "./components/CreateTicket";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { useToast } from "@/components/ui/use-toast";
import { MdError } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const SupportPage = () => {
    const [title, setTitle] = useState("");
    const [errorTitle, setErrorTitle] = useState(false);
    const [category, setCategory] = useState("");
    const [errorCategory, setErrorCategory] = useState(false);
    const [description, setDescription] = useState("");
    const [errorDescription, setErrorDescription] = useState(false);
    const [files, setFiles] = useState(null);

    const navigate = useNavigate();

    const { toast } = useToast();

    const createTicket = async (e) => {
        e.preventDefault();

        if (title === "") setErrorTitle(true);
        else setErrorTitle(false);
        if (category === "") setErrorCategory(true);
        else setErrorCategory(false);
        if (description === "") setErrorDescription(true);
        else setErrorDescription(false);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("description", description);

        // Append each file in the files array
        if (files) {
            console.log(files);
            formData.append("files", files);
        }

        try {
            const response = await axios.post(
                "/api/support/create_ticket",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response);

            if (response.data.code === "00") {
                // Code for creating a custom title for the popup alert

                let title = (
                    <div className="flex gap-2 items-center text-green-600">
                        <IoCheckmarkDoneCircleSharp size={20} />
                        <p className="text-green-700">Success</p>
                    </div>
                );

                createAlert(
                    title,
                    "Ticket created successfully",
                    response.data.content.id,
                    "success"
                );
                clearAll();
            }
        } catch (error) {
            // Code for creating a custom title for the popup alert

            let title = (
                <div className="flex gap-2 items-center text-red-800">
                    <MdError size={20} />
                    <p className="text-red-700">Error !</p>
                </div>
            );

            createAlert(title, "Ticket creation failed", "#ERROR", "danger");
            console.error("Error creating ticket:", error);
        }
    };

    const clearAll = () => {
        setTitle("");
        setCategory("");
        setDescription("");
        setFiles(null);
    };

    function createAlert(title, description, complaintId, bcolor = "secondary") {
        toast({
            title: title,
            description: description,
            action: (
                <Button
                    variant="flat"
                    radius="sm"
                    className="!py-1"
                    color={bcolor}
                    altText="View"
                    onClick={() => {
                        navigate(`/support/${complaintId}`);
                    }}
                >
                    View
                </Button>
            ),
        });
    }

    return (
        <div className="alt-container">
            <div className="p-2">
                <h2 className="font-bold text-black dark:text-white mb-2">
                    Suggest to create a support ticket
                </h2>
                <div className="bg-foreground-50 text-black rounded-lg px-2 py-6 flex justify-center">
                    <CreateTicket
                        createTicket={createTicket}
                        setTitle={setTitle}
                        setCategory={setCategory}
                        setDescription={setDescription}
                        setFiles={setFiles}
                        title={title}
                        category={category}
                        description={description}
                        files={files}
                        clearAll={clearAll}
                        errorCategory={errorCategory}
                        errorDescription={errorDescription}
                        errorTitle={errorTitle}
                    />
                </div>
            </div>
            <div className="">
                <div className="text-black dark:text-white text-lg font-bold mb-2">
                    Active Tickets
                </div>
                <div>
                    <SupportTable createTicket={createTicket} />
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
