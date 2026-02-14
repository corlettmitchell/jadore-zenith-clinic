import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/jadore-logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="J'adore Wellness" className="h-12 mb-6" />
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Where science meets personal wellness. Delivering hormone optimization, 
              regenerative therapies, and medical weight management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Hormone Therapy", path: "/hormone-therapy" },
                { name: "Peptide Therapy", path: "/services/peptide-therapy" },
                { name: "Weight Loss", path: "/services/weight-loss" },
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/team" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Services</h4>
            <ul className="space-y-3">
              {[
                "Hormone Replacement Therapy",
                "Peptide Therapy",
                "Weight Loss",
                "Cold Plunge Therapy",
                "Infrared Sauna",
              ].map((service) => (
                <li key={service}>
                  <span className="text-ivory/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">
                  1763 Oceanside Blvd, Suite B<br />
                  Oceanside, CA 92054
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+14422211138" className="text-ivory/70 hover:text-gold text-sm transition-colors">(442) 221-1138</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-ivory/70 text-sm">info@jadorewellness.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">
                  Mon - Fri: 9am - 6pm<br />
                  Sat: 10am - 4pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 text-sm">
            © {new Date().getFullYear()} J'adore Wellness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-ivory/50 hover:text-ivory text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ivory/50 hover:text-ivory text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
