import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
  >
    <div className="p-8 flex flex-col items-center text-center">
      <img src={image} alt={title} className="h-40 mb-6 group-hover:scale-105 transition-transform duration-300" />
      <h3 className="text-xl font-heading font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
      >
        Meer info <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default ServiceCard;
