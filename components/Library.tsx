"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
    const onClick = () => {
        // Handle upload later
    };
    return (
        <div className="flex flex-col">
            <div className="
            flex 
            justify-between 
            items-center 
            px-5 
            pt-4">
                <div className="inline-flex items-center gap-x-2 text-neutral-400">
                    <TbPlaylist size={26} />
                    <p className="font-medium text-md">
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                onClick={onClick}
                size={20}
                className="text-neutral-400
                hover:text-neutral-200
                transition cursor-pointer"
                />
            </div>
            <div className="
            flex
            flex-col
            gap-y-2
            px-3
            mt-4
            ">
                Lister of Songs!
            </div>
        </div>
)};

export default Library;
