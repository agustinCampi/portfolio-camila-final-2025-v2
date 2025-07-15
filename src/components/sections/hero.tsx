import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Camila Tessio posing for a photoshoot"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
        priority
        data-ai-hint="fashion model"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light uppercase text-shadow-sm"
          style={{ letterSpacing: '0.2em' }}
        >
          Capturando la Esencia.
        </h1>
        <Link href="#portfolio" passHref>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground rounded-sm px-10 py-6 text-base font-normal uppercase tracking-widest hover:bg-primary/80"
          >
            View Portfolio
          </Button>
        </Link>
      </div>
    </section>
  );
}
