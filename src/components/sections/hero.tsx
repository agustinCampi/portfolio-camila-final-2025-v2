import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center text-center text-white px-4">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2355.webp?alt=media&token=123ced74-e326-4552-af47-3b36aaa2c8b6"
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
          className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-wider md:tracking-widest"
        >
          Camila Tessio
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