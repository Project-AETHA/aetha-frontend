import React, { useState } from 'react'
import { Input, Button, Textarea, Checkbox } from '@nextui-org/react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const AddChapter = () => {

  const navigate = useNavigate();
  const { novelId } = useParams();

  const [formData, setFormData] = useState({
    chapterNumber: null,
    title: '',
    content: '',
    isPremium: false
  })
  const [loading, setLoading] = useState(false)

  function handleOnChange(attribute, value) {
    setFormData({ ...formData, [attribute]: value })
    console.log({...formData, [attribute]: value})
  }

  async function handleSave(isComplete) {

    setLoading(true)

    const response = await axios.post(`/api/chapters/create/${novelId}?isComplete=${isComplete}`, formData)
    
    try {
      if(response.status === 200) {
        if(response.data.code === '00') {
          toast.success(response.data.message)
          navigate(`/author/novels/details/${novelId}`)
        } else {
          toast.error(response.data.message)
        }
      } else {
        throw new Error('An error occurred while adding chapter')
      }
    } catch (error) {
      toast.error('An error occurred while adding chapter')
    }

    setLoading(false)
  }

  return (
    <div className='bg-foreground-50 p-4 m-4 rounded h-full shadow-lg flex flex-col gap-6'>
      <h1 className='font-semibold text-lg'>Create Chapter</h1>

      <form className='flex flex-col gap-6'>
        <div className="flex gap-4">
          <Input 
            isRequired className='max-w-[100px]' type="number"
            variant="bordered" label="Number" placeholder='Chapter #'
            labelPlacement='outside' onChange={(e) => handleOnChange('chapterNumber', e.target.value)} />
          <Input
            isRequired type="text" variant="bordered"
            label="Title" placeholder='Title of the chapter'
            labelPlacement='outside' onChange={(e) => handleOnChange('title', e.target.value)} />
        </div>
        
        <Textarea 
          isRequired type="text" variant="bordered"
          label="Content" placeholder='Write your chapter here ...' 
          labelPlacement='outside' onChange={(e) => handleOnChange('content', e.target.value)} />

        <Checkbox label="Paid" isSelected={formData.isPremium} onValueChange={() => handleOnChange('isPremium', !formData.isPremium)}>
          PAID
        </Checkbox>

        <div className="flex justify-end items-center gap-3">
          <Button variant='flat' color="success" isLoading={loading} onClick={() => handleSave(true)}> Save </Button>
          <Button variant='flat' color="primary" isLoading={loading} onClick={() => handleSave(false)}> Save as draft </Button>
          <Button variant='flat' color="danger" onClick={() => navigate(`/author/novels`)}> Discard </Button>
        </div>
      </form>

    </div>
  )
}

export default AddChapter