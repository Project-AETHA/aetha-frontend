import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue
} from "@nextui-org/react";


const articles = [
  { key: "1", coverImage: "https://via.placeholder.com/50", title: "The Rise of AI", publishedDate: "2024-01-01", author: "Tony Reichert" },
  { key: "2", coverImage: "https://via.placeholder.com/50", title: "Quantum Computing", publishedDate: "2024-02-01", author: "Zoey Lang" },
  { key: "3", coverImage: "https://via.placeholder.com/50", title: "Blockchain Revolution", publishedDate: "2024-03-01", author: "Jane Fisher" },
  { key: "4", coverImage: "https://via.placeholder.com/50", title: "Future of Work", publishedDate: "2024-04-01", author: "William Howard" },
  { key: "5", coverImage: "https://via.placeholder.com/50", title: "Health Tech", publishedDate: "2024-05-01", author: "Emily Collins" },
  { key: "6", coverImage: "https://via.placeholder.com/50", title: "Autonomous Vehicles", publishedDate: "2024-06-01", author: "Brian Kim" },
  { key: "7", coverImage: "https://via.placeholder.com/50", title: "5G Networks", publishedDate: "2024-07-01", author: "Laura Thompson" },
  { key: "8", coverImage: "https://via.placeholder.com/50", title: "Cybersecurity Trends", publishedDate: "2024-08-01", author: "Michael Stevens" },
  { key: "9", coverImage: "https://via.placeholder.com/50", title: "Climate Tech", publishedDate: "2024-09-01", author: "Sophia Nguyen" },
  { key: "10", coverImage: "https://via.placeholder.com/50", title: "Space Exploration", publishedDate: "2024-10-01", author: "James Wilson" },
  { key: "11", coverImage: "https://via.placeholder.com/50", title: "Green Energy", publishedDate: "2024-11-01", author: "Ava Johnson" },
  { key: "12", coverImage: "https://via.placeholder.com/50", title: "Smart Cities", publishedDate: "2024-12-01", author: "Isabella Smith" },
  { key: "13", coverImage: "https://via.placeholder.com/50", title: "EdTech Innovations", publishedDate: "2025-01-01", author: "Oliver Brown" },
  { key: "14", coverImage: "https://via.placeholder.com/50", title: "FinTech Disruptors", publishedDate: "2025-02-01", author: "Lucas Jones" },
  { key: "15", coverImage: "https://via.placeholder.com/50", title: "E-commerce Trends", publishedDate: "2025-03-01", author: "Grace Davis" },
  { key: "16", coverImage: "https://via.placeholder.com/50", title: "Wearable Tech", publishedDate: "2025-04-01", author: "Elijah Garcia" },
  { key: "17", coverImage: "https://via.placeholder.com/50", title: "BioTech Advances", publishedDate: "2025-05-01", author: "Emma Martinez" },
  { key: "18", coverImage: "https://via.placeholder.com/50", title: "AR/VR Developments", publishedDate: "2025-06-01", author: "Benjamin Lee" },
  { key: "19", coverImage: "https://via.placeholder.com/50", title: "Voice Assistants", publishedDate: "2025-07-01", author: "Mia Hernandez" },
  { key: "20", coverImage: "https://via.placeholder.com/50", title: "IoT Innovations", publishedDate: "2025-08-01", author: "Daniel Lewis" },
  { key: "21", coverImage: "https://via.placeholder.com/50", title: "Digital Transformation", publishedDate: "2025-09-01", author: "Amelia Clark" },
  { key: "22", coverImage: "https://via.placeholder.com/50", title: "Robotics", publishedDate: "2025-10-01", author: "Jackson Walker" },
  { key: "23", coverImage: "https://via.placeholder.com/50", title: "Big Data", publishedDate: "2025-11-01", author: "Henry Hall" },
  { key: "24", coverImage: "https://via.placeholder.com/50", title: "Gaming Tech", publishedDate: "2025-12-01", author: "Charlotte Young" },
  { key: "25", coverImage: "https://via.placeholder.com/50", title: "AI in Healthcare", publishedDate: "2026-01-01", author: "Liam King" },
];

function ContentList() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(articles.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return articles.slice(start, end);
  }, [page, articles]);

  return (
    <div className="flex flex-col gap-3 bg-white h-full">
      <Table
        radius="none"
        removeWrapper
        className="p-4"
        color="primary"
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[600px]",
        }}
      >
        <TableHeader className="bg-gradient-to-r from-purple-400 to-blue-500">
          <TableColumn key="coverImage">COVER IMAGE</TableColumn>
          <TableColumn key="title">TITLE</TableColumn>
          <TableColumn key="publishedDate">PUBLISHED DATE</TableColumn>
          <TableColumn key="author">AUTHOR</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "coverImage" ? (
                    <img src={getKeyValue(item, columnKey)} alt={item.title} 
                    style={{ width: '60px', height: '70px', borderRadius: '8px' }} 
                    className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer" 
                    />
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContentList;
