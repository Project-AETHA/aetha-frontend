import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import ImageUpload from "../../../components/common/ImageUpload";

function CreateTicket({
                          createTicket,
                          clearAll,
                          setTitle,
                          setCategory,
                          setDescription,
                          setFiles,
                          title,
                          category,
                          description,
                          files
                      }) {
    return (
        <form onSubmit={createTicket} className="sub-container flex flex-col gap-4">
            <div className="flex items-center justify-evenly flex-wrap md:flex-nowrap gap-4">
                <Input
                    isRequired
                    key="title"
                    type="text"
                    label="Title"
                    size="md"
                    labelPlacement="outside"
                    placeholder="Short Title"
                    className="max-w-[400px]"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />

                <Select
                    isRequired
                    size="md"
                    label="Category"
                    placeholder="Select a category"
                    labelPlacement="outside"
                    className="max-w-[400px]"
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                >
                    <SelectItem key="default" isDisabled>Select Category</SelectItem>
                    <SelectItem key="complaint">Complaint</SelectItem>
                    <SelectItem key="needAssistance">Need Assistance</SelectItem>
                    <SelectItem key="bug">Bug</SelectItem>
                </Select>
            </div>

            <div className="flex items-center justify-evenly flex-wrap gap-4">
                <Textarea
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-[300px] sm:max-w-[652px]"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
            </div>

            <div className="flex items-center justify-evenly flex-wrap gap-4">
                <ImageUpload files={files} setFiles={setFiles} />
            </div>

            <div className="flex items-center justify-evenly flex-wrap gap-4">
                <Button type="submit" color="primary" variant="flat">
                    Create Ticket
                </Button>
                <Button type="button" onClick={clearAll} color="danger" variant="flat">
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default CreateTicket;
