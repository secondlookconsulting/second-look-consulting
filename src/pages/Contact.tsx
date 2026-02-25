import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  console.log("SUBMIT FIRED");   
  e.preventDefault();

  try {
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const res = await fetch("https://formspree.io/f/mojnygal", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    const text = await res.text();
    console.log("Formspree status:", res.status);
    console.log("Formspree response:", text);
    
    if (!res.ok) throw new Error("Form submission failed");

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    formEl.reset();
    setForm({ name: "", email: "", phone: "", message: "" });
  } catch (err) {
    console.error(err);
    toast({
      title: "No se pudo enviar",
      description: "Intenta de nuevo en unos minutos.",
      variant: "destructive",
    });
  }
};

  return (
    <Layout>
      <section className="py-20 bg-navy text-navy-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contacto</h1>
          <p className="text-navy-foreground/70 text-lg max-w-2xl">
            Obtén claridad sobre tu caso hoy. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nombre</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Correo Electrónico</label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Teléfono</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensaje</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu caso..."
                  />
                </div>
                <button
                  type="submit"
                  //size="lg"
                  //className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Información de Contacto</h2>
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
                <h3 className="font-heading font-semibold text-foreground mb-2">Horario de Atención</h3>
                <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 AM – 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Sábado: 10:00 AM – 2:00 PM</p>
                <p className="text-sm text-muted-foreground">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
