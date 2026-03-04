import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import mascotteImg from "@/assets/mascotte.png";
import { Heart, Users, Lightbulb, Target } from "lucide-react";

const values = [
  { icon: Heart, title: "Passie voor technologie", text: "Wij houden van wat we doen en dat zie je terug in ons werk." },
  { icon: Users, title: "Persoonlijke aanpak", text: "Bij ons ben je geen nummer. We werken nauw samen met onze klanten." },
  { icon: Lightbulb, title: "Creatieve oplossingen", text: "We denken buiten de kaders en vinden slimme oplossingen voor complexe vraagstukken." },
  { icon: Target, title: "Resultaatgericht", text: "We bouwen niet zomaar iets moois — het moet ook écht werken en resultaat opleveren." },
];

const OverOns = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-accent/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Over ons
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wij zijn Web-Maatje
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Web-Maatje is jouw digitale partner voor websites, apps en hosting. Wij geloven dat goede technologie toegankelijk moet zijn voor elk bedrijf, groot of klein.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Met een persoonlijke aanpak en oog voor kwaliteit helpen wij ondernemers om online te groeien. Geen ingewikkelde verhalen, maar heldere communicatie en mooie resultaten.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
            <img src={mascotteImg} alt="Web-Maatje mascotte" className="w-56 animate-float" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Onze waarden</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zullen we kennismaken?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          We vertellen je graag meer over wat we voor jou kunnen betekenen.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Neem contact op</Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default OverOns;
