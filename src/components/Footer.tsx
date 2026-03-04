import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Web-Maatje" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">
            Jouw digitale maatje voor websites, apps en hosting op maat.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-4">Diensten</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/websites" className="hover:text-secondary transition-colors">Websites</Link></li>
            <li><Link to="/apps" className="hover:text-secondary transition-colors">Web & Mobiele Apps</Link></li>
            <li><Link to="/werkwijze" className="hover:text-secondary transition-colors">Werkwijze</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-4">Bedrijf</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/over-ons" className="hover:text-secondary transition-colors">Over ons</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> info@web-maatje.nl</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +31 6 12345678</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Nederland</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Web-Maatje. Alle rechten voorbehouden.
      </div>
    </div>
  </footer>
);

export default Footer;
