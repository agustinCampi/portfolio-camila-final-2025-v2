import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-sm font-light text-primary-foreground/60">
          © {new Date().getFullYear()} Camila Tessio. Todos los derechos reservados.
        </p>
        <p className="text-sm font-light text-primary-foreground/60 mt-2">
          Diseñado y desarrollado por{' '}
          <a
            href="https://www.instagram.com/agustincampi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Agustín Campaña
          </a>
          .
        </p>
        <div className="mt-4">
          <p className="text-xs text-primary-foreground/50">
            Política de Privacidad
          </p>
        </div>
      </div>
    </footer>
  );
}
