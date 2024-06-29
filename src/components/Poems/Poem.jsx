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

const Poem = ({ user, duration, title, content, tags, followers }) => {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <>

            <Card className="my-1" key={title}>
                <CardHeader className="justify-between mx-2">
                    <div>
                        <div className='flex gap-5'>
                            <Avatar isBordered radius="full" size="sm" src="https://nextui.org/avatars/avatar-1.png" />
                            <div className="flex-col  gap-4 items-start justify-center">
                                <div className='flex gap-4'>
                                    <h4 className="text-small font-semibold text-default-600">{user.displayName}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">{duration}</h5>
                                </div>
                                <div className='flex'>
                                    <p className="font-semibold text-default-400 text-small">{followers}</p>
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

                        {tags.map(tag => (
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
                
                    <div className="flex gap-2">
                        <Chip
                            // startContent={<CheckIcon size={18} />}
                            variant="faded"
                            radius='md'
                        >
                            Upvote
                            
                        </Chip>
                       
                        <Chip
                            // startContent={<CheckIcon size={18} />}
                            variant="faded"
                            radius='md'
                        >
                            Comment
                            
                        </Chip>

                        <Chip
                            // startContent={<CheckIcon size={18} />}
                            variant="faded"
                            radius='md'
                        >
                            Share
                            
                        </Chip>
                    </div>

                </CardFooter>
            </Card>
        </>
    )
}

export default Poem