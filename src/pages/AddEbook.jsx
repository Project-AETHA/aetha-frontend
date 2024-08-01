import React, { useState } from 'react';
import { Card, Input, Checkbox, Button, Image } from '@nextui-org/react';
import { Plus, X } from "lucide-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddEbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isbn, setIsbn] = useState('');
  const [genres, setGenres] = useState([]);
  const [tags, setTags] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [newCustomTag, setNewCustomTag] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const genreOptions = ['Fiction', 'Non-fiction', 'Mystery', 'Thriller', 'Romance', 'Sci-Fi', 'Fantasy', 'Biography'];
  const tagOptions = ['Bestseller', 'Award-winning', 'New Release', 'Classic', 'Young Adult', 'Children'];

  const handleGenreChange = (genre) => {
    setGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const handleTagChange = (tag) => {
    setTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleAddCustomTag = () => {
    if (newCustomTag.trim() !== '' && !customTags.includes(newCustomTag.trim())) {
      setCustomTags([...customTags, newCustomTag.trim()]);
      setNewCustomTag('');
    }
  };

  const handleRemoveCustomTag = (tagToRemove) => {
    setCustomTags(customTags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to your backend
    console.log({ title, author, description, price, isbn, genres, tags, customTags, coverImage });
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
            <label className="block text-sm font-medium mb-2">Author</label>
            <Input 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              fullWidth
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <ReactQuill 
              value={description}
              onChange={setDescription}
              placeholder="Enter book description"
              className="h-40 mb-12"
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
              placeholder="Enter ISBN"
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
                  <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1">
                    <span className="mr-2">{tag}</span>
                    <button type="button" onClick={() => handleRemoveCustomTag(tag)} className="text-red-500 hover:text-red-700">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <Input
                  size="sm"
                  placeholder="Add custom tag"
                  value={newCustomTag}
                  onChange={(e) => setNewCustomTag(e.target.value)}
                  className="mr-2"
                />
                <Button size="sm" auto onClick={handleAddCustomTag} type="button">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Cover Image</label>
            <Input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
            />
            {imagePreview && (
              <div className="mt-4">
                <Image
                  src={imagePreview}
                  alt="Cover preview"
                  width={150}
                  height={200}
                  objectFit="cover"
                />
              </div>
            )}
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