import { Button, Card, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "@/hooks/useGet.jsx"
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import EditChapterModel from "./EditChapterModel.jsx"

import axios from "axios";
import {toast} from "sonner";

export default function SubscriptionTiers({novelId, editor = true}) {

    const {
        isLoading,
        data,
        isError,
        error
    } = useGet({url: `/api/subscription/get-tiers/${novelId}`, queryKey: "subTiers", params: {novelId}});

    const navigate = useNavigate();

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

    async function handleSubscribe(tier, amount) {
        if (confirm(`Are you sure you want to subscribe to this tier?`)) {
            const response = await axios.post(`/api/subscription/create`, {
                novelId: data.novel.id,
                subscriptionTier: tier,
                amount: amount
            })

            if (response.status === 200) {
                switch (response.data.code) {
                    case "00":
                        toast.success("Subscribed successfully")
                        navigate(`/novels/${data.novel.id}`)
                        break;
                    case "05":
                        toast.error("Subscribing failed", {
                            description: response.data.content || response.data.message
                        })
                        break;
                    default:
                        toast.error("Error Occurred | Try Again", {
                            description: response.data.content || response.data.message
                        })
                        break;
                }
            } else {
                toast.error("Error Occurred | Try Again", {
                    description: response.data.content || response.data.message
                })
            }
        }

    }

    const {isOpen: isEditTierModalOpen, onOpen: onOpenEditTierModal, onClose: onCloseEditTierModal} = useDisclosure();


    const handleSaveTier = async () => {
        const prefix = `tier${formData.tier_number}_`;
        data[`${prefix}name`] = formData.tier_name;
        data[`${prefix}description`] = formData.tier_description;
        data[`${prefix}price`] = formData.tier_price;
        data[`${prefix}features`] = formData.tier_features.split("\n");

        onCloseEditTierModal();

        const response = await axios.put(`/api/subscription/edit-tiers/${novelId}`, data)
        if (response.status === 200) {
            if (response.data.code === "00") {
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
        <div className="mb-8 flex w-full justify-center">

            {isLoading && (<LoadingComponent/>)}
            {!isLoading && isError && (<div>{error}</div>)}
            {!isLoading && !isError && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((tierIndex) => {
                        const prefix = `tier${tierIndex}_`;
                        return (
                            <Card
                                key={tierIndex}
                                className="p-6 select-none max-w-[270px] shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-4">{data[`${prefix}name`]}</h3>
                                <p className="text-sm truncate max-w-full overflow-hidden whitespace-nowrap mb-2">
                                    🟪 {data[`${prefix}description`]}
                                </p>
                                <ul className="list-none list-inside mb-6 ml-2">
                                    {data[`${prefix}features`].slice(0, 3).map((feature, i) => (
                                        <li key={i} className="text-gray-600">✓ {feature}</li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center mt-auto mb-2">
                                    <div>
                                        <p className="font-bold flex flex-col">
                                            <span className="text-sm">LKR</span>
                                            <span className="text-2xl">{(data[`${prefix}price`]).toFixed(2)}</span>
                                        </p>
                                        <p className="text-sm text-gray-500">per month</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-right flex flex-col">
                                            <span className="text-sm">LKR</span>
                                            <span className="text-2xl">{(data[`${prefix}price`] * 11).toFixed(2)}</span>
                                        </p>
                                        <p className="text-sm text-right text-gray-500">per year</p>
                                    </div>
                                </div>
                                {editor ? (
                                    <Button auto color="secondary"
                                            onPress={() => handleEditTier(tierIndex)}
                                            className="w-full mt-auto" variant="flat"
                                    >
                                        Edit Tier
                                    </Button>
                                ) : (
                                    <Button auto color="secondary"
                                            onPress={() => handleSubscribe(tierIndex, data[`${prefix}price`])}
                                            className="w-full mt-auto" variant="flat"
                                    >
                                        Subscribe
                                    </Button>
                                )}
                            </Card>
                        );
                    })
                    }
                </div>
            )}

            {editor && (
                <EditChapterModel
                    handleSaveTier={handleSaveTier}
                    isEditTierModalOpen={isEditTierModalOpen}
                    onCloseEditTierModal={onCloseEditTierModal}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

        </div>
    );
}