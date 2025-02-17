import Head from 'next/head';
import Footer from '@/components/footer';
import ProjectCard from '@/components/project-card';
import Hero from '@/components/hero';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <div className="container mx-auto py-4">
      <Head>
        <title>Pouria Portfolio</title>
      </Head>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ProjectCard title="Gramatic" description={t("pdg")} imgUrl="/images/gramatic1.png" color={"bg-[#84c4eb]"} index={0}/>
        <ProjectCard title="BeeaaB" description={t("pdb")} imgUrl="/images/beeaab1.png" color={"bg-[#2f3543]"} index={1}/>
      </section>
      <div className='flex items-center justify-end pt-4 hover:text-[#84c4eb] transition-all duration-500'>
        <Link href={"/works"}>
        {t("sa")}
        </Link>
      </div>
    </div>
  );
}