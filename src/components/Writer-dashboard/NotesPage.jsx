import { Link } from "react-router-dom";
import BasicTableWithLinks from "../common/Tables/BasicTableWithLinks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const columns = ["name", "date", "status"];

function formatLink(item) {
  return `/author/notes/${item.key ?? item.name}`;
}

async function getData() {
  const response = await axios.get("http://localhost:8080/api/notes/get-my-notes");

  if(response.status === 200) {
    if(response.data.code === "00") {
      return response.data.content
    }
  } else {
    return []
  }
}

export default function NotesPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []);

  return (
    <div className="w-full h-full p-2 bg-foreground-300">
      <div className="bg-foreground-50 w-full h-full rounded p-2 py-4 flex flex-col gap-6">
        <div className="flex flex-col gap-0">
          <p className="font-bold text-large w-full flex justify-center">
            Notes
          </p>
          <p className="text-small w-full flex justify-center">
            Capture your thoughts in notes, for a forgotten idea is like a dream lost to the dawn.
          </p>
        </div>
        <div className="border-2 rounded-lg flex justify-between items-center p-2">
          <p>Keep note of your brilliant ideas</p>
          <Link to="/author/notes/create">
            <button className="rounded-lg text-small bg-blue-300 font-semibold text-blue-700 px-4 py-2 hover:text-blue-100 hover:bg-blue-400 transition-color duration-300">
              Create New Note +
            </button>
          </Link>
        </div>

        <div className="flex w-full flex-col h-full">
          <div>
            <BasicTableWithLinks data={data} formatLink={formatLink} columns={columns} rowsPerPage={5} />
          </div>
      </div>
    </div>
</div>
)
  ;
}
