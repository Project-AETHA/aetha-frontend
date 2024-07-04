import {Button, Image, Input, Select, SelectItem, Textarea} from "@nextui-org/react";

function CreateTicket({
                          createTicket,
                          clearAll,
                          setTitle,
                          setCategory,
                          setDescription,
                          setImages,
                          title,
                          category,
                          description,
                          images
                      }) {
    return (
        <form onSubmit={createTicket} className="sub-container flex flex-col gap-4">
            <div className="flex items-center justify-evenly flex-wrap gap-4">
                <Input
                    isRequired
                    key="title"
                    type="text"
                    label="Title"
                    size="md"
                    labelPlacement="outside"
                    placeholder="Short Title"
                    className="max-w-[300px]"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />

                <Select
                    isRequired
                    size="md"
                    label="Category"
                    defaultSelectedKeys={["default"]}
                    placeholder="Select a category"
                    labelPlacement="outside"
                    className="max-w-[300px]"
                    onChange={e => setCategory(e.target.value)}
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
                <Image
                    width={200}
                    height={160}
                    alt="NextUI hero Image with delay"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                    width={200}
                    height={160}
                    alt="NextUI hero Image with delay"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                    width={200}
                    height={160}
                    alt="NextUI hero Image with delay"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>

            <div className="flex items-center justify-evenly flex-wrap gap-4">
                <Button type="submit" color="primary" variant="flat">
                    Create Ticket
                </Button>
                <Button type="clear" onClick={clearAll} color="danger" variant="flat">
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default CreateTicket;
