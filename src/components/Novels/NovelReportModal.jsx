import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import axios from 'axios';
import { toast } from "sonner";


export default function NovelReportModal({isOpen, onClose, onOpen, novelId}) {

    const [reason, setReason] = useState("");

    async function handleReport() {
        const response = await axios.post(`/api/reportedContent/report-novel/${novelId}`, { reason });
    
        if(response.status === 200) {
          if(response.data.code === "00") {
            toast.success("Reported successfully");
            onClose();
          } else {
            toast.error(response.data.message, {
              description: response.data.content
            });
          }
        } else {
          toast.error("Error", {
            description: response.data.message
          });
        }
      }

    return (
        <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Reporting a Novel</ModalHeader>
              <ModalBody>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains inappropriate content
                </Button>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains incorrect information
                </Button>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains spam
                </Button>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains abusive content
                </Button>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains harmful content
                </Button>
                <Button color="primary" variant="light" onClick={(e) => setReason(e.target.textContent)}>
                    Contains other content
                </Button>
                <Textarea
                    className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md"
                    placeholder="Please provide more details"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="warning" onPress={handleReport}>
                  Report
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
}