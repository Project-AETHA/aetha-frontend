import {Image} from "@nextui-org/react";
import { IoMdRefresh } from "react-icons/io";

export default function NothingToDisplay({retry}) {

    return (
        <div className={"w-full flex flex-col justify-center items-center !text-foreground-900"}>
            <Image src={'/images/empty_box.png'} alt="No content to displat" height={80} width={80} className="select-none" />
            <p className="text-sm select-none">No Content to Display</p>
            <p className="text-sm flex gap-2 text-blue-800 items-center border-b-2 border-blue-800 hover:cursor-pointer" onClick={retry}>Retry <IoMdRefresh /> </p>
        </div>
    );
}