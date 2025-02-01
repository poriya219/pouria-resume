import Head from 'next/head';
import Footer from '@/components/footer';
import ProjectCard from '@/components/project-card';
import Hero from '@/components/hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Pouria Portfolio</title>
      </Head>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ProjectCard title="Gramatic" description="An intuitive mobile application designed for Instagram account management." imgUrl="/images/gramatic1.png" color={"bg-[#84c4eb]"} width={300} height={400} index={0}/>
        <ProjectCard title="BeeaaB" description="An all-in-one health management app" imgUrl="/images/beeaab1.png" color={"bg-[#2f3543]"} width={550} height={300} index={1}/>
      </section>
      <div className='flex items-center justify-end pt-4 hover:text-[#84c4eb] transition-all duration-500'>
        <Link href={"/works"}>
        Show all works
        </Link>
      </div>
    </div>
  );
}