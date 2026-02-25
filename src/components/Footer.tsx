import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Second Look" className="h-10 mb-4" />
          <p className="text-sm text-navy-foreground/70 leading-relaxed">
            Te ayudamos a entender tus documentos legales y lo que pasó en tu caso.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">Navegación</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Inicio" },
              { to: "/nosotros", label: "Quiénes Somos" },
              { to: "/servicios", label: "Servicios" },
              { to: "/como-funciona", label: "Cómo Funciona" },
              { to: "/contacto", label: "Contacto" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-navy-foreground/70 hover:text-highlight transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">Contacto</h4>
          <p className="text-sm text-navy-foreground/70">info@secondlook.consulting</p>
          <p className="text-sm text-navy-foreground/70">(385) 398-6830</p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 mt-8 pt-6">
        <p className="text-xs text-navy-foreground/50 text-center leading-relaxed max-w-3xl mx-auto">
          Second Look Legal Consulting provides independent case review and legal information services. We are not a law firm and do not provide legal advice or legal representation. © {new Date().getFullYear()} Second Look. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
