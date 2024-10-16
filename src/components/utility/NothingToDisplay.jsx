import {Image} from "@nextui-org/react";

export default function NothingToDisplay() {
    return (
        <div className={"w-full flex flex-col justify-center items-center"}>
            <Image src={'/images/empty_box.png'} alt="No content to displat" height={80} width={80} />
            <p className="text-sm">No Content to Display</p>
        </div>
    );
}