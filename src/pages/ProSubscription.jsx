import {Card, CardHeader, CardBody, CardFooter, Tabs, Tab} from '@nextui-org/react';

function ProSubscription () {
    return (
        <div className="alt-container p-4 bg-white rounded-lg">
            <h1>Pro Subscription</h1>

            <Tabs aria-label="Options">
                <Tab key="reader_subs" title="Reader">
                    <div className="flex gap-4 items-center justify-center bg-blue-800">
                        <Card className="shadow !p-0 !rounded-md w-[250px] hover:scale-105">
                            <CardHeader className="flex-col items-center bg-amber-300 !rounded-t-md">
                                <h4 className="font-bold text-2xl">Free</h4>
                            </CardHeader>
                            <CardBody
                                className="overflow-visible text-black flex-col items-center justify-center gap-4 py-4">
                                <div className="flex w-fit items-center">
                                    <h1 className="text-2xl font-bold">$0</h1>
                                    <span>/month</span>
                                </div>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                            </CardBody>
                            <CardFooter className="flex justify-center bg-gray-100 !rounded">
                                <button className="bg-amber-300 text-white p-2 rounded-md">Subscribe</button>
                            </CardFooter>
                        </Card>

                        <Card radius="lg" className="shadow !p-0 !rounded-md w-[250px] hover:scale-110 scale-105">
                            <CardHeader className="flex-col items-center bg-blue-500 !rounded-t-md">
                                <h4 className="font-bold text-2xl">Standard</h4>
                            </CardHeader>
                            <CardBody
                                className="overflow-visible text-black flex-col items-center justify-center gap-4 py-4">
                                <div className="flex w-fit items-center">
                                    <h1 className="text-2xl font-bold">$5</h1>
                                    <span>/month</span>
                                </div>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                            </CardBody>
                            <CardFooter className="flex justify-center bg-gray-100 !rounded">
                                <button className="bg-blue-500 text-white p-2 rounded-md">Subscribe</button>
                            </CardFooter>
                        </Card>

                        <Card className="shadow !p-0 !rounded-md w-[250px] hover:scale-105">
                            <CardHeader className="flex-col items-center bg-green-500 !rounded-t-md">
                                <h4 className="font-bold text-2xl">Premium</h4>
                            </CardHeader>
                            <CardBody
                                className="overflow-visible text-black flex-col items-center justify-center gap-4 py-4">
                                <div className="flex w-fit items-center">
                                    <h1 className="text-2xl font-bold">$10</h1>
                                    <span>/month</span>
                                </div>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                            </CardBody>
                            <CardFooter className="flex justify-center bg-gray-100 !rounded">
                                <button className="bg-green-500 text-white p-2 rounded-md">Subscribe</button>
                            </CardFooter>
                        </Card>
                    </div>
                </Tab>
                <Tab key="writer_subs" title="Writer">
                    <div className="flex gap-4 items-center justify-center bg-red-800">
                        <Card className="shadow !p-0 !rounded-md w-[250px] hover:scale-105">
                            <CardHeader className="flex-col items-center bg-amber-300 !rounded-t-md">
                                <h4 className="font-bold text-2xl">Free</h4>
                            </CardHeader>
                            <CardBody
                                className="overflow-visible text-black flex-col items-center justify-center gap-4 py-4">
                                <div className="flex w-fit items-center">
                                    <h1 className="text-2xl font-bold">$0</h1>
                                    <span>/month</span>
                                </div>
                                {/*<SubsFreeIcon />*/}
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                                <p>Content</p>
                            </CardBody>
                            <CardFooter className="flex justify-center bg-gray-100 !rounded">
                                <button className="bg-amber-300 text-white p-2 rounded-md">Subscribe</button>
                            </CardFooter>
                        </Card>
                    </div>
                </Tab>
            </Tabs>


        </div>
    )
}

export default ProSubscription