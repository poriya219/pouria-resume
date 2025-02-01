import Head from 'next/head';
import Footer from '@/components/footer';
import ProjectCard from '@/components/project-card';
import Hero from '@/components/hero';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Abo Portfolio</title>
      </Head>
      <Header />
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ProjectCard title="Flop App" description="Social media for poker players" imgUrl="/flop-app.png" />
        <ProjectCard title="Landscape" description="Lend and Borrow Dashboard" imgUrl="/landscape-dashboard.png" />
      </section>
      <Footer />
    </div>
  );
}