import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.png";
import flagScales from "@/assets/flag-scales.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Una Segunda Mirada a Tu Caso Legal
            </h1>
            <p className="text-lg md:text-xl text-navy-foreground/80 mb-8 leading-relaxed">
              Te ayudamos a entender tus documentos de la corte y lo que pasó en tu caso — en español y sin complicaciones.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                <Link to="/contacto">Solicita una Revisión <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground bg-navy-foreground/10 hover:bg-navy-foreground/10">
                <Link to="/contacto">Agenda una Consulta</Link>
              </Button>
            </div>
            <p className="text-sm text-navy-foreground/50 italic">
              Second Look no es un bufete de abogados. No ofrecemos representación legal.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Confianza", desc: "Abogados retirados con décadas de experiencia a tu servicio." },
              { icon: FileText, title: "Claridad", desc: "Explicamos tus documentos legales en español y de forma sencilla." },
              { icon: Scale, title: "Transparencia", desc: "Revisión independiente y honesta de tu caso." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flag & Scales accent */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <img src={flagScales} alt="American flag and scales of justice" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Sirviendo a Nuestra Comunidad</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entendemos los retos que enfrenta la comunidad latina al navegar el sistema legal de los Estados Unidos. 
              Por eso ofrecemos nuestros servicios en español, con paciencia y dedicación.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos dedicamos a ayudarte a entender tu situación para que tomes decisiones con mayor seguridad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Obtén Claridad Sobre Tu Caso Hoy</h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
            No tienes que entender todo solo. Déjanos ayudarte a ver tu caso con claridad.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
            <Link to="/contacto">Contáctanos <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
