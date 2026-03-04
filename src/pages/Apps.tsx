import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import appImg from "@/assets/app-mascotte.png";
import { Smartphone, Globe, Cloud, RefreshCcw, Lock, Layers } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Mobiele apps", text: "Native-achtige apps voor iOS en Android." },
  { icon: Globe, title: "Web applicaties", text: "Krachtige web apps bereikbaar via elke browser." },
  { icon: Cloud, title: "Cloud-gebaseerd", text: "Schaalbare oplossingen in de cloud." },
  { icon: RefreshCcw, title: "Automatisering", text: "Stroomlijn je bedrijfsprocessen met slimme tools." },
  { icon: Lock, title: "Veilig & privé", text: "Data bescherming staat voorop." },
  { icon: Layers, title: "Op maat gemaakt", text: "Volledig afgestemd op jouw werkwijze." },
];

const Apps = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-accent/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Apps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Web & mobiele apps die werken voor jou
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Van klantenportalen tot interne tools — wij bouwen apps die jouw bedrijf efficiënter maken en je klanten blij.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">App laten bouwen</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
            <img src={appImg} alt="Apps bouwen" className="w-full max-w-sm animate-float" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Mogelijkheden" title="Wat kun je verwachten?" />
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

    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Een app laten bouwen?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          Vertel ons over jouw idee en wij maken het werkelijkheid.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Start jouw project</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Apps;
