import Layout from "@/components/Layout";
import { Upload, Search, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Upload, num: "1", title: "Envíanos tus documentos", desc: "Comparte los documentos de tu caso de forma segura. Aceptamos copias físicas o digitales." },
  { icon: Search, num: "2", title: "Revisamos tu caso cuidadosamente", desc: "Nuestro equipo de abogados retirados analiza cada detalle de tu expediente con atención." },
  { icon: FileCheck, num: "3", title: "Te entregamos un resumen claro", desc: "Recibes un informe organizado y fácil de entender, con una línea de tiempo y puntos clave." },
];

const HowItWorks = () => (
  <Layout>
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Cómo Funciona</h1>
        <p className="text-navy-foreground/70 text-lg max-w-2xl">Un proceso simple y transparente para darte tranquilidad.</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-12">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <div key={num} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Paso {num}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">¿Listo para Empezar?</h2>
        <p className="mb-8 text-primary-foreground/80">El primer paso hacia la claridad es contactarnos.</p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
          <Link to="/contacto">Solicita una Revisión <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
