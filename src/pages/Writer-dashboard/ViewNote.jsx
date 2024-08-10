import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";
import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import {Button, Input} from "@nextui-org/react";

export default function ViewNote () {
    const { noteId } = useParams()

    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/notes/update-note", {
                id: noteId,
                title,
                content
            });

            if (response.status === 200) {
                if (response.data.code === "00") {
                    console.log("Note created successfully");
                    alert("Note Updated Successfully");
                } else {
                    console.log("Error updating note");
                    console.log(response)
                }
            } else {
                console.log("Error : Server Error");
            }
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    async function getData() {
        const response = await axios.get("http://localhost:8080/api/notes/get-single-note/" + noteId);

        if (response.status === 200) {
            if (response.data.code === "00") {
                setTitle(response.data.content.title)
                setContent(response.data.content.content)
            }
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <form className="alt-container px-2 pb-4 h-[calc(100vh-110px)]" onSubmit={handleSubmit}>
            <div className="rounded p-4 flex flex-col gap-4 items-center justify-start bg-foreground-50">

                <div className="w-full flex flex-col justify-center gap-2">
                    <p className="text-sm text-foreground-900">Title</p>
                    <Input
                        key="title"
                        type="text"
                        description="Enter the title of your poem"
                        variant="faded"
                        className="text-foreground-900 z-1"
                        isInvalid={false}
                        errorMessage="Please enter a valid title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="w-full min-h-[300px] flex flex-col justify-center grow gap-2">
                    <p className="text-sm text-foreground-900">Content</p>
                    <ReactQuill className="text-editor" theme="snow" value={content} onChange={setContent}/>
                </div>

                <div className="w-full flex justify-center gap-2">
                    <Button type="submit" variant="flat" color="primary" className="text-sm">Save</Button>
                    <Button type="button" variant="flat" color="danger" className="text-sm"
                            onClick={() => navigate("/author/notes")}>Discard</Button>
                </div>
            </div>
        </form>
    )
}