"use client";

import { useRouter } from "next/navigation";

interface ComponentProps {
    name: string;
    path: string;
}

const HeaderOption: React.FC<ComponentProps> = ({name, path}) => {
    const router = useRouter();

    return (
        <button onClick={() => router.push(`/${path}`)} className="px-4 py-1  hover:bg-customBlue-light hover:text-white font-bold rounded-full">
            {name}
        </button>
    );
}

export default HeaderOption;