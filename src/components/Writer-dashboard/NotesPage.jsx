import { Link, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner} from "@nextui-org/react";
import {format, parseISO} from "date-fns";


function formatDate(dateString) {
  const date = parseISO(dateString);
  return format(date, "yyyy MMM dd");
}

export default function NotesPage() {

  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const response = await axios.get("http://localhost:8080/api/notes/get-my-notes");

    if(response.status === 200) {
      if(response.data.code === "00") {
        setData(response.data.content)
      }
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
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
        <div className="rounded-lg bg-foreground-100 flex justify-between items-center p-2">
          <p>Keep note of your brilliant ideas</p>
          <Link to="/author/notes/create">
            <button className="rounded-lg text-small bg-blue-300 font-semibold text-blue-700 px-4 py-2 hover:text-blue-100 hover:bg-blue-400 transition-color duration-300">
              Create New Note +
            </button>
          </Link>
        </div>

        <div className="flex w-full flex-col h-full">
          <Table aria-label="Example static collection table" selectionMode={"single"}>
            <TableHeader>
              <TableColumn>TITLE</TableColumn>
              <TableColumn>CREATED DATE</TableColumn>
              <TableColumn>LAST MODIFIED AT</TableColumn>
            </TableHeader>
            <TableBody
                items={data}
                isLoading={isLoading}
                loadingContent={<Spinner />}
            >
                {data.map((item) => (
                    <TableRow key={item.id} className="hover:cursor-pointer" onClick={() => navigate(`/author/notes/${item.id}`)}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{formatDate(item.createdAt)}</TableCell>
                      <TableCell>{formatDate(item.lastModified)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
      </div>
    </div>
</div>
)
  ;
}
