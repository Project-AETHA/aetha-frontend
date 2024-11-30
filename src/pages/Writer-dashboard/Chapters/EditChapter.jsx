import React, { useState, useEffect } from 'react';
import { Input, Button, Textarea, Checkbox } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import useGet from '@/hooks/useGet';
import LoadingComponent from "@/components/utility/LoadingComponent";

const EditChapter = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();

  const { data, isLoading, isError, error } = useGet({
    queryKey: "chapter",
    url: `/api/chapters/single/${chapterId}`,
    params: { chapterId },
  });

  const [formData, setFormData] = useState({
    chapterNumber: null,
    title: '',
    content: '',
    isPremium: false,
  });

  const [loading, setLoading] = useState(false);

  // Update formData when data is fetched
  useEffect(() => {
    if (data) {
      setFormData({
        chapterNumber: data.chapterNumber || null,
        title: data.title || '',
        content: data.content || '',
        isPremium: data.isPremium || false,
      });
    }
  }, [data]);

  function handleOnChange(attribute, value) {
    setFormData({ ...formData, [attribute]: value });
    console.log({ ...formData, [attribute]: value });
  }

  async function handleSave(isComplete) {
    setLoading(true);

    try {
      const response = await axios.put(
        `/api/chapters/update/${chapterId}?isComplete=${isComplete}`,
        formData
      );

      if (response.status === 200) {
        if (response.data.code === '00') {
          toast.success(response.data.message);
          navigate(`/author/novels/details/${data.novel.id}`);
        } else {
          console.log(response.data);
          toast.error(response.data.message);
        }
      } else {
        throw new Error('An error occurred while adding chapter');
      }
    } catch (error) {
      toast.error('An error occurred while adding chapter');
    }

    setLoading(false);
  }

  return (
    <div className="bg-foreground-50 p-4 m-4 rounded h-full shadow-lg flex flex-col gap-6">
      <h1 className="font-semibold text-lg">Edit Chapter</h1>

      {isLoading && <LoadingComponent />}
      {isError && <div className="text-red-500">{error.message}</div>}
      {!isLoading && !isError && (
        <form className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Input
              isRequired
              className="max-w-[100px]"
              type="number"
              variant="bordered"
              label="Number"
              placeholder="Chapter #"
              labelPlacement="outside"
              value={formData.chapterNumber}
              onChange={(e) => handleOnChange('chapterNumber', e.target.value)}
            />
            <Input
              isRequired
              type="text"
              variant="bordered"
              label="Title"
              placeholder="Title of the chapter"
              labelPlacement="outside"
              value={formData.title}
              onChange={(e) => handleOnChange('title', e.target.value)}
            />
          </div>

          <Textarea
            isRequired
            type="text"
            variant="bordered"
            label="Content"
            placeholder="Write your chapter here ..."
            value={formData.content}
            labelPlacement="outside"
            onChange={(e) => handleOnChange('content', e.target.value)}
          />

          <Checkbox
            label="Paid"
            isSelected={formData.isPremium}
            onValueChange={() => handleOnChange('isPremium', !formData.isPremium)}
          >
            PAID
          </Checkbox>

          <div className="flex justify-end items-center gap-3">
            <Button
              variant="flat"
              color="success"
              isLoading={loading}
              onClick={() => handleSave(true)}
            >
              Save
            </Button>
            <Button
              variant="flat"
              color="primary"
              isLoading={loading}
              onClick={() => handleSave(false)}
            >
              Save as draft
            </Button>
            <Button
              variant="flat"
              color="danger"
              onClick={() => navigate(`/author/novels`)}
            >
              Discard
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditChapter;