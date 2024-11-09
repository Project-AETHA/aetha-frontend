import { Input, Button, Checkbox } from "@nextui-org/react";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { toast } from "sonner";

// TODO - Take dynamically from the backend
const genreOptions = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Horror",
    "SciFi",
    "Fantasy",
    "Romance",
    "Historical",
    "Adventure",
    "Young_Adult",
    "New_Adult",
    "Crime",
    "Magical",
    "Satire",
    "Gothic",
];

function CreatePoem() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [genres, setGenres] = useState([]);

    // ? Error states
    const [genresError, setGenresError] = useState("");

    const handleGenreChange = (genre) => {
        setGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    async function handleSubmit() {

        const response = await axios.post("/api/poems/add-poem", {
            title, content, genres
        })

        if (response.status === 200) {
            toast.success("Poem created successfully")
        } else {
            toast.error("Error", { description: response.data.message })
        }

        console.log(response)

        console.log({ title, content, genres })
    }

    return (
        <div className="alt-container px-2 pb-4 h-full">
            <div className="rounded p-4 flex flex-col gap-4 items-center justify-start bg-foreground-50">
                <h1 className="text-3xl font-bold text-foreground-900">Create a Poem</h1>
                <p className="text-foreground-900">Write your poem here</p>

                <div className="w-full flex flex-col justify-center gap2">
                    <p className="text-sm text-foreground-900">Title</p>
                    <Input
                        key="title"
                        type="text"
                        description="Enter the title of your poem"
                        variant="faded"
                        className="text-foreground-900 z-1"
                        isInvalid={false}
                        errorMessage="Please enter a valid email"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-black">Genres</label>
                    <div className="flex flex-wrap gap-2">
                        {genreOptions.map((genre) => (
                            <Checkbox
                                key={genre}
                                size="sm"
                                isSelected={genres.includes(genre)}
                                onChange={() => {
                                    handleGenreChange(genre);
                                    setGenresError("");
                                }}
                            >
                                {genre}
                            </Checkbox>
                        ))}
                        {genresError && (
                            <span className="text-red-500 text-sm">{genresError}</span>
                        )}
                    </div>
                </div>

                <div className="w-full min-h-[400px] flex flex-col justify-center grow gap-2">
                    <p className="text-sm text-foreground-900">Content</p>
                    <ReactQuill className="text-editor" theme="snow" value={content} onChange={setContent} />
                </div>

                <div className="w-full  flex justify-center gap-2">
                    <Button variant="flat" color="primary" className="text-sm">Save as a Draft</Button>
                    <Button variant="flat" color="danger" className="text-sm">Discard</Button>
                    <Button variant="flat" color="success" className="text-sm" onClick={handleSubmit}>Publish</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePoem