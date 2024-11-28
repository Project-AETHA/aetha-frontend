import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea} from "@nextui-org/react";

export default function EditChapterModel({
    handleSaveTier, isEditTierModalOpen, onCloseEditTierModal, formData, setFormData
 }) {



    return (
        <Modal isOpen={isEditTierModalOpen} onClose={onCloseEditTierModal}>
            <ModalContent>
                <ModalHeader>Edit Tier: {formData.tier_name}</ModalHeader>
                <ModalBody>
                    <Input
                        label="Tier Name"
                        value={formData.tier_name || ''}
                        onChange={(e) => setFormData({...formData, tier_name: e.target.value})}
                        className="mb-4"
                    />
                    <Textarea label="Description"
                              value={formData.tier_description || ""}
                              onChange={(e) => setFormData({...formData, tier_description: e.target.value})}
                              className="mb-4"
                    />
                    <Input
                        label="Monthly Cost"
                        type="number"
                        value={formData.tier_price || 0}
                        onChange={(e) => setFormData({...formData, tier_price: parseFloat(e.target.value)})}
                        className="mb-4"
                    />
                    <Textarea label="Features (each one on new line)"
                              value={formData.tier_features || ""}
                              onChange={(e) => setFormData({...formData, tier_features: e.target.value})}
                              className="mb-4"
                    />
                    {/* Add inputs for benefits here */}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onPress={handleSaveTier}>Save Changes</Button>
                    <Button color="warning" onPress={onCloseEditTierModal}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}