import Link from "next/link";

const IconButton = ({icon, href}) => {
    return (
        <Link href={href}>
        <div className="mt-4 rounded-full bg-white p-3 h-min flex items-center justify-center">
            {icon}
        </div>
        </Link>
    );
}

export default IconButton;