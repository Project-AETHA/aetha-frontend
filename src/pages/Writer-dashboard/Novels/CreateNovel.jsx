import {useState} from "react";
import {Button, Card, Checkbox, Input, Textarea} from "@nextui-org/react";
import {Plus, X} from "lucide-react";
import axios from "axios";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";
import ImageOnlineUpload from "@/components/common/ImageOnlineUpload.jsx";

const CreateNovel = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);
    const [custom_tags, setCustom_tags] = useState([]);
    const [newCustomTag, setNewCustomTag] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [manualRelease, setManualRelease] = useState('');
    const [contentWarning, setContentWarning] = useState([]);

    // Error variables
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [synopsisError, setSynopsisError] = useState("");
    const [genresError, setGenresError] = useState("");
    const [tagsError, setTagsError] = useState("");
    const [coverImageError, setCoverImageError] = useState("");
    const [manualReleaseError, setManualReleaseError] = useState("");
    const [contentWarningError, setContentWarningError] = useState("");

    const genreOptions = ["Fiction", "Mystery", "Thriller", "Horror", "Sci_Fi", "Fantasy", "Romance", "Historical", "Adventure", "Young_Adult", "New_Adult", "Crime", "Magical", "Satire", "Gothic",];
    const tagOptions = ["Bestseller", "Award_Winner", "Popular", "New_Release", "Classic", "Recommended", "Must_Read", "Young_Adult", "Children",];
    const contentWarningOptions = ["Violence", "Sexual_Content", "Language", "Substance_Abuse", "Mental_Health"]

    const handleGenreChange = (genre) => {
        setGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    const handleTagChange = (tag) => {
        setTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleContentWarningChanges = (warning) => {
        setContentWarning((prev) =>
            prev.includes(warning) ? prev.filter((t) => t !== warning) : [...prev, warning]
        );
    };

    const handleAddCustomTag = () => {
        if (
            newCustomTag.trim() !== "" &&
            !custom_tags.includes(newCustomTag.trim())
        ) {
            setCustom_tags([...custom_tags, newCustomTag.trim()]);
            setNewCustomTag("");
        }
    };

    const handleRemoveCustomTag = (tagToRemove) => {
        setCustom_tags(custom_tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // * Due to the asynchronous nature of state updates, the error messages are not updated immediately
        // * Therefore, a local variable will be used to check for errors
        let hasError = false;

        if (!title) {
            setTitleError("Title is required.");
            hasError = true;
        }

        if (!description) {
            setDescriptionError("Description is required.");
            hasError = true;
        }

        if (!synopsis) {
            setSynopsisError("Synopsis is required.");
            hasError = true;
        }

        if (genres.length <= 0) {
            setGenresError("At least one genre is required.");
            hasError = true;
        }

        if (tags.length <= 0) {
            setTagsError("At least one tag is required.");
            hasError = true;
        }

        if (!coverImage) {
            setCoverImageError("Cover image is required.");
            hasError = true;
        }

        if (!manualRelease) {
            setManualReleaseError("Manual Release is required.");
            hasError = true;
        }

        if (contentWarning.length <= 0) {
            setContentWarningError("At least one content warning is required.");
            hasError = true;
        }

        if (hasError) {
            toast.error("Please fill all the required fields");
        } else {
            try {
                console.log({
                    title,
                    description,
                    synopsis,
                    genres,
                    tags,
                    custom_tags,
                    coverImage,
                    manualRelease,
                    contentWarning
                })
                const response = await axios.post("/api/novels/create", {
                    title,
                    description,
                    synopsis,
                    genres,
                    tags,
                    custom_tags,
                    coverImage,
                    manualRelease,
                    contentWarning
                });

                if (response.status === 200) {

                    switch (response.data.code) {
                        case "00":
                            toast.success(response.data.message);
                            navigate("/author/novels");
                            break;
                        case "05":
                            toast.error(response.data.message);
                            break;
                        case "06":
                            toast.warning(response.data.message);
                            break;
                        case "07":
                            if (response.data.errors !== null) {
                                const errorSetters = {
                                    title: setTitleError,
                                    description: setDescriptionError,
                                    synopsis: setSynopsisError,
                                    genres: setGenresError,
                                    tags: setTagsError,
                                    coverImage: setCoverImageError,
                                    manualRelease: setManualReleaseError,
                                    contentWarning: setContentWarningError,
                                };
                                Object.entries(response.data.errors).forEach(([key, value]) => {
                                    if (errorSetters[key]) {
                                        errorSetters[key](value);
                                    } else {
                                        console.log(`Unhandled error field: ${key}`);
                                    }
                                });
                            }
                            toast.error("Error", {
                                description: response.data.message
                            });
                            break;
                        default:
                            toast.error("Unknown Error", {
                                description: response.data.message
                            });
                            break;
                    }
                } else {
                    console.log("Error: " + response.data);
                    toast.error("Server Error - Not Responding");
                }
            } catch (error) {
                console.log("Error submitting form:", error);
                toast.error("Error occurred when submitting form");
            }
        }
    };

    return (
        <div className="p-4 mx-auto">
            <Card className="p-8" shadow="sm">
                <h1 className="text-2xl font-bold mb-6">Writing a Novel</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="mb-4">
                        <Input
                            isRequired
                            variant="bordered"
                            label="Title"
                            labelPlacement="outside"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                                setTitleError("");
                            }}
                            placeholder="Enter book title"
                            fullWidth
                            isInvalid={!!titleError}
                            errorMessage={titleError}
                        />
                    </div>

                    <div className="mb-4">
                        <Textarea
                            variant="bordered"
                            isRequired
                            label="Synopsis"
                            labelPlacement="outside"
                            placeholder="Enter the synopsis (summary of the main plot, characters, and key events)"
                            className="min-w-[290px] w-full lg:min-w-[820px] rounded-xl"
                            onChange={(e) => {
                                setSynopsis(e.target.value);
                                setSynopsisError("");
                            }}
                            value={synopsis}
                            isInvalid={!!synopsisError}
                            errorMessage={synopsisError}
                        />
                    </div>

                    <div className="mb-4">
                        <Textarea
                            variant="bordered"
                            isRequired
                            label="Description"
                            labelPlacement="outside"
                            placeholder="Enter your description"
                            className="min-w-[290px] w-full lg:min-w-[820px] rounded-xl"
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setDescriptionError("");
                            }}
                            value={description}
                            isInvalid={!!descriptionError}
                            errorMessage={descriptionError}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Genres</label>
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

                    {/* Genre Tags Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Tags</label>
                        <div className="flex flex-wrap gap-2">
                            {tagOptions.map((tag) => (
                                <Checkbox
                                    key={tag}
                                    size="sm"
                                    isSelected={tags.includes(tag)}
                                    onChange={() => {
                                        handleTagChange(tag);
                                        setTagsError("");
                                    }}
                                >
                                    {tag}
                                </Checkbox>
                            ))}
                            {tagsError && (
                                <span className="text-red-500 text-sm">{tagsError}</span>
                            )}
                        </div>
                    </div>

                    {/* Custom Tags Seciton */}
                    <div className="mt-2">
                        <h4 className="text-sm font-medium mb-2">Custom Tags</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {custom_tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gray-200 rounded-full px-3 py-1"
                                >
                                    <span className="mr-2">{tag}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveCustomTag(tag)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <X size={14}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center max-w-60">
                            <Input
                                size="sm"
                                placeholder="Add custom tag"
                                value={newCustomTag}
                                onChange={(e) => setNewCustomTag(e.target.value)}
                                className="mr-2"
                            />
                            <Button
                                size="sm"
                                auto
                                onClick={handleAddCustomTag}
                                type="button"
                            >
                                <Plus size={16}/>
                            </Button>
                        </div>
                    </div>

                    {/* Content Warning Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Content Warning Labels</label>
                        <div className="flex flex-wrap gap-2">
                            {contentWarningOptions.map((warning) => (
                                <Checkbox
                                    key={warning}
                                    size="sm"
                                    isSelected={contentWarning.includes(warning)}
                                    onChange={() => {
                                        handleContentWarningChanges(warning);
                                        setContentWarningError("");
                                    }}
                                >
                                    {warning}
                                </Checkbox>
                            ))}
                            {contentWarningError && (
                                <span className="text-red-500 text-sm">{contentWarningError}</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-4 flex flex-col">
                        <ImageOnlineUpload setimage={setCoverImage} fileName={Math.random().toString(36).substring(2, 15)} />
                        <h3 className="text-default-700 text-small">Cover Image</h3>
                        <input
                            type="file"
                            onChange={() => {
                                setCoverImage("imageURL");
                                setCoverImageError("");
                            }}
                        />
                        {coverImageError && (
                            <span className="text-red-500 text-sm">{coverImageError}</span>
                        )}
                    </div>

                    <div className="mb-4 flex flex-col">
                        <Input
                            type="text"
                            variant="bordered"
                            isRequired
                            label="Manual Release Date and Time"
                            labelPlacement="outside"
                            placeholder="Replace with date picker and a time picker"
                            className="min-w-[290px] w-full lg:min-w-[820px] rounded-xl"
                            onChange={(e) => {
                                setManualRelease(e.target.value);
                                setManualReleaseError("");
                            }}
                            value={manualRelease}
                            isInvalid={!!manualReleaseError}
                            errorMessage={manualReleaseError}
                        />
                    </div>

                    <Button color="secondary" type="submit" className="max-w-[160px] mx-auto">
                        Add Ebook
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default CreateNovel;