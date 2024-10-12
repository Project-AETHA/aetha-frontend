import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const getAllEbooks = async () => {
    return (await axios.get("https://api.example.com/ebooks")).data.content;
}