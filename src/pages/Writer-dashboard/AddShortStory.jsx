import { useState } from "react";
import { Card, Input, Checkbox, Button, Spacer, Textarea } from "@nextui-org/react";
import { Plus, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ImageOnlineUpload from "@/components/common/ImageOnlineUpload.jsx";

const CreateShortStory = () => {
    const navigate = useNavigate();

    // Form state
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);
    const [custom_tags, setCustom_tags] = useState([]);
    const [newCustomTag, setNewCustomTag] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [contentWarning, setContentWarning] = useState([]);
    const [contentOwnership, setContentOwnership] = useState("");

    // Error states
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");
    const [genresError, setGenresError] = useState("");
    const [tagsError, setTagsError] = useState("");
    const [coverImageError, setCoverImageError] = useState("");
    const [contentWarningError, setContentWarningError] = useState("");
    const [contentOwnershipError, setContentOwnershipError] = useState("");

    // Options for form fields
    const genreOptions = ["Fiction", "Non_Fiction", "Mystery", "Thriller", "Horror", "Sci_Fi", "Fantasy", "Romance", "Humor"];
    const tagOptions = ["Flash_Fiction", "Twist_Ending", "Emotional", "Thought_Provoking"];
    const contentWarningOptions = ["Profanity", "Sexual_Content", "Graphic_Violence", "Sensitive_Content"];
    const ownershipOptions = ["Original_Work", "Inspired_Work"];

    const tempFileName = Math.random().toString(36).substring(2, 15);

    // Event handlers
    const handleGenreChange = (genre) => {
        setGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
        setGenresError("");
    };

    const handleTagChange = (tag) => {
        setTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
        setTagsError("");
    };

    const handleContentWarningChanges = (warning) => {
        setContentWarning((prev) =>
            prev.includes(warning) ? prev.filter((t) => t !== warning) : [...prev, warning]
        );
        setContentWarningError("");
    };

    const handleAddCustomTag = () => {
        if (newCustomTag.trim() !== "" && !custom_tags.includes(newCustomTag.trim())) {
            setCustom_tags([...custom_tags, newCustomTag.trim()]);
            setNewCustomTag("");
        }
    };

    const handleRemoveCustomTag = (tagToRemove) => {
        setCustom_tags(custom_tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;

        // Validation checks
        if (!title) {
            setTitleError("Title is required.");
            hasError = true;
        }

        if (!content) {
            setContentError("Story content is required.");
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

        if (contentWarning.length <= 0) {
            setContentWarningError("At least one content warning is required.");
            hasError = true;
        }

        if (!contentOwnership) {
            setContentOwnershipError("Content ownership must be specified.");
            hasError = true;
        }

        if (hasError) {
            toast.error("Please fill all the required fields");
            return;
        }

        try {
            const response = await axios.post("/api/shortstory/create", {
                title,
                content,
                genres,
                tags,
                custom_tags,
                coverImage,
                contentWarning,
                contentOwnership
            });

            if (response.status === 200) {
                switch (response.data.code) {
                    case "00":
                        toast.success(response.data.message);
                        navigate("/author/short-stories");
                        break;
                    case "05":
                        toast.error(response.data.message);
                        break;
                    case "06":
                        toast.warning(response.data.message);
                        break;
                    case "07":
                        if (response.data.errors) {
                            const errorSetters = {
                                title: setTitleError,
                                content: setContentError,
                                genres: setGenresError,
                                tags: setTagsError,
                                coverImage: setCoverImageError,
                                contentWarning: setContentWarningError,
                                contentOwnership: setContentOwnershipError
                            };
                            Object.entries(response.data.errors).forEach(([key, value]) => {
                                if (errorSetters[key]) {
                                    errorSetters[key](value);
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
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error occurred when submitting form");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1">
                <div className="p-2">
                    <Card className="p-8" shadow="none" radius="sm">
                        <h2 className="text-xl font-semibold mb-4 text-default-600">New Short Story Submission</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <h3 className="text-default-700 text-small">Cover Image</h3>
                                <ImageOnlineUpload setimage={setCoverImage} fileName={tempFileName} />
                                {!coverImage && coverImageError && (
                                    <span className="text-red-500 text-sm">{coverImageError}</span>
                                )}
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Title</h3>
                                <Input
                                    variant="bordered"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        setTitleError("");
                                    }}
                                    placeholder="Title of Short Story"
                                    fullWidth
                                    isInvalid={!!titleError}
                                    errorMessage={titleError}
                                />
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Genres</h3>
                                <div className="flex flex-wrap gap-2">
                                    {genreOptions.map((genre) => (
                                        <Checkbox
                                            key={genre}
                                            size="sm"
                                            isSelected={genres.includes(genre)}
                                            onChange={() => handleGenreChange(genre)}
                                        >
                                            {genre.replace('_', ' ')}
                                        </Checkbox>
                                    ))}
                                </div>
                                {genresError && (
                                    <span className="text-red-500 text-sm">{genresError}</span>
                                )}
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tagOptions.map((tag) => (
                                        <Checkbox
                                            key={tag}
                                            size="sm"
                                            isSelected={tags.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                        >
                                            {tag.replace('_', ' ')}
                                        </Checkbox>
                                    ))}
                                </div>
                                {tagsError && (
                                    <span className="text-red-500 text-sm">{tagsError}</span>
                                )}
                                <div className="mt-2">
                                    <h4 className="text-default-700 text-small mb-2">Custom Tags</h4>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {custom_tags.map((tag, index) => (
                                            <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
                                                <span className="mr-2">{tag}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveCustomTag(tag)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center max-w-72">
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
                                            <Plus size={16} />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Content Warning</h3>
                                <div className="flex flex-wrap gap-2">
                                    {contentWarningOptions.map((warning) => (
                                        <Checkbox
                                            key={warning}
                                            size="sm"
                                            isSelected={contentWarning.includes(warning)}
                                            onChange={() => handleContentWarningChanges(warning)}
                                        >
                                            {warning.replace('_', ' ')}
                                        </Checkbox>
                                    ))}
                                </div>
                                {contentWarningError && (
                                    <span className="text-red-500 text-sm">{contentWarningError}</span>
                                )}
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Content Ownership</h3>
                                <div className="flex flex-wrap gap-2">
                                    {ownershipOptions.map((option) => (
                                        <Checkbox
                                            key={option}
                                            size="sm"
                                            isSelected={contentOwnership === option}
                                            onChange={() => {
                                                setContentOwnership(option);
                                                setContentOwnershipError("");
                                            }}
                                        >
                                            {option.replace('_', ' ')}
                                        </Checkbox>
                                    ))}
                                </div>
                                {contentOwnershipError && (
                                    <span className="text-red-500 text-sm">{contentOwnershipError}</span>
                                )}
                            </div>

                            <div className="mb-4 flex flex-col gap-2">
                                <h3 className="text-default-700 text-small">Story Content</h3>
                                <Textarea
                                    value={content}
                                    onChange={(value) => {
                                        setContent(value);
                                        setContentError("");
                                    }}
                                    theme="snow"
                                    placeholder="Write your short story here..."
                                    className="text-editor2"
                                />
                                {contentError && (
                                    <span className="text-red-500 text-sm">{contentError}</span>
                                )}
                            </div>

                            <div className="mb-4 mt-4">
                                <div className="w-full flex justify-center gap-2">
                                    <Button variant="flat" color="success" type="submit" className="text-sm">
                                        Publish
                                    </Button>
                                    <Button
                                        variant="flat"
                                        color="primary"
                                        type="button"
                                        className="text-sm"
                                        onClick={() => toast.info("Save as draft functionality coming soon")}
                                    >
                                        Save as Draft
                                    </Button>
                                    <Button
                                        variant="flat"
                                        color="danger"
                                        type="button"
                                        className="text-sm"
                                        onClick={() => navigate(-1)}
                                    >
                                        Discard
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateShortStory;