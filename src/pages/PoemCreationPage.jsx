import {Input} from "@nextui-org/react";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PoemCreationPage () {

    const [value, setValue] = useState('');

    return (
        <div className="alt-container px-2">
            <div className="rounded p-4 flex flex-col gap-4 items-center justify-center bg-foreground-50">
                <h1 className="text-3xl font-bold text-foreground-900">Create a Poem</h1>
                <p className="text-foreground-900">Write your poem here</p>

                <Input
                    key="title"
                    type="text"
                    label="Title"
                    labelPlacement="outside-left"
                    description="Enter the title of your poem"
                    variant="faded"
                    className="text-foreground-900"
                    isInvalid={false}
                    errorMessage="Please enter a valid email"
                />

                <div className="bg-red-500 w-full">
                    <ReactQuill className="text-editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
        </div>
    )
}

export default PoemCreationPage