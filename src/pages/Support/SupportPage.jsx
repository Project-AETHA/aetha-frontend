import SupportTable from "./components/SupportTable";
import CreateTicket from "./components/CreateTicket";
import {useState} from "react";
import axios from 'axios'

const SupportPage = () => {

    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [images, setImages] = useState(null)

    const token = localStorage.getItem('token')

    const createTicket = async (e) => {
        e.preventDefault()
        console.log(title, category, description, images)

        const response = await axios.post('http://localhost:8080/api/support/create_ticket', {
            title,
            category,
            description,
            images
        },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        console.log(response)

        if(response.data.code === "00") {
            alert('Ticket created successfully')
            clearAll()
        }
    }

    const clearAll = () => {
        setTitle('')
        setCategory('')
        setDescription('')
        setImages(null)
    }

    return (
        <div className="container">
            <div className="p-2">
                <h2 className="font-bold text-black dark:text-white mb-2">
                    Suggest to create a support ticket
                </h2>
                <CreateTicket
                    createTicket={createTicket}
                    setTitle={setTitle}
                    setCategory={setCategory}
                    setDescription={setDescription}
                    setImages={setImages}
                    title={title}
                    category={category}
                    description={description}
                    images={images}
                    clearAll={clearAll}
                />
            </div>
            <div className="">
                <div className="text-black dark:text-white text-lg font-bold mb-2">
                    Active Tickets
                </div>
                <div>
                    <SupportTable createTicket={createTicket} />
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
