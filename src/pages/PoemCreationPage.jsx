import {Input} from "@nextui-org/react";

function PoemCreationPage () {
    return (
        <div className="alt-container">
            <div className="rounded p-4 flex flex-col items-center justify-center bg-foreground-50">
                <h1 className="text-3xl font-bold text-white">Create a Poem</h1>
                <p className="text-white">Write your poem here</p>

                <Input
                    key="title"
                    type="text"
                    label="Title"
                    labelPlacement="outside-left"
                    description="Enter the title of your poem"
                    isInvalid={false}
                    errorMessage="Please enter a valid email"
                />
            </div>
        </div>
    )
}

export default PoemCreationPage