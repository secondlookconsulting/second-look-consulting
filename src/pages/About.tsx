import Layout from "@/components/Layout";
import { Users, BookOpen, Award } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Quiénes Somos</h1>
        <p className="text-navy-foreground/70 text-lg max-w-2xl">Abogados retirados dedicados a ayudarte a entender tu situación legal.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Somos un equipo de abogados retirados con décadas de experiencia en el sistema legal de los Estados Unidos. 
          Después de años de práctica, decidimos dedicar nuestro conocimiento a ayudar a quienes más lo necesitan.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Ahora nos enfocamos en revisar y explicar casos legales para que nuestros clientes se sientan informados y seguros 
          al tomar decisiones importantes.
        </p>
        <p className="text-lg text-foreground font-medium leading-relaxed border-l-4 border-primary pl-6">
          "Nos dedicamos a ayudarte a entender tu situación para que tomes decisiones con mayor seguridad."
        </p>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Equipo Experimentado", desc: "Abogados retirados con amplia experiencia en diversas áreas del derecho." },
            { icon: BookOpen, title: "Revisión Detallada", desc: "Analizamos cada documento con cuidado para darte respuestas claras." },
            { icon: Award, title: "Compromiso Contigo", desc: "Tu tranquilidad y comprensión son nuestra prioridad número uno." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 rounded-lg border border-border">
              <Icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
