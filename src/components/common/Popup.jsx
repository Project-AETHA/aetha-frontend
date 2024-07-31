import { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Popup(props) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = useState('md')
  const [backdrop, setBackdrop] = useState('blur')

  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

  useEffect(() => {
    if (props.size) setSize(props.size);
  }, [props.size]);

  useEffect(() => {
    if (props.backdrop) setBackdrop(props.backdrop);
  }, [props.backdrop]);

  //? Functions to open and close the popup
  function handleOpen () {onOpen();}
  function handleClose () {
    props.handleClosePopup()
    onClose()
}

    useEffect(() => {
        if(props.opened) handleOpen()
        else handleClose()
    }, [props.opened])

  return (
    <>
      <Modal 
        size={size}
        isOpen={isOpen}
        onClose={handleClose}
        backdrop={backdrop}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
              <ModalBody className="overflow-y-scroll default-scrollbar flex fle-col items-center">
                {props.children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => handleClose()}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}