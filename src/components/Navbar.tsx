import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const links = [
  { to: "#inicio", label: "Inicio" },
  { to: "#nosotros", label: "Quiénes Somos" },
  { to: "#servicios", label: "Servicios" },
  { to: "#como-funciona", label: "Cómo Funciona" },
  { to: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy text-navy-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Second Look" className="h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm font-medium transition-colors hover:text-highlight text-navy-foreground/80"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-navy-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium transition-colors hover:text-highlight text-navy-foreground/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
