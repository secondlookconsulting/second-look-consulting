import { ArrowRight, Shield, FileText, Scale, Users, BookOpen, Award, FolderOpen, Clock, HelpCircle, Receipt, XCircle, Upload, Search, FileCheck, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.png";
import flagScales from "@/assets/flag-scales.png";

const services = [
  { icon: BookOpen, title: "Traducción de Documentos Legales", desc: "Órdenes del juez, sentencias, mociones, citatorios y notificaciones de audiencia. Reportes policiales, declaraciones juradas. Notificaciones de inmigración, cartas del gobierno, documentos de seguro y más." },
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

const steps = [
  { icon: Upload, num: "1", title: "Envíanos tus documentos", desc: "Comparte los documentos de tu caso de forma segura. Aceptamos copias físicas o digitales." },
  { icon: Search, num: "2", title: "Revisamos tu caso cuidadosamente", desc: "Nuestro equipo de abogados retirados analiza cada detalle de tu expediente con atención." },
  { icon: FileCheck, num: "3", title: "Te entregamos un resumen claro", desc: "Recibes un informe organizado y fácil de entender, con una línea de tiempo y puntos clave." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mojnygal", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Form submission failed");
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "No se pudo enviar", description: "Intenta de nuevo en unos minutos.", variant: "destructive" });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-navy text-navy-foreground">
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
                <a href="#contacto">Solicita una Revisión <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground bg-navy-foreground/10 hover:bg-navy-foreground/10">
                <a href="#contacto">Agenda una Consulta</a>
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

      {/* Flag & Scales / About */}
      <section id="nosotros" className="py-16 bg-muted">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <img src={flagScales} alt="American flag and scales of justice" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Quiénes Somos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos un equipo de abogados retirados con décadas de experiencia en el sistema legal de los Estados Unidos.
              Entendemos los retos que enfrenta la comunidad latina al navegar el sistema legal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ahora nos enfocamos en revisar y explicar casos legales para que nuestros clientes se sientan informados y seguros al tomar decisiones importantes.
            </p>
            <p className="text-foreground font-medium leading-relaxed border-l-4 border-primary pl-6">
              "Nos dedicamos a ayudarte a entender tu situación para que tomes decisiones con mayor seguridad."
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12">
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

      {/* Services */}
      <section id="servicios" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">Servicios diseñados para darte claridad y confianza sobre tu situación legal.</p>
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

      {/* What we don't do */}
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

      {/* How it works */}
      <section id="como-funciona" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Cómo Funciona</h2>
          <p className="text-muted-foreground text-lg mb-12">Un proceso simple y transparente para darte tranquilidad.</p>
          <div className="space-y-12">
            {steps.map(({ icon: Icon, num, title, desc }) => (
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

      {/* Contact */}
      <section id="contacto" className="py-16 bg-navy text-navy-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contacto</h2>
          <p className="text-navy-foreground/70 text-lg max-w-2xl mb-12">
            Obtén claridad sobre tu caso hoy. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nombre</label>
                  <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Correo Electrónico</label>
                  <Input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Teléfono</label>
                  <Input name="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensaje</label>
                  <Textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder="Cuéntanos sobre tu caso..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Información de Contacto</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Teléfono", value: "(385) 398-6830" },
                  { icon: Mail, label: "Correo Electrónico", value: "info@secondlook.consulting" },
                  { icon: MapPin, label: "Ubicación", value: "Sirviendo a la comunidad latina en todo Estados Unidos" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-2">Horario de Atención</h4>
                <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 AM – 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Sábado: 10:00 AM – 2:00 PM</p>
                <p className="text-sm text-muted-foreground">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Obtén Claridad Sobre Tu Caso Hoy</h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
            No tienes que entender todo solo. Déjanos ayudarte a ver tu caso con claridad.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
            <a href="#contacto">Contáctanos <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
