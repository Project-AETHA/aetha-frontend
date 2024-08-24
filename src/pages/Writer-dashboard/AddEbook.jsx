import React, { useState } from "react";
import { Card, Input, Checkbox, Button, Textarea } from "@nextui-org/react";
import { Plus, X } from "lucide-react";
import axios from "axios";

const AddEbook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genres, setGenres] = useState([]);
  const [tags, setTags] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [newCustomTag, setNewCustomTag] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [demoFile, setDemoFile] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);

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
  const tagOptions = [
    "Bestseller",
    "Award_Winner",
    "Popular",
    "New_Release",
    "Classic",
    "Recommended",
    "Must_Read",
    "Young_Adult",
    "Children",
  ];

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
      !customTags.includes(newCustomTag.trim())
    ) {
      setCustomTags([...customTags, newCustomTag.trim()]);
      setNewCustomTag("");
    }
  };

  const handleRemoveCustomTag = (tagToRemove) => {
    setCustomTags(customTags.filter((tag) => tag !== tagToRemove));
  };

  const validateIsbn = (isbn) => {
    // // Regular expression to match the ISBN-13 format specific to Sri Lanka
    // const isbnPattern = /^978-955-\d{3}-\d{3}-\d{1}$/;

    // // Check if the input matches the ISBN-13 format for Sri Lanka
    // if (!isbnPattern.test(isbn)) {
    //   return false;
    // }

    // // Remove hyphens to get the numeric part
    // const cleanedIsbn = isbn.replace(/[-\s]/g, "");

    // // Validate the ISBN-13 number
    // if (/^\d{13}$/.test(cleanedIsbn)) {
    //   let sum = 0;
    //   for (let i = 0; i < 13; i++) {
    //     sum += (i % 2 === 0 ? 1 : 3) * parseInt(cleanedIsbn.charAt(i), 10);
    //   }
    //   return sum % 10 === 0;
    // }
    // return false;

    return true; // TODO - Not validating the ISBN for now. Currently use the format 978-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]{1}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate ISBN
    if (!validateIsbn(isbn)) {
      alert("Invalid ISBN format. Please enter a valid ISBN-13 number.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("isbn", isbn);
    formData.append("genres", genres);
    formData.append("tags", tags);
    formData.append("customTags", customTags);
    formData.append("coverImage", coverImage);
    formData.append("demoFile", demoFile);
    formData.append("originalFile", originalFile);

    try {
      const response = await axios.post("/api/ebooks/publish", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error("Error: " + response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-2 mx-auto">
      <Card className="p-8" shadow="sm">
        <h1 className="text-2xl font-bold mb-6">Add New Ebook</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              fullWidth
            />
          </div>

          <div className="mb-4">
            <Textarea
              isRequired
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="min-w-[290px] w-full lg:min-w-[820px] rounded-xl"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              type="number"
              step="0.01"
              fullWidth
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">ISBN</label>
            <Input
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter a valid ISBN-13 number (Eg: 978-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]{1}"
              fullWidth
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
                  onChange={() => handleGenreChange(genre)}
                >
                  {genre}
                </Checkbox>
              ))}
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
                  onChange={() => handleTagChange(tag)}
                >
                  {tag}
                </Checkbox>
              ))}
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium mb-2">Custom Tags</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {customTags.map((tag, index) => (
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
              onChange={(e) => setCoverImage(e.target.files[0])}
            />
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="text-default-700 text-small">Demo File</h3>
            <input
              type="file"
              onChange={(e) => setDemoFile(e.target.files[0])}
            />
          </div>

          <div className="mb-4 flex flex-col">
            <h3 className="text-default-700 text-small">Original File</h3>
            <input
              type="file"
              onChange={(e) => setOriginalFile(e.target.files[0])}
            />
          </div>

          <Button color="primary" type="submit">
            Add Ebook
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddEbook;
