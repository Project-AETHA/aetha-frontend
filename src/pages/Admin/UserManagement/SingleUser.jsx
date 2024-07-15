import React from 'react'
import {
    Image,
    Chip,
    Input
} from "@nextui-org/react";
import { EditIcon } from '../../../components/common/icons/EditIcon';


function SingleUser() {
    return (
        <>
            <div className='min-h-[calc(100dvh-65px)]  overflow-hidden bg-slate-100 px-3 pt-6 flex justify-center'>
                <div className='flex-col '>
                    <div className='flex justify-center items-center'>
                        <Image

                            width={100}
                            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                            alt="NextUI Album Cover"
                            className="m-5"
                        />
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <Chip
                            variant="flat"
                            color="secondary"
                            radius='sm'


                        >
                            Reader
                        </Chip>
                        <Chip
                            variant="flat"
                            color="primary"
                            radius='sm'
                        >
                            Active
                        </Chip>
                    </div>

                    <div className='w-full max-w-md bg-red-100 p-5 my-4 flex items-center justify-center'>
                        <Button isIconOnly variant="flat" color="success" className="capitalize" size="sm">
                            <EditIcon />
                        </Button>
                        <form className='grid grid-cols-1 gap-4'>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">Username:</span>
                                <Input type="text" variant="flat" size='sm' className="flex-grow" />
                            </div>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">Email:</span>
                                <Input type="email" variant="flat" size='sm' className="flex-grow" />
                            </div>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">First Name:</span>
                                <Input type="text" variant="flat" size='sm' className="flex-grow" />
                            </div>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">Last Name:</span>
                                <Input type="text" variant="flat" size='sm' className="flex-grow" />
                            </div>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">Birthday:</span>
                                <Input type="date" variant="flat" size='sm' className="flex-grow" />
                            </div>
                            <div className="flex items-center">
                                <span className="w-32 text-black-2">Gender:</span>
                                <Input type="text" variant="flat" size='sm' className="flex-grow" />
                            </div>
                        </form>
                    </div>
                </div>



            </div>
        </>
    )
}

export default SingleUser