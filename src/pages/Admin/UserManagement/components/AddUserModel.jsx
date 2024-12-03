import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, DatePicker, RadioGroup, Radio, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/common/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/common/icons/EyeSlashFilledIcon";
import axios from "axios";
import { toast } from "sonner";

const genderOptions = [
  { key: "male", label: "Male" },
  { key: "female", label: "Female" },
  { key: "other", label: "Other" },
  { key: "not-preferred", label: "Prefer not to say" },
];

export default function AddUserModel({ isAddNewOpen, onAddNewOpenChange }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: null,
    gender: "Prefer not to say",
    role: "READER",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleOnChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/api/user/add-user", formData);

      if (response.status === 200 && response.data.code === "00") {
        toast.success("User added successfully!");
        onAddNewOpenChange(false);
      } else {
        throw new Error(response.data.message || "Failed to add user");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while adding the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isAddNewOpen}
      onOpenChange={onAddNewOpenChange}
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
                Add New User
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-3">
                <Input
                  isRequired
                  type="text"
                  variant="faded"
                  label="First Name"
                  placeholder="Madhusha"
                  labelPlacement="outside"
                  value={formData.firstname}
                  onChange={(e) => handleOnChange("firstname", e.target.value)}
                />
                <Input
                  isRequired
                  type="text"
                  variant="faded"
                  label="Last Name"
                  placeholder="Hansini"
                  labelPlacement="outside"
                  value={formData.lastname}
                  onChange={(e) => handleOnChange("lastname", e.target.value)}
                />
              </div>
              <Input
                isRequired
                type="email"
                variant="faded"
                label="Email"
                placeholder="hansi@gmail.com"
                labelPlacement="outside"
                value={formData.email}
                onChange={(e) => handleOnChange("email", e.target.value)}
              />
              <div className="flex gap-3">
                <Input
                  isRequired
                  label="Password"
                  variant="faded"
                  placeholder="Enter password"
                  labelPlacement="outside"
                  type={isVisible ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleOnChange("password", e.target.value)}
                  endContent={
                    <button onClick={toggleVisibility} aria-label="toggle password visibility">
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
                <Input
                  isRequired
                  label="Confirm Password"
                  variant="faded"
                  placeholder="Re-enter password"
                  labelPlacement="outside"
                  type={isVisible ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleOnChange("confirmPassword", e.target.value)}
                />
              </div>
              <div className="flex gap-3">
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
                Add User
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