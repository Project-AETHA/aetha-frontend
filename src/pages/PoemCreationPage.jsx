import {Input, Button} from "@nextui-org/react";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PoemCreationPage () {

    const [value, setValue] = useState('');

    return (
        <div className="alt-container px-2 pb-4 h-full">
            <div className="h-full rounded overflow-auto p-4 flex flex-col gap-4 items-center justify-start bg-foreground-50">
                <h1 className="text-3xl font-bold text-foreground-900">Create a Poem</h1>
                <p className="text-foreground-900">Write your poem here</p>

                <div className="w-full flex flex-col justify-center gap2">
                    <p className="text-sm text-foreground-900">Title</p>
                    <Input
                        key="title"
                        type="text"
                        description="Enter the title of your poem"
                        variant="faded"
                        className="text-foreground-900"
                        isInvalid={false}
                        errorMessage="Please enter a valid email"
                    />
                </div>

                <div className="w-full min-h-[400px] flex flex-col justify-center grow gap-2">
                    <p className="text-sm text-foreground-900">Content</p>
                    <ReactQuill className="text-editor" theme="snow" value={value} onChange={setValue}/>
                </div>

                <div className="w-full  flex justify-center gap-2">
                    <Button variant="solid" color="primary" className="text-sm text-white">Save as a Draft</Button>
                    <Button variant="solid" color="danger" className="text-sm text-white">Discard</Button>
                    <Button variant="solid" color="success" className="text-sm text-white">Publish</Button>
                </div>
            </div>
        </div>
    )
}

export default PoemCreationPage