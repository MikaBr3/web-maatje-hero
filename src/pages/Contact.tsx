import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "@/assets/contact-mascotte.png";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ naam: "", email: "", bericht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met je op.",
    });
    setForm({ naam: "", email: "", bericht: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Laten we kennismaken
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Heb je een vraag of wil je een project bespreken? Vul het formulier in of neem direct contact op. We reageren meestal binnen 24 uur.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <Mail className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-foreground">info@web-maatje.nl</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <Phone className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-foreground">+31 6 12345678</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <MapPin className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-foreground">Nederland</span>
                </div>
              </div>

              <img src={contactImg} alt="Samenwerking" className="w-64 mx-auto md:mx-0" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Stuur een bericht</h2>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Naam</label>
                  <Input
                    placeholder="Jouw naam"
                    value={form.naam}
                    onChange={(e) => setForm({ ...form, naam: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                  <Input
                    type="email"
                    placeholder="jouw@email.nl"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Bericht</label>
                  <Textarea
                    placeholder="Vertel ons over jouw project..."
                    rows={5}
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    required
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send size={18} /> Verstuur bericht
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
