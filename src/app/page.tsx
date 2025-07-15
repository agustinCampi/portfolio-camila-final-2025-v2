import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Portfolio from '@/components/sections/portfolio';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
