import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Button,
    Chip,
} from "@nextui-org/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";
import { RiShareForwardFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";


const Poem = ({ user, duration, title, content, tags, followers }) => {
    const [isFollowed, setIsFollowed] = React.useState(false);

    console.log(user)

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


                    <div className="flex gap-2 items-center">


                        <Button
                            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                            color="primary"
                            radius="full"
                            size="sm"
                            variant={isFollowed ? "bordered" : "solid"}
                            onPress={() => setIsFollowed(!isFollowed)}
                        >
                            {isFollowed ? "Unfollow" : "Follow"}
                        </Button>
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

                            <div className='flex gap-2'>
                                <FaArrowAltCircleUp size={18} />
                                <p className="text-default-400 text-small">18.2k</p>
                                <FaArrowAltCircleDown size={18} />

                            </div>

                            <FiHeart size={18} />

                            <div className='flex gap-2'>
                                <FaCommentDots size={18} />
                                <p className="text-default-400 text-small">172k</p>
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            <RiShareForwardFill size={22} />
                            <p className="text-default-400 text-small">Share</p>
                        </div>
                    </div>


                </CardFooter>
            </Card>
        </>
    )
}

export default Poem