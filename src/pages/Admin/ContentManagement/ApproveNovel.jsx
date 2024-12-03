import React from "react";
import { Image, Chip, Button, Textarea, Divider } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useParams, useNavigate } from "react-router-dom";
import useGet from "@/hooks/useGet";
import axios from "axios";
import LoadingComponent from "@/components/utility/LoadingComponent";
import ImageOnline from "@/components/common/ImageOnline";
import { toast } from "sonner";

function ApproveNovel() {

  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { novelId } = useParams();
  const [reason, setReason] = React.useState("");

  const { data, isLoading, isError, error } = useGet({
    queryKey: "novel-approve",
    url: `/api/novels/viewToApprove/${novelId}`,
    params: { novelId },
  });

  async function handleApprove() {
    const response = await axios.put(`/api/novels/approve/${novelId}`);

    if (response.status === 200 && response.data.code === "00") {
      toast.success("Novel Approved Successfully");
      navigate("/admin/contents");
    } else {
      toast.error("Failed to Approve Novel");
    }
  }

  async function handleDecline() {
    const response = await axios.put(`/api/novels/reject/${novelId}`, { rejectionReason: reason });

    if (response.status === 200 && response.data.code === "00") {
      toast.success("Novel Rejected");
      navigate("/admin/contents");
    } else {
      toast.error("Failed to Reject Novel");
      onClose();
    }
  }

  return (
    <>
      {isLoading && <LoadingComponent />}
      {!isLoading && isError && <div>{error.message}</div>}
      {!isLoading && !isError && (
        <div className="flex justify-center pt-8">
          <div className="flex-col w-10/12 bg-white rounded-md">
            <div
              className="mt-4 mx-4 p-4 shadow-lg bg-sky-500 py-8 relative"
              style={{ height: "50px" }}
            >
              <p className="flex items-center justify-center h-full font-sans text-foreground-50 text-lg font-semibold">
                Admin Approval
              </p>
            </div>
            <div className="flex ">
              <div className="flex flex-col items-center p-8 w-1/3">
                <ImageOnline
                  className="rounded-md"
                  width={180}
                  height={180}
                  alt={data.title}
                  path={data.coverImage}
                />
              </div>
              <div className="my-8 mr-14 w-2/3">
                <div className="flex gap-4 ">
                  <div className="font-semibold flex text-black text-xl">
                    {data.title}
                  </div>
                  <div className="flex items-center text-black">-</div>
                  <div className="text-foreground-700 flex justify-start items-center ">
                    Novel
                  </div>
                </div>

                <div className="flex gap-3 mt-5 mb-3">
                  {data.genres && data.genres.slice(0,3).map((genre, item) => (
                    <Chip color="secondary" variant="flat" radius="sm">
                      {genre}
                    </Chip>
                  ))}
                </div>
                <div className="mt-4">
                  {data.description}
                </div>
                <div className="flex gap-3 mt-5 mb-3">
                  Tags
                  {data.tags && data.tags.slice(0,3).map((tag, item) => (
                    <Chip color="warning" variant="flat" radius="sm">
                      {tag}
                    </Chip>
                  ))}
                </div>
                <div className="flex gap-3 mt-5 mb-3">
                  Warnings
                  {data.contentWarning && data.contentWarning.slice(0,3).map((warning, item) => (
                    <Chip color="danger" variant="flat" radius="sm">
                      {warning}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
            <Divider className="w-11/12 mx-4" />
            <div className="text-black font-bold flex justify-start items-start ml-20 mt-4">
              Author Details
            </div>
            <div className="flex items-center ">
              <div className="flex justify-start items-start ml-20 mt-4 text-foreground-700 w-28">
              <ImageOnline
                  className="rounded-full"
                  width={180}
                  height={180}
                  alt={data.author.displayName}
                  path={data.author.image}
                />
              </div>
              <div className="flex flex-col items-start ml-20 mt-4 text-foreground-700 bg-foreground-100 w-64 rounded-md p-1">
                <span>{data.author.firstname + " " + data.author.lastname}</span>
                <span>{data.author.email}</span>
              </div>
            </div>
            <div className="flex items-center justify-evenly p-8">
              <Button color="primary" radius="sm" onClick={handleApprove}>
                Approve
              </Button>
              <Button color="secondary" radius="sm" onPress={onOpen}>
                Decline
              </Button>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            classNames={{
              backdrop: "bg-neutral-900/50 backdrop-blur-sm",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-center text-center w-full">
                      <div className="text-lg font-semibold bg-blue-500 w-full m-5 p-1 text-white">
                        Decline Novel
                      </div>
                        <ImageOnline
                          className="rounded-md"
                          width={180}
                          height={180}
                          alt={data.title}
                          path={data.coverImage}
                        />
                      <div className="text-base font-medium">{data.title}</div>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <Textarea
                      key="faded"
                      variant="faded"
                      label="Reason for decline this novel?"
                      labelPlacement="outside"
                      placeholder="Enter your reason"
                      className="col-span-12 md:col-span-6 mb-6 md:mb-0 p-2"
                      color="primary"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    <p className="p-2">
                      Are you sure you want to decline this novel?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={handleDecline}>
                      Confirm
                    </Button>
                    <Button color="secondary" onPress={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      )}
    </>
  );
}

export default ApproveNovel;
