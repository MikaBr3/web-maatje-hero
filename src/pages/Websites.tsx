import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-mascotte.png";
import { Monitor, Smartphone, Zap, Search, Shield, BarChart3 } from "lucide-react";

const features = [
  { icon: Monitor, title: "Responsive design", text: "Perfect op elk scherm, van mobiel tot desktop." },
  { icon: Zap, title: "Supersnel", text: "Geoptimaliseerd voor snelle laadtijden." },
  { icon: Search, title: "SEO-vriendelijk", text: "Gevonden worden in Google is essentieel." },
  { icon: Shield, title: "Veilig & betrouwbaar", text: "SSL-certificaat en regelmatige updates." },
  { icon: Smartphone, title: "Gebruiksvriendelijk", text: "Intuïtieve navigatie voor jouw bezoekers." },
  { icon: BarChart3, title: "Meetbare resultaten", text: "Analytics integratie voor inzicht in je bezoekers." },
];

const Websites = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 md:py-28 bg-accent/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Websites
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professionele websites die resultaat opleveren
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Een goede website is het visitekaartje van jouw bedrijf. Wij bouwen moderne, snelle en gebruiksvriendelijke websites die jouw klanten overtuigen.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Website laten maken</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
            <img src={heroImg} alt="Website bouwen" className="w-full max-w-md animate-float" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Kenmerken" title="Wat maakt onze websites bijzonder?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                <f.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Klaar voor een nieuwe website?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          Laat ons weten wat je nodig hebt. We denken graag met je mee!
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Vraag een offerte aan</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Websites;
