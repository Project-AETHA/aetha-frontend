import {
    Button,
    Card,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure
} from "@nextui-org/react";
import { useState } from "react";
import useGet from "@/hooks/useGet.jsx"
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import axios from "axios";
import {toast} from "sonner";
export default function SubscriptionTiers({ novelId }) {

    const {
        isLoading,
        data,
        isError,
        error,
        isFetching,
        refetch
    } = useGet({ url: `/api/subscription/get-tiers/${novelId}`, queryKey: "subTiers", params: { novelId } });

    const handleEditTier = (tier) => {
        setData(tier)
        onOpenEditTierModal()
    };

    const [formData, setFormData] = useState({
        [`tier_name`]: "",
        [`tier_description`]: "",
        [`tier_price`]: 0.0,
        [`tier_features`]: "",
    });

    function setData(tierNumber) {
        const prefix = `tier${tierNumber}_`;
        setFormData({
            tier_number: tierNumber,
            [`tier_name`]: data[`${prefix}name`],
            [`tier_description`]: data[`${prefix}description`],
            [`tier_price`]: data[`${prefix}price`],
            [`tier_features`]: data[`${prefix}features`].join('\n'),
        });
    }

    const { isOpen: isEditTierModalOpen, onOpen: onOpenEditTierModal, onClose: onCloseEditTierModal } = useDisclosure();

    const handleSaveTier = async () => {
        const prefix = `tier${formData.tier_number}_`;
        data[`${prefix}name`] = formData.tier_name;
        data[`${prefix}description`] = formData.tier_description;
        data[`${prefix}price`] = formData.tier_price;
        data[`${prefix}features`] = formData.tier_features.split("\n");

        onCloseEditTierModal();

        const response = await axios.put(`/api/subscription/edit-tiers/${novelId}`, data)
        if(response.status === 200) {
            if(response.data.code === "00") {
                toast.success("Tier updated successfully")
            } else {
                toast.error("Tier failed to update")
            }
        } else {
            toast.error("Unknown error occurred", {
                description: response.statusText
            })
        }
    };

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Subscription Tiers</h2>

            {isLoading && (<LoadingComponent />)}
            {!isLoading && isError && (<div>{error}</div>)}
            {!isLoading && !isError && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        className="p-6 max-w-[270px] shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-4">{data.tier1_name}</h3>
                        <p className="text-sm truncate max-w-full overflow-hidden whitespace-nowrap mb-2">🟣 {data.tier1_description}</p>
                        <ul className="list-none list-inside mb-6">
                            {data.tier1_features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="text-gray-600">✓ {feature}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mt-auto mb-2">
                            <div>
                                <p className="font-bold flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier1_price).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-gray-500">per month</p>
                            </div>
                            <div>
                                <p className="font-bold text-right flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier1_price * 11).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-right text-gray-500">per year</p>
                            </div>
                        </div>
                        <Button auto color="secondary" onPress={() => handleEditTier(1)} className="w-full mt-auto"
                                variant="flat">Edit Tier</Button>
                    </Card>

                    <Card
                        className="p-6 max-w-[270px] shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-4">{data.tier2_name}</h3>
                        <p className="text-sm truncate max-w-full overflow-hidden whitespace-nowrap mb-2">🟣 {data.tier2_description}</p>
                        <ul className="list-none list-inside mb-6">
                            {data.tier2_features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="text-gray-600">✓ {feature}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mt-auto mb-2">
                            <div>
                                <p className="font-bold flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier2_price).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-gray-500">per month</p>
                            </div>
                            <div>
                                <p className="font-bold text-right flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier2_price * 11).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-right text-gray-500">per year</p>
                            </div>
                        </div>
                        <Button auto color="secondary" onPress={() => handleEditTier(2)} className="w-full mt-auto"
                                variant="flat">Edit Tier</Button>
                    </Card>

                    <Card
                        className="p-6 max-w-[270px] shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-4">{data.tier3_name}</h3>
                        <p className="text-sm truncate max-w-full overflow-hidden whitespace-nowrap mb-2">🟣 {data.tier3_description}</p>
                        <ul className="list-none list-inside mb-6">
                            {data.tier3_features.slice(0,3).map((feature, i) => (
                                <li key={i} className="text-gray-600">✓ {feature}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mt-auto mb-2 gap-2">
                            <div>
                                <p className="font-bold flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier3_price).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-gray-500">per month</p>
                            </div>
                            <div>
                                <p className="font-bold text-right flex flex-col">
                                    <span className="text-sm">LKR</span>
                                    <span className="text-2xl">{(data.tier3_price * 11).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-right text-gray-500">per year</p>
                            </div>
                        </div>
                        <Button auto color="secondary" onPress={() => handleEditTier(3)} className="w-full mt-auto"
                                variant="flat">Edit Tier</Button>
                    </Card>
                </div>
            )}

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
        </div>
    );
}