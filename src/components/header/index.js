'use client'

import Link from "next/link";
import {useLocale, useTranslations} from 'next-intl';
import { usePathname } from "next/navigation";


export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/(fa|en)/, '') || '/';
    return (
      <header className="flex justify-end items-center p-4">
        {/* <h1 className="text-xl font-bold">Pouria jafarzadeh</h1> */}
        <nav>
          <ul className="flex gap-4">
            <Link href={`/${locale}`} className="hover:underline hover:text-[#84c4eb] transition-all duration-500">{t("h1")}</Link>
            <Link  href={`/${locale}/about`} className="hover:underline hover:text-[#84c4eb] transition-all duration-500">{t("h2")}</Link>
            <Link href={`/${locale}/works`} className="hover:underline hover:text-[#84c4eb] transition-all duration-500">{t("h3")}</Link>
          </ul>
        </nav>
      </header>
    );
  }