import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ideeImg from "@/assets/idee-mascotte.png";
import contactImg from "@/assets/contact-mascotte.png";
import { Lightbulb, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Kennismaken & idee",
    text: "We starten met een vrijblijvend gesprek. Wat is jouw doel? Wie zijn je klanten? Samen bepalen we de beste aanpak.",
  },
  {
    icon: Palette,
    num: "02",
    title: "Ontwerp & design",
    text: "Op basis van jouw wensen maken we een modern design. Je krijgt een preview en kunt feedback geven voordat we verder gaan.",
  },
  {
    icon: Code,
    num: "03",
    title: "Ontwikkeling & bouw",
    text: "We bouwen jouw website of app met moderne technologieën. Tussendoor houden we je op de hoogte van de voortgang.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Testen & lancering",
    text: "We testen alles grondig op functionaliteit en snelheid. Daarna gaan we live en vieren we samen het resultaat!",
  },
  {
    icon: HeadphonesIcon,
    num: "05",
    title: "Onderhoud & support",
    text: "Na de lancering blijven we beschikbaar voor updates, hosting en support. Je staat er nooit alleen voor.",
  },
];

const Werkwijze = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-accent/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Werkwijze
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hoe wij jouw project aanpakken
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Een helder en transparant proces zodat jij precies weet wat je kunt verwachten. Van het eerste idee tot een succesvol eindproduct.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
            <img src={ideeImg} alt="Idee en strategie" className="w-64 animate-float" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 mb-12 last:mb-0"
          >
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center">
                <step.icon className="text-primary-foreground" size={24} />
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-primary mb-1">Stap {step.num}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={contactImg} alt="Samenwerking" className="w-72 mx-auto" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benieuwd naar de mogelijkheden?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Plan een vrijblijvend gesprek en ontdek hoe Web-Maatje jou kan helpen.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Plan een gesprek</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Werkwijze;
