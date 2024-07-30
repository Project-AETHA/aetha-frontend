import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Input, Chip, Image } from "@nextui-org/react";

export default function ComplaintDetails() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);
  const [id, setId] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const { complaintId } = useParams();

  useEffect(() => {
    getData(complaintId);
  }, []);

  async function getData(complaintId) {
    setLoading(true);

    const response = await axios.get(
      "http://localhost:8080/api/support/get_ticket/" + complaintId
    );

    if (response.status === 200) {
      setId(response.data.content.id);
      setTitle(response.data.content.title);
      setCategory(response.data.content.category);
      setDescription(response.data.content.description);
      setImage(response.data.content.attachments[0]);
      console.log(response.data.content.category);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(80dvh-70px)] bg-white mx-2">
      {!loading && (
        <div className="flex flex-col gap-4 !text-black">

          <h1 className="font-semibold text-large mx-auto">Complaint Details</h1>

          <div className="flex gap-8 items-center">
            <Input
              key="title"
              type="text"
              label="Title"
              disabled
              size="md"
              labelPlacement="outside"
              className="min-w-[200px] max-w-[400px] lg:min-w-[400px] rounded-xl"
              value={title}
            />
            <Chip
              color="warning"
              size="lg"
              className="capitalize"
              variant="flat"
            >
              {category}
            </Chip>
          </div>
          
          <Input
              key="description"
              type="text"
              label="Description"
              disabled
              size="md"
              labelPlacement="outside"
              className="min-w-[200px] max-w-[400px] lg:min-w-[400px] rounded-xl"
              value={description}
            />

            <p className="mt-6">Attachements</p>
            <div className="flex gap-2">
                <Image src={`http://localhost:8080${image}`} width={300} />
                <Image src={`http://localhost:8080${image}`} width={300} />
            </div>
        </div>
      )}

      {loading && (
        <Spinner label="LOADING" color="secondary" labelColor="foreground" />
      )}
    </div>
  );
}
