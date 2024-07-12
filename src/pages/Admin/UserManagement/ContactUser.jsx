import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

function ContactUser() {
    return (
        <>
            <div className='bg-slate-500 min-h-[calc(100dvh-65px)] grid grid-cols-12 overflow-hidden'>
                <div className='col-span-2'>
                    sidebar

                </div>
                <div className='col-span-10 bg-slate-100 px-3 pt-6 flex items-center justify-center'>
                    <Card className="w-[900px] h-[500px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">NextUI</p>
                                <p className="text-small text-default-500">nextui.org</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/nextui-org/nextui"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default ContactUser