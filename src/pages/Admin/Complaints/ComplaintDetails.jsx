import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Spinner,
    Input,
    Chip,
    Image,
    Button,
    Textarea
} from "@nextui-org/react";
import { ImEnlarge2 } from "react-icons/im";
import { MdError } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import {
    FaTimesCircle,
    FaCheckCircle,
    FaHourglassHalf,
    FaInfoCircle,
} from "react-icons/fa";
import Popup from "@/components/common/Popup";
import { toast } from "sonner";

export default function ComplaintDetails() {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(null);
    const [id, setId] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState(null);
    const [openImageIndex, setOpenImageIndex] = useState(null);
    const { complaintId } = useParams();
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorCategory, setErrorCategory] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    const [createdAt, setCreatedAt] = useState(null);
    const [comment, setComment] = useState("");

    const navigate = useNavigate()

    function createAlert(title, description) {
        toast({
            title: title,
            description: description,
        });
    }

    const updateTicket = async (e) => {
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
        // if (images) {
        //   console.log(images);
        //   formData.append("files", images);
        // }

        try {
            const response = await axios.post(
                "/api/support/update_ticket/" + complaintId,
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
                    "Ticket updated successfully",
                    "success"
                );
            }
        } catch (error) {
            // Code for creating a custom title for the popup alert

            let title = (
                <div className="flex gap-2 items-center text-red-800">
                    <MdError size={20} />
                    <p className="text-red-700">Error !</p>
                </div>
            );

            createAlert(title, "Ticket updating failed", "danger");
            console.error("Error creating ticket:", error);
        }
    };

    const [editing, setEditing] = useState(false);

    const statusInfo = {
        declined: { color: "danger", icon: <FaTimesCircle /> },
        solved: { color: "success", icon: <FaCheckCircle /> },
        pending: { color: "primary", icon: <FaHourglassHalf /> },
        assistance: { color: "warning", icon: <FaInfoCircle /> },
    };

    const categoryInfo = {
        assistance: { color: "warning" },
        bug: { color: "danger" },
        complaint: { color: "primary" },
        other: { color: "secondary" },
    };

    useEffect(() => {
        getData(complaintId);
    }, [complaintId]);

    async function getData(complaintId) {
        setLoading(true);

        const response = await axios.get(
            `/api/support/get_ticket/${complaintId}`
        );

        if (response.status === 200) {
            const { id, title, category, description, attachments, status, adminResponse } = response.data.content;
            setId(id);
            setTitle(title);
            setCategory(category);
            setDescription(description);
            setImages(attachments);
            setStatus(status);
            setCreatedAt(createdAt);
            setComment(adminResponse);
            console.log(response.data.content)
        }

        setLoading(false);
    }

    const handleImageClick = (index) => {
        setOpenImageIndex(index);
    };

    const handleClosePopup = () => {
        setOpenImageIndex(null);
    };

    const handleSolved = async () => {
        console.log(`/api/support/update-solved/${complaintId}`)
        const response = await axios.put(`/api/support/update-solved/${complaintId}`, { comment });

        if(response.status === 200 && response.data.code === "00") {
            toast.success("Ticket marked as solved");
            navigate("/admin/complaints");
        } else {
            toast.error("Failed to mark ticket as solved");
        }
    }

    const handleDeclined = async () => {
        const response = await axios.put(`/api/support/update-unsolved/${complaintId}`, { comment });

        if(response.status === 200 && response.data.code === "00") {
            toast.success("Ticket marked as solved");
            navigate("/admin/complaints");
        } else {
            toast.error("Failed to mark ticket as solved");
        }
    }

    return (
        <form
            onSubmit={updateTicket}
            className="py-6 flex justify-center min-h-[calc(80dvh-70px)] bg-foreground-50 mx-2 my-2 rounded"
        >
            {!loading && (
                <>
                    <div className="grid grid-col-6 gap-4 !text-foreground-900 flex-1 px-6">
                        <h1 className="font-semibold text-large cursor-default col-span-6">
                            Complaint Details
                        </h1>

                        <hr className="pb-4 col-span-6"/>

                        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                            <div className="flex flex-col items-center grow gap-4 md:col-span-2">
                                <Input
                                    key="title"
                                    type="text"
                                    label="Title"
                                    name="title"
                                    variant="bordered"
                                    isInvalid={errorTitle}
                                    disabled={!editing}
                                    labelPlacement="outside"
                                    className="min-w-[200px] lg:min-w-[400px] rounded-xl"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Textarea
                                    isRequired
                                    label="Description"
                                    variant="bordered"
                                    isInvalid={errorDescription}
                                    disabled={!editing}
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                    className="min-w-[290px] w-full rounded-xl p-2"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                />
                            </div>
                        </div>

                        <p className="col-span-6 mt-6 text-small cursor-default">
                            Attachments
                        </p>
                        <div className="col-span-6 flex gap-2 flex-wrap sm:flex-nowrap">
                            {images &&
                                images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative group hover:cursor-pointer"
                                        onClick={() => handleImageClick(index)}
                                    >
                                        {/* The image that will be shown in the complaint details page */}
                                        <Image
                                            src={`${image}`}
                                            radius="none"
                                            width={300}
                                            className="z-2 shadow"
                                        />

                                        {/* White oveerlay that is visible when the we hover over the image */}
                                        <div
                                            className="absolute inset-0 bg-white z-3 opacity-0 group-hover:opacity-50 border-4 border-black/75 transition-opacity flex gap-2 items-center text-black justify-center">
                                            <ImEnlarge2 size={15}/>
                                            <p className="font-bold">View Image</p>
                                        </div>

                                        {/* Popup (modal) related to the selected image when clicking on an image */}
                                        {openImageIndex === index && (
                                            <Popup
                                                size="full"
                                                title={`Attachment - ${index + 1}`}
                                                opened={true}
                                                handleClosePopup={handleClosePopup}
                                            >
                                                <Image
                                                    src={`${image}`}
                                                    width={"full"}
                                                    radius={"none"}
                                                />
                                            </Popup>
                                        )}
                                    </div>
                                ))}

                            {!images && (
                                <p className="text-sm text-center text-foreground-500 w-1/2">
                                    No attachments
                                </p>
                            )}
                        </div>

                        <hr className="text-black col-span-6 py-4" />

                        <div className="col-span-6">
                            <Textarea
                                isRequired
                                label="Comment"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter a comment"
                                className="min-w-[290px] w-full rounded-xl p-2"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>

                        <div className="col-span-6 mt-6">
                            <div className="w-full flex gap-2 justify-center">
                                <Button
                                    color="success"
                                    variant="flat"
                                    onClick={handleSolved}
                                >
                                    Solved
                                </Button>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onClick={handleDeclined}
                                >
                                    Declined
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[200px] max-w-[250px] border-l-4 flex-1 flex  flex-col gap-4">
                        <div className="flex flex-col gap-2 h-full items-center">

                            <div className="flex gap-2 justify-evenly w-full items-center">
                                <p className="text-small">Type : </p>
                                <Chip color={
                                    category ? categoryInfo[category.toLowerCase()].color : "warning"
                                }
                                      size="lg"
                                      className="capitalize col-span-2 cursor-default"
                                      variant="flat"
                                >
                                    {category}
                                </Chip>
                            </div>

                            <div className="flex gap-2 justify-evenly w-full items-center">
                                <p className="text-small">Status : </p>
                                <Chip
                                    color={
                                        status ? statusInfo[status.toLowerCase()].color : "warning"
                                    }
                                    size="lg"
                                    className="capitalize col-span-2 cursor-default"
                                    variant="flat"
                                >
                                    <div className="flex gap-2 items-center">
                                        {status && statusInfo[status.toLowerCase()].icon}
                                        <p>{status}</p>
                                    </div>
                                </Chip>
                            </div>

                            <p>{createdAt}</p>
                        </div>
                    </div>
                </>
            )}

            {loading && (
                <Spinner label="LOADING" color="secondary" labelColor="foreground"/>
            )}
        </form>
    );
}