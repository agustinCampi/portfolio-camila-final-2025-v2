import { Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    text: 'CAMTESSIO@GMAIL.COM',
    href: 'mailto:CAMTESSIO@GMAIL.COM',
  },
  {
    icon: Instagram,
    text: '@CAMIILA.SOL',
    href: 'https://instagram.com/CAMIILA.SOL',
  },
  {
    icon: Phone,
    text: '+54 911 21612864',
    href: 'tel:+5491121612864',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-muted py-16 md:py-24 pt-24 md:pt-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-6">
          Contacto
        </h2>
        <p className="max-w-2xl mx-auto text-base text-foreground/80 mb-12 font-normal">
          Para consultas profesionales, colaboraciones y contrataciones, no dudes en ponerte en contacto.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {contactInfo.map(({ icon: Icon, text, href }) => (
            <Button
              key={href}
              variant="link"
              className="text-foreground hover:text-foreground/70 text-sm font-normal tracking-wider hover:no-underline"
              asChild
            >
              <Link href={href}>
                <Icon className="h-5 w-5 mr-3" />
                {text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
