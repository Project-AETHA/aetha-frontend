import React, { useState, useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const rows = [
    { key: "1", chapter: "Chapter 1: Tony Reichert", released_date: "2020-05-04", link: "/chapter1" },
    { key: "2", chapter: "Chapter 2: Zoey Lang", released_date: "2020-05-07", link: "/chapter2" },
    { key: "3", chapter: "Chapter 3: Jane Fisher", released_date: "2020-05-10", link: "/chapter3" },
    { key: "4", chapter: "Chapter 4: William Howard", released_date: "2020-06-01", link: "/chapter4" },
    { key: "5", chapter: "Chapter 5: William Howard", released_date: "2020-06-01", link: "/chapter5" },
    { key: "6", chapter: "Chapter 6: William Howard", released_date: "2020-06-01", link: "/chapter6" },
    { key: "7", chapter: "Chapter 7: William Howard", released_date: "2020-06-01", link: "/chapter7" },
    { key: "8", chapter: "Chapter 8: William Howard", released_date: "2020-06-01", link: "/chapter8" },
    { key: "9", chapter: "Chapter 9: William Howard", released_date: "2020-06-01", link: "/chapter9" },
    { key: "10", chapter: "Chapter 10: William Howard", released_date: "2020-06-01", link: "/chapter10" },
    { key: "11", chapter: "Chapter 11: William Howard", released_date: "2020-06-01", link: "/chapter11" },
    { key: "12", chapter: "Chapter 12: William Howard", released_date: "2020-06-01", link: "/chapter12" },
    { key: "13", chapter: "Chapter 13: William Howard", released_date: "2020-06-01", link: "/chapter12" },
    { key: "14", chapter: "Chapter 14: William Howard", released_date: "2020-06-01", link: "/chapter12" },
    { key: "15", chapter: "Chapter 15: William Howard", released_date: "2020-06-01", link: "/chapter12" },
    { key: "16", chapter: "Chapter 16: William Howard", released_date: "2020-06-01", link: "/chapter12" },
    { key: "17", chapter: "Chapter 17: William Howard", released_date: "2020-06-01", link: "/chapter12" },
];

const columns = [
    { key: "chapter", label: "CHAPTER" },
    { key: "released_date", label: "RELEASED DATE" },
];

const Chapters = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 14;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className="w-full my-5 m-auto block md:flex px-5">

            <div className="w-full md:w-2/12 flex md:inline-block">
                <Card className=" mx-2  w-1/2 md:w-full h-[300px]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
                        <p className="text-lg uppercase font-bold"> Novel </p>
                        <h4 className="text-large leading-tight"> The Great Gasby </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl max-h-[200px] w-[140px]"
                            src="../../../public/images/books/book1.jpg"

                        />
                    </CardBody>
                </Card>


                <Card className="mx-2 md:mt-4 w-1/2 md:w-full h-[300px]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                        <p className="text-lg uppercase font-bold">Author</p>
                        <small className="text-default-500 mb-3"> Martin Perera </small>
                        <h4 className="font-bold text-large">Achievements</h4>
                    </CardHeader>
                    <CardBody className="py-2 flex flex-wrap">
                        {/* Badge 1 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 1"
                                className="object-cover rounded-xl w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>

                        {/* Badge 2 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 2"
                                className="object-cover rounded-xl w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>

                        {/* Badge 3 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 3"
                                className="object-cover rounded-xl w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>

                        {/* Badge 4 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 4"
                                className="object-cover rounded-xl w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>

                        {/* Badge 5 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 5"
                                className="object-cover rounded-xl w-full w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>

                        {/* Badge 6 */}
                        <div className="w-1/2 md:w-1/3 p-2">
                            <Image
                                alt="Badge 6"
                                className="object-cover rounded-xl w-full w-20"
                                src="https://www.sitepoint.com/wp-content/uploads/2014/11/1415490092badge.png"
                            />
                        </div>
                    </CardBody>
                </Card>



            </div>

            <div className="w-full md:w-10/12 inline-block md:mt-0 mt-10 md:px-5">
            <h1 className="text-2xl font-semibold mb-2 ml-2"> Chapters </h1>
                <Table aria-label="Example table with dynamic content" className="">
                    <TableHeader>
                        {columns.map((column) => (
                            <TableColumn key={column.key} className={column.key === "released_date" ? "text-right" : ""}>
                                {column.label}
                            </TableColumn>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {currentRows.map((row) => (
                            <TableRow key={row.key}>
                                {(columnKey) => (
                                    <TableCell className={columnKey === "released_date" ? "text-right" : ""}>
                                        {columnKey === "chapter" ? (
                                            <Link to={row.link} className="text-blue-500 hover:underline">
                                                {getKeyValue(row, columnKey)}
                                            </Link>
                                        ) : (
                                            getKeyValue(row, columnKey)
                                        )}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-center items-center m-4 gap-3">
                    <Button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        variant="flat"
                        color="primary"
                        auto
                        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        Previous
                    </Button>
                    <span className="pagination-text">Page {currentPage} of {totalPages}</span>
                    <Button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        variant="flat"
                        color="primary"
                        auto
                        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    >
                        Next
                    </Button>
                </div>

            </div>


        </div>
    );
};

export default Chapters;
