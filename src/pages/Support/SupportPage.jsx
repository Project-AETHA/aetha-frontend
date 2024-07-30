import SupportTable from "./components/SupportTable";
import CreateTicket from "./components/CreateTicket";
import { useState } from "react";
import axios from 'axios';

const SupportPage = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState(null);

    const createTicket = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);

        // Append each file in the files array
        if (files) {
            console.log(files)
            formData.append('files', files);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/support/create_ticket', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response);

            if (response.data.code === "00") {
                alert('Ticket created successfully');
                clearAll();
            }
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    const clearAll = () => {
        setTitle('');
        setCategory('');
        setDescription('');
        setFiles([]);
    };

    return (
        <div className="alt-container">
            <div className="p-2">
                <h2 className="font-bold text-black dark:text-white mb-2">
                    Suggest to create a support ticket
                </h2>
                <div className="bg-foreground-50 text-black rounded-lg px-2 py-6 flex justify-center">
                    <CreateTicket
                        createTicket={createTicket}
                        setTitle={setTitle}
                        setCategory={setCategory}
                        setDescription={setDescription}
                        setFiles={setFiles}
                        title={title}
                        category={category}
                        description={description}
                        files={files}
                        clearAll={clearAll}
                    />
                </div>
            </div>
            <div className="">
                <div className="text-black dark:text-white text-lg font-bold mb-2">
                    Active Tickets
                </div>
                <div>
                    <SupportTable />
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
