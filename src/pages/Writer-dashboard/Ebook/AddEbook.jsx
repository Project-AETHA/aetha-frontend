import { useState } from "react";
import { Card, Input, Checkbox, Button, Textarea } from "@nextui-org/react";
import { Plus, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddEbook = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genres, setGenres] = useState([]);
  const [tags, setTags] = useState([]);
  const [custom_tags, setCustom_tags] = useState([]);
  const [newCustomTag, setNewCustomTag] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [demoFile, setDemoFile] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);

  // Error variables
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [isbnError, setIsbnError] = useState("");
  const [genresError, setGenresError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [coverImageError, setCoverImageError] = useState("");
  const [demoFileError, setDemoFileError] = useState("");
  const [originalFileError, setOriginalFileError] = useState("");

  const genreOptions = ["Fiction", "Mystery", "Thriller", "Horror", "Sci_Fi", "Fantasy", "Romance", "Historical", "Adventure", "Young_Adult", "New_Adult", "Crime", "Magical", "Satire", "Gothic",];
  const tagOptions = ["Bestseller", "Award_Winner", "Popular", "New_Release", "Classic", "Recommended", "Must_Read", "Young_Adult", "Children",];

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

  const validateIsbn = (isbn) => {
    // TODO - Not validating the ISBN for now. Currently use the format 978-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]{1}

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate ISBN
    if (!validateIsbn(isbn)) {
      alert("Invalid ISBN format. Please enter a valid ISBN-13 number.");
      return;
    }

    const formData = new FormData();

    // * Due to the asynchronous nature of state updates, the error messages are not updated immediately
    // * Therefore, a local variable will be used to check for errors

    let hasError = false;

    if (title) formData.append("title", title);
    else {
      setTitleError("Title is required.");
      hasError = true;
    }

    if (description) formData.append("description", description);
    else {
      setDescriptionError("Description is required.");
      hasError = true;
    }

    if (price) formData.append("price", price);
    else {
      setPriceError("Price is required.");
      hasError = true;
    }

    if (isbn) formData.append("isbn", isbn);
    else {
      setIsbnError("ISBN is required.");
      hasError = true;
    }

    if (genres.length > 0) formData.append("genres", genres);
    else {
      setGenresError("At least one genre is required.");
      hasError = true;
    }

    if (tags.length > 0) formData.append("tags", tags);
    else {
      setTagsError("At least one tag is required.");
      hasError = true;
    }

    if (custom_tags.length > 0) formData.append("custom_tags", custom_tags);

    if (coverImage) formData.append("coverImage", coverImage);
    else {
      setCoverImageError("Cover image is required.");
      hasError = true;
    }

    if (demoFile) formData.append("demoFile", demoFile);
    else {
      setDemoFileError("Demo file is required.");
      hasError = true;
    }

    if (originalFile) formData.append("originalFile", originalFile);
    else {
      setOriginalFileError("Original file is required.");
      hasError = true;
    }

    if (hasError) {
      toast.error("Please fill all the required fields");
    } else {
      try {
        const response = await axios.post("/api/ebooks/publish", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {

          switch (response.data.code) {
            case "00":
              toast.success(response.data.message);
              navigate("/author/ebooks");
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
                  price: setPriceError,
                  isbn: setIsbnError,
                  genres: setGenresError,
                  tags: setTagsError,
                  coverImage: setCoverImageError,
                  demoFile: setDemoFileError,
                  originalFile: setOriginalFileError,
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
        <h1 className="text-2xl font-bold mb-6">Add New Ebook</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
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
            <label className="block text-sm font-medium mb-2">Price</label>
            <Input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setPriceError("");
              }}
              placeholder="Enter price"
              type="number"
              step="0.01"
              fullWidth
              isInvalid={!!priceError}
              errorMessage={priceError}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">ISBN</label>
            <Input
              value={isbn}
              onChange={(e) => {
                setIsbn(e.target.value);
                setIsbnError("");
              }}
              placeholder="Enter a valid ISBN-13 number (Eg: 978-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]{1}"
              fullWidth
              isInvalid={!!isbnError}
              errorMessage={isbnError}
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
                      <X size={14} />
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
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="text-default-700 text-small">Cover Image</h3>
            <input
              type="file"
              onChange={(e) => {
                setCoverImage(e.target.files[0]);
                setCoverImageError("");
              }}
            />
            {coverImageError && (
              <span className="text-red-500 text-sm">{coverImageError}</span>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="text-default-700 text-small">Demo File</h3>
            <input
              type="file"
              onChange={(e) => {
                setDemoFile(e.target.files[0]);
                setDemoFileError("");
              }}
            />
            {demoFileError && (
              <span className="text-red-500 text-sm">{demoFileError}</span>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="text-default-700 text-small">Original File</h3>
            <input
              type="file"
              onChange={(e) => {
                setOriginalFile(e.target.files[0]);
                setOriginalFileError("");
              }}
            />
            {originalFileError && (
              <span className="text-red-500 text-sm">{originalFileError}</span>
            )}
          </div>

          <Button color="secondary" type="submit" className="max-w-[160px] mx-auto">
            Add Ebook
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddEbook;
