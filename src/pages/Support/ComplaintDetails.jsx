import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Input, Chip, Image } from "@nextui-org/react";
import { HiDocument } from "react-icons/hi2";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { ImEnlarge2 } from "react-icons/im";
import Popup from "../../components/common/Popup";

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

  useEffect(() => {
    getData(complaintId);
  }, [complaintId]);

  async function getData(complaintId) {
    setLoading(true);

    const response = await axios.get(
      `http://localhost:8080/api/support/get_ticket/${complaintId}`
    );

    if (response.status === 200) {
      const { id, title, category, description, attachments, status } =
        response.data.content;
      setId(id);
      setTitle(title);
      setCategory(category);
      setDescription(description);
      setImages(attachments);
      setStatus(status);
    }

    setLoading(false);
  }

  const handleImageClick = (index) => {
    setOpenImageIndex(index);
  };

  const handleClosePopup = () => {
    setOpenImageIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(80dvh-70px)] bg-foreground-50 mx-2">
      {!loading && (
        <div className="flex flex-col gap-4 !text-foreground-900">
          <h1 className="font-semibold text-large cursor-default">Complaint Details</h1>

          <hr className="pb-4" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center grow gap-4">
              <Input
                key="title"
                type="text"
                label="Title"
                disabled
                labelPlacement="outside"
                className="min-w-[200px] max-w-[400px] lg:min-w-[400px] rounded-xl"
                value={title}
              />
              <Input
                key="description"
                type="text"
                label="Description"
                disabled
                labelPlacement="outside"
                className="min-w-[200px] max-w-[400px] lg:min-w-[400px] rounded-xl"
                value={description}
              />
            </div>
            <div className="flex sm:flex-col gap-4 flex-wrap sm:flex-nowrap items-center justify-center">
              <Chip
                color="warning"
                size="lg"
                className="capitalize col-span-2 cursor-default"
                variant="flat"
              >
                <div className="flex gap-2 items-center">
                  <HiDocument size={17} />
                  <p>{category}</p>
                </div>
              </Chip>

              <Chip
                color="primary"
                size="lg"
                className="capitalize col-span-2 cursor-default"
                variant="flat"
              >
                <div className="flex gap-2 items-center">
                  <BsFillQuestionDiamondFill size={17} />
                  <p>{status}</p>
                </div>
              </Chip>
            </div>
          </div>

          <p className="mt-6 cursor-default">Attachments</p>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            {images &&
              images.map((image, index) => (
                <div key={index} className="relative group hover:cursor-pointer" onClick={() => handleImageClick(index)} >

                  {/* The image that will be shown in the complaint details page */}
                  <Image src={`http://localhost:8080${image}`} radius="none" width={300} className="z-2 shadow" />

                  {/* White oveerlay that is visible when the we hover over the image */}
                  <div class="absolute inset-0 bg-white z-3 opacity-0 group-hover:opacity-50 border-4 border-black/75 transition-opacity flex gap-2 items-center text-black justify-center">
                    <ImEnlarge2 size={15} />
                    <p className="font-bold">View Image</p>
                  </div>

                  {/* Popup (modal) related to the selected image when clicking on an image */}
                  {openImageIndex === index && (
                    <Popup size="full" title={`Attachment - ${index + 1}`} opened={true} handleClosePopup={handleClosePopup} >
                      <Image src={`http://localhost:8080${image}`} width={"full"} radius={"none"} />
                    </Popup>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {loading && (
        <Spinner label="LOADING" color="secondary" labelColor="foreground" />
      )}
    </div>
  );
}
