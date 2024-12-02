import { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, RadioGroup, Radio } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/common/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/common/icons/EyeSlashFilledIcon";
import axios from "axios";
import { toast } from "sonner";

export default function EditUserModal({ isEditOpen, onEditOpenChange, onEditOpen, user }) {
    const [formData, setFormData] = useState({
        username: user?.username || '',
        email: user?.email || '',
        role: user?.role || '',
        status: user?.status || '',
        firstname: user?.firstname || '',
        lastname: user?.lastname || '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username,
                email: user.email,
                role: user.role,
                status: user.status,
                firstname: user.firstname,
                lastname: user.lastname,
            });
        }
    }, [user]);

  const [loading, setLoading] = useState(false);

  const handleOnChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    setLoading(true);

    try {
        console.log("Data")
      const response = await axios.put(`/api/user/update/${user.email}`, formData);
      console.log(response)

      if (response.status === 200) {
        toast.success("User updated successfully!");
        onEditOpenChange(false);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while updating the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isEditOpen}
      onOpenChange={onEditOpenChange}
      backdrop="blur"
      classNames={{
        backdrop: "bg-neutral-900/50 backdrop-blur-sm",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-4 items-center">
              <div className="text-lg font-semibold bg-blue-500 w-full m-5 p-1 text-white">
                Edit User Details
              </div>
            </ModalHeader>
            <ModalBody>
              <Input
                type="text"
                variant="faded"
                label="Username"
                placeholder="Enter username"
                labelPlacement="outside"
                value={formData.username}
                onChange={(e) => handleOnChange("username", e.target.value)}
                color="primary"
              />
              <Input
                type="email"
                variant="faded"
                label="Email"
                placeholder="Enter email"
                labelPlacement="outside"
                value={formData.email}
                onChange={(e) => handleOnChange("email", e.target.value)}
                color="primary"
              />
              <div className="flex gap-3">
                <Input
                  type="text"
                  variant="faded"
                  label="First Name"
                  placeholder="Enter first name"
                  labelPlacement="outside"
                  value={formData.firstname}
                  onChange={(e) => handleOnChange("firstname", e.target.value)}
                  color="primary"
                />
                <Input
                  type="text"
                  variant="faded"
                  label="Last Name"
                  placeholder="Enter last name"
                  labelPlacement="outside"
                  value={formData.lastname}
                  onChange={(e) => handleOnChange("lastname", e.target.value)}
                  color="primary"
                />
              </div>
              <div>
                <RadioGroup
                  value={formData.role}
                  onChange={(value) => handleOnChange("role", value)}
                >
                  <div className="flex gap-5 justify-around">
                    <Radio value="READER">Reader</Radio>
                    <Radio value="WRITER">Writer</Radio>
                  </div>
                </RadioGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" isLoading={loading} onPress={handleSave}>
                Save
              </Button>
              <Button color="secondary" onPress={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
