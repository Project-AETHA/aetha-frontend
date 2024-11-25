import React from 'react'
import { Input } from '@nextui-org/react'

const AddChapter = () => {
  return (
    <div className='bg-foreground-50 p-4 m-4 rounded h-full shadow-lg flex flex-col gap-6'>
      <h1 className='font-semibold text-lg'>AddChapter</h1>

      <form>
        <Input isRequired type="text" variant="bordered" label="Title" placeholder='Title of the chapter' labelPlacement='outside' />
        <Input isRequired type="text" variant="bordered" label="Title" placeholder='Title of the chapter' labelPlacement='outside' />
      </form>

    </div>
  )
}

export default AddChapter