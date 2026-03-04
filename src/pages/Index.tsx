import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import heroImg from "@/assets/hero-mascotte.png";
import ideeImg from "@/assets/idee-mascotte.png";
import mascotteImg from "@/assets/mascotte.png";
import appImg from "@/assets/app-mascotte.png";
import { CheckCircle, Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Kennismaking", text: "We bespreken jouw wensen en doelen." },
  { icon: Palette, title: "Ontwerp", text: "We maken een passend design op maat." },
  { icon: Code, title: "Ontwikkeling", text: "We bouwen jouw website of app." },
  { icon: Rocket, title: "Lancering", text: "We gaan live en zorgen voor hosting." },
];

const reasons = [
  "Persoonlijke aanpak en korte lijntjes",
  "Moderne technologieën en designs",
  "Alles onder één dak: design, bouw en hosting",
  "Betaalbaar voor kleine bedrijven",
  "Snelle oplevering",
  "Betrouwbare partner op de lange termijn",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container relative py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                Websites & Apps op maat
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Jouw digitale <span className="text-primary">maatje</span> voor succes online
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Web-Maatje helpt kleine bedrijven met professionele websites, web apps en mobiele applicaties. Van idee tot lancering — wij regelen het.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">Vraag gratis advies aan</Button>
                </Link>
                <Link to="/werkwijze">
                  <Button variant="hero-outline" size="lg">Bekijk werkwijze</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src={heroImg} alt="Web-Maatje bouwt websites" className="w-full max-w-md animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Onze diensten"
            title="Wat wij voor jou kunnen doen"
            description="Van een simpele website tot een complete app — Web-Maatje heeft de oplossing."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Websites op maat"
              description="Professionele, snelle en responsive websites die jouw bedrijf laten groeien."
              image={heroImg}
              link="/websites"
            />
            <ServiceCard
              title="Web & Mobiele Apps"
              description="Gebruiksvriendelijke apps die perfect aansluiten bij jouw bedrijfsprocessen."
              image={appImg}
              link="/apps"
            />
            <ServiceCard
              title="Hosting & Beheer"
              description="Zorgeloos online met betrouwbare hosting en doorlopend onderhoud."
              image={ideeImg}
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* Why Web-Maatje */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={mascotteImg} alt="Web-Maatje mascotte" className="w-64 mx-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                Waarom wij
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Waarom kiezen voor Web-Maatje?
              </h2>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                    <span className="text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Werkwijze"
            title="In 4 stappen naar jouw website"
            description="Een helder en transparant proces van begin tot eind."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center mb-5">
                  <step.icon className="text-primary-foreground" size={28} />
                </div>
                <div className="text-sm font-semibold text-primary mb-1">Stap {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="gradient-hero rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Klaar om te beginnen?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Neem vandaag nog contact op voor een vrijblijvend gesprek over jouw project.
            </p>
            <Link to="/contact">
              <Button variant="warm" size="lg">Neem contact op</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
