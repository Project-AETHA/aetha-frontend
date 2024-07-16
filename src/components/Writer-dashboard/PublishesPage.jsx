import {Tabs, Tab, Button} from "@nextui-org/react";

export default function PublishesPage () {

    return (
        <div className="w-full h-full p-2 bg-foreground-300">
            <div className="bg-foreground-50 w-full h-full rounded p-2">
                <p className="text-lg font-bold">Published Content</p>
                <div className="flex w-full flex-col h-full">
                    <Tabs aria-label="Options">
                        <Tab key="novels" title="Novels">
                            <div className="bg-foreground-50 p-2 rounded h-full flex flex-col gap-4">
                                <div className="border-2 rounded-lg flex justify-between items-center p-2">
                                    <p>Interested in creating content ?</p>
                                    <Button variant="flat" color="secondary" className="">Start Writing</Button>
                                </div>

                                <div className="border-2 rounded-lg flex justify-between items-center p-2">
                                    <p>All Publishes</p>

                                </div>
                            </div>
                        </Tab>
                        <Tab key="short_stories" title="Short Stories">
                            <div className="bg-blue-500 p-2 rounded h-full">
                                Section 02
                            </div>
                        </Tab>
                        <Tab key="poems" title="Poems">
                            <div className="bg-blue-500 p-2 rounded h-full">
                                Section 03
                            </div>
                        </Tab>
                        <Tab key="nisades" title="Nisades">
                            <div className="bg-blue-500 p-2 rounded h-full">
                                Section 04
                            </div>
                        </Tab>
                        <Tab key="articles" title="Articles">
                            <div className="bg-blue-500 p-2 rounded h-full">
                                Section 05
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}