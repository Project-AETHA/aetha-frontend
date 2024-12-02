import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Chip,
} from "@nextui-org/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";
import { RiShareForwardFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";





const Poem = ({ user, duration, title, content, tags, followers, upVote, downVote, poemId }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [upVoting, setUpVoting] = useState(false)
    const [downVoting, setDownVoting] = useState(false)
    const [Fav, setFav] = useState(false)

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [upvoteCount, setUpvoteCount] = useState(upVote)
    const [downvoteCount, setDownvoteCount] = useState(downVote)

    async function handleUpvote() {
        try {
            if (!downVoting) {
                let response;

                if (!upVoting) {
                    // Increment upvote
                    response = await axios.put(`/api/poems/update/upvote/${poemId}?increment=true`);
                    if (response.status === 200 && response.data.code === "00") {
                        setUpvoteCount((prev) => prev + 1);
                    }
                } else {
                    // Decrement upvote
                    response = await axios.put(`/api/poems/update/upvote/${poemId}?increment=false`);
                    if (response.status === 200 && response.data.code === "00") {
                        setUpvoteCount((prev) => prev - 1);
                    }
                }

                // Toggle the upvote state
                setUpVoting(!upVoting);
            }
        } catch (error) {
            console.error("Failed to update upvote:", error);
        }
    }

    async function handleDownvote() {
        try {
            if (!upVoting) {
                let response;

                if (!downVoting) {
                    // Increment downvote
                    response = await axios.put(`/api/poems/update/downvote/${poemId}?increment=true`);
                    if (response.status === 200 && response.data.code === "00") {
                        setDownvoteCount((prev) => prev + 1);
                    }
                } else {
                    // Decrement downvote
                    response = await axios.put(`/api/poems/update/downvote/${poemId}?increment=false`);
                    if (response.status === 200 && response.data.code === "00") {
                        setDownvoteCount((prev) => prev - 1);
                    }
                }

                // Toggle the downvote state
                setDownVoting(!downVoting);
            }
        } catch (error) {
            console.error("Failed to update downvote:", error);
        }
    }

    async function handleFavourites() {
        try {
            let response;
            if (!Fav) {  // Use Fav instead of fav
                response = await axios.post(`/api/fav/poem/${poemId}?setFav=true`);
            } else {
                response = await axios.post(`/api/fav/poem/${poemId}?setFav=false`);
            }
            setFav(!Fav);  // Toggle Fav state
    
        } catch (error) {
            console.error("Failed to add favourites:", error);
        }
    }
    


    return (
        <>
            <Card className="my-1" key={title}>
                <CardHeader className="justify-between px-4">
                    <div>
                        <div className='flex gap-5'>
                            <Avatar isBordered radius="full" size="sm" src={`https://ik.imagekit.io/aetha/${user.image}`} />
                            <div className="flex-col  gap-4 items-start justify-center">
                                <div className='flex gap-4'>
                                    <h4 className="text-small font-semibold text-default-600">{user.displayName}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">{duration}</h5>
                                </div>
                                <div className='flex gap-1'>
                                    <p className="font-semibold text-default-400 text-small">{followers || 10}</p>
                                    <p className="text-default-400 text-small">Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </CardHeader>

                <CardBody className="px-3 py-0 text-small mx-1">
                    <hr className="" />
                    <div className='flex gap-2  mt-1 mb-2'>

                        {tags && tags.map(tag => (
                            <Chip radius="sm" variant='flat' size="sm" color={tag.color}>{tag.text}</Chip>
                        ))}
                    </div>

                    <div className='font-bold mb-2'>{title}</div>

                    <p>
                        {content}
                    </p>

                </CardBody>
                <hr className="mt-4 mx-4" />
                <CardFooter className="gap-3 mx-1">

                    <div className='flex justify-between w-full'>
                        <div className="flex gap-6">

                            <div className='flex gap-2 select-none'>
                                <FaArrowAltCircleUp className={`${upVoting ? "text-green-400" : ""} hover:cursor-pointer`} onClick={handleUpvote} size={18} />
                                <p className="text-default-400 text-small">{upvoteCount}</p>
                                <FaArrowAltCircleDown className={`${downVoting ? "text-red-400" : ""} hover:cursor-pointer`} onClick={handleDownvote} size={18} />
                            </div>

                            <div className="hover:cursor-pointer" onClick={handleFavourites}>
                                {Fav ? (
                                    <FaHeart className="text-pink-500" size={18} />
                                ) : (
                                    <FiHeart size={18} />
                                )}
                            </div>


                            <div className='flex gap-2'>
                                <FaCommentDots size={18} />
                                <p className="text-default-400 text-small">172k</p>
                            </div>
                        </div>

                        <div className='flex gap-1 hover:cursor-pointer' onClick={onOpen}>
                            <RiShareForwardFill size={22} />
                            <p className="text-default-400 text-small">Share</p>
                        </div>
                    </div>


                </CardFooter>
            </Card>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Share Poem</ModalHeader>
                            <ModalBody>
                                <p>{window.location.href}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => navigator.clipboard.writeText(window.location.href)} >
                                    Copylink
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Poem