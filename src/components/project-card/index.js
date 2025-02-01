import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectCard({ title, description, imgUrl, color, width, height, index }) {
    return (
      <div className={`${color} rounded-lg shadow-md px-8 flex flex-col items-center justify-between`}>
        <div className="pt-4 flex items-center justify-between w-full">
        <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
        <Link href={`/works/${index}`}>
        <div className="rounded-full bg-white p-3 ml-4">
            <FaArrowRight size={25} color="0a0a0a"/>
        </div>
        </Link>
        </div>
       <div className="flex items-center">
       <Image src={imgUrl} alt={title} width={width} height={height} />
       </div>
      </div>
    );
  }