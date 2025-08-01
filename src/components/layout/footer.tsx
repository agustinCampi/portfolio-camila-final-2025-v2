import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-sm font-light text-primary-foreground/60">
          © {new Date().getFullYear()} Camila Tessio. Todos los derechos reservados.
        </p>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
