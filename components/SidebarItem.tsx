import { IconType } from "react-icons";
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}   


const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
    }) => {
    return (
        <Link
        href={href}
        className={twMerge(`
        flex
        flex-row
        items-center
        h-auto
        txt-md
        gap-x-4
        w-full
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
        `,
        active && "text-white"
        )}
        >
            <Icon size={26}/>
            <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem;
