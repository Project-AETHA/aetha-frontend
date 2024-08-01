import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Image,
    Link,
    User
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

// Define contentColumns array
const contentColumns = [
    { key: "coverImage", label: "Cover Image" },
    { key: "title", label: "Title" },
    { key: "publishedDate", label: "Published Date" },
    { key: "author", label: "Author" },
    { key: "ratings", label: "Ratings" },
];

const articles = [
    { key: "1", coverImage: "https://via.placeholder.com/50", title: "Walk Shadow", publishedDate: "2024-01-01", author: "Tony Reichert", ratings: 4 },
    { key: "2", coverImage: "https://via.placeholder.com/50", title: "The Catcher in the Rye", publishedDate: "2024-02-01", author: "Zoey Lang", ratings: 5 },
    { key: "3", coverImage: "https://via.placeholder.com/50", title: "The Greats Gatsby", publishedDate: "2024-03-01", author: "Jane Fisher", ratings: 3 },
    { key: "4", coverImage: "https://via.placeholder.com/50", title: "Brave New World", publishedDate: "2024-04-01", author: "William Howard", ratings: 4 },
    { key: "5", coverImage: "https://via.placeholder.com/50", title: "Soul", publishedDate: "2024-05-01", author: "Emily Collins", ratings: 5 },
    { key: "6", coverImage: "https://via.placeholder.com/50", title: "Autonomous Vehicles", publishedDate: "2024-06-01", author: "Brian Kim", ratings: 3 },
    { key: "7", coverImage: "https://via.placeholder.com/50", title: "5G Networks", publishedDate: "2024-07-01", author: "Laura Thompson", ratings: 4 },
    { key: "8", coverImage: "https://via.placeholder.com/50", title: "Cybersecurity Trends", publishedDate: "2024-08-01", author: "Michael Stevens", ratings: 5 },
    { key: "9", coverImage: "https://via.placeholder.com/50", title: "Climate Tech", publishedDate: "2024-09-01", author: "Sophia Nguyen", ratings: 4 },
    { key: "10", coverImage: "https://via.placeholder.com/50", title: "Space Exploration", publishedDate: "2024-10-01", author: "James Wilson", ratings: 5 },
    { key: "11", coverImage: "https://via.placeholder.com/50", title: "Green Energy", publishedDate: "2024-11-01", author: "Ava Johnson", ratings: 3 },
    { key: "12", coverImage: "https://via.placeholder.com/50", title: "Smart Cities", publishedDate: "2024-12-01", author: "Isabella Smith", ratings: 4 },
    { key: "13", coverImage: "https://via.placeholder.com/50", title: "EdTech Innovations", publishedDate: "2025-01-01", author: "Oliver Brown", ratings: 5 },
    { key: "14", coverImage: "https://via.placeholder.com/50", title: "FinTech Disruptors", publishedDate: "2025-02-01", author: "Lucas Jones", ratings: 3 },
    { key: "15", coverImage: "https://via.placeholder.com/50", title: "E-commerce Trends", publishedDate: "2025-03-01", author: "Grace Davis", ratings: 4 },
    { key: "16", coverImage: "https://via.placeholder.com/50", title: "Wearable Tech", publishedDate: "2025-04-01", author: "Elijah Garcia", ratings: 5 },
    { key: "17", coverImage: "https://via.placeholder.com/50", title: "BioTech Advances", publishedDate: "2025-05-01", author: "Emma Martinez", ratings: 4 },
    { key: "18", coverImage: "https://via.placeholder.com/50", title: "AR/VR Developments", publishedDate: "2025-06-01", author: "Benjamin Lee", ratings: 3 },
    { key: "19", coverImage: "https://via.placeholder.com/50", title: "Voice Assistants", publishedDate: "2025-07-01", author: "Mia Hernandez", ratings: 5 },
    { key: "20", coverImage: "https://via.placeholder.com/50", title: "IoT Innovations", publishedDate: "2025-08-01", author: "Daniel Lewis", ratings: 4 },
    { key: "21", coverImage: "https://via.placeholder.com/50", title: "Digital Transformation", publishedDate: "2025-09-01", author: "Amelia Clark", ratings: 3 },
    { key: "22", coverImage: "https://via.placeholder.com/50", title: "Robotics", publishedDate: "2025-10-01", author: "Jackson Walker", ratings: 5 },
    { key: "23", coverImage: "https://via.placeholder.com/50", title: "Big Data", publishedDate: "2025-11-01", author: "Henry Hall", ratings: 4 },
    { key: "24", coverImage: "https://via.placeholder.com/50", title: "Gaming Tech", publishedDate: "2025-12-01", author: "Charlotte Young", ratings: 3 },
    { key: "25", coverImage: "https://via.placeholder.com/50", title: "AI in Healthcare", publishedDate: "2026-01-01", author: "Liam King", ratings: 5 },
];

function getKeyValue(item, key) {
    return item[key];
}

function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar key={i} color={i < rating ? "#ffd700" : "#e4e5e9"} />
        );
    }
    return <div className="flex">{stars}</div>;
}

function ContentList() {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;

    const pages = Math.ceil(articles.length / rowsPerPage);

    const paginatedItems = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return articles.slice(start, end);
    }, [page]);

    return (
        <div className="flex flex-col gap-3 h-full">
            <Table
                radius="md"
                className="p-4"
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
                <TableHeader className="bg-gradient-to-r from-purple-400 to-blue-500 text-lg">
                    {contentColumns.map((column) => (
                        <TableColumn key={column.key} className=''>{column.label}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody items={paginatedItems}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => {
                                if (columnKey === "coverImage") {
                                    return (
                                        <TableCell>
                                            <Image
                                                width={60}
                                                height={60}
                                                alt="NextUI Fruit Image with Zoom"
                                                src={`/images/books/${(item.key % 9) + 1}.png
                                                `}
                                                radius='none'
                                            />
                                        </TableCell>
                                    );
                                } else if (columnKey === "title") {
                                    return (
                                        <TableCell>
                                            <span >{getKeyValue(item, columnKey)}</span>
                                        </TableCell>
                                    );
                                } else if (columnKey === "publishedDate") {
                                    return (
                                        <TableCell  >
                                            {new Date(getKeyValue(item, columnKey)).toLocaleDateString('en-GB')}
                                        </TableCell>
                                    );
                                } else if (columnKey === "author") {
                                    return (
                                        <TableCell>
                                            <User
                                                name={getKeyValue(item, columnKey)}
                                                description={(
                                                    <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                                        @{getKeyValue(item, columnKey).toLowerCase().replace(" ", "")}
                                                    </Link>
                                                )}
                                                avatarProps={{
                                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                                }}
                                            />
                                        </TableCell>
                                    );
                                } else if (columnKey === "ratings") {
                                    return (
                                        <TableCell>
                                            <StarRating rating={getKeyValue(item, columnKey)} />
                                        </TableCell>
                                    );
                                } else {
                                    return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                                }
                            }}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default ContentList;
