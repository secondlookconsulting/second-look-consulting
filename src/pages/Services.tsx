import Layout from "@/components/Layout";
import { FileText, FolderOpen, Clock, HelpCircle, Receipt, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: FileText, title: "Explicaciones de Documentos", desc: "Explicaciones claras y sencillas de documentos de la corte, traducidas a un lenguaje que puedas entender." },
  { icon: FolderOpen, title: "Organización de Expediente", desc: "Organización completa de tu expediente para que tengas todo en orden." },
  { icon: Clock, title: "Línea de Tiempo", desc: "Creamos una línea de tiempo de tu caso — qué pasó y cuándo — para que veas el panorama completo." },
  { icon: HelpCircle, title: "Preparación de Preguntas", desc: "Te ayudamos a preparar preguntas inteligentes para tu abogado antes de tu próxima reunión." },
  { icon: Receipt, title: "Revisión de Facturas", desc: "Si tienes dudas sobre lo que te están cobrando, revisamos tus facturas legales." },
];

const notDo = [
  "No damos asesoría legal",
  "No representamos en corte",
  "No sustituimos a tu abogado",
];

const Services = () => (
  <Layout>
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Nuestros Servicios</h1>
        <p className="text-navy-foreground/70 text-lg max-w-2xl">Servicios diseñados para darte claridad y confianza sobre tu situación legal.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Lo que NO Hacemos</h2>
        <div className="space-y-4">
          {notDo.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">¿Necesitas Ayuda con Tu Caso?</h2>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
          <Link to="/contacto">Contáctanos <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
