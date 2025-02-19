'use client'

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ProjectCard({ id, imgUrl, color, index }) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/(fa|en)/, '') || '/';
    return (
      <div className={`${color} rounded-lg shadow-md px-8 flex flex-col items-center justify-between`}>
        <div className="pt-4 flex items-center justify-between w-full">
        <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-2">{t(`${id}.title`)}</h3>
        <p className="text-gray-600 line-clamp-3">{t(`${id}.description`)}</p>
        </div>
        <Link href={`/${locale}/works/${index}`}>
        <div className={`rounded-full bg-white p-3 ${locale === 'fa' ? "mr-4" : "ml-4"}`}>
            {locale === 'fa' ? <FaArrowLeft size={25} color="0a0a0a"/> : <FaArrowRight size={25} color="0a0a0a"/>}
        </div>
        </Link>
        </div>
       <div className="flex items-center">
       <Image src={imgUrl} alt={t(`${id}.title`)} width={300} height={400} />
       </div>
      </div>
    );
  }