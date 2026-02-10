import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/jadore-logo-full.png";

const serviceSubLinks = [
  { name: "Cold Plunge", path: "/services/cold-plunge" },
  { name: "Infrared Saunas", path: "/services/infrared-sauna" },
  { name: "Compression", path: "/services/compression" },
  { name: "Peptide Therapy", path: "/services/peptide-therapy" },
  { name: "Weight Loss", path: "/services/weight-loss" },
  { name: "Aesthetics", path: "/aesthetics" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hormone Therapy", path: "/hormone-therapy" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "About", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-luxury py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-luxury flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 overflow-hidden">
            <img
              src={logo}
              alt="J'adore Wellness"
              className="h-14 md:h-16 w-auto object-cover object-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`link-underline text-sm font-sans tracking-wide transition-colors inline-flex items-center gap-1 ${
                    location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services'))
                      ? "text-gold"
                      : isScrolled
                        ? "text-foreground/80 hover:text-foreground"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="bg-card border border-border rounded-sm shadow-luxury-lg py-2">
                          <Link
                            to="/services"
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-gold transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="border-t border-border my-1" />
                          {serviceSubLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                location.pathname === subLink.path
                                  ? "text-gold bg-secondary"
                                  : "text-foreground hover:bg-secondary hover:text-gold"
                              }`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.optimantra.com/optimus/om/public/getConsentForm?cnsntfrmId=65181&userId=&patientId=0&cnsntfrmfilledFormId=&isEdit=0&isPreview=0&isFormTemplate=0"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-sans transition-colors ${
                isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Patient Portal
            </a>
            <Link to="/intake">
              <Button variant={isScrolled ? "gold" : "gold-outline"} size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background pt-20 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-center"
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`text-xl font-serif inline-flex items-center gap-2 ${
                          location.pathname.startsWith('/services')
                            ? "text-gold"
                            : "text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 mt-4 pb-2">
                              <Link
                                to="/services"
                                className={`text-base ${
                                  location.pathname === '/services'
                                    ? "text-gold"
                                    : "text-muted-foreground"
                                }`}
                              >
                                All Services
                              </Link>
                              {serviceSubLinks.map((subLink) => (
                                <Link
                                  key={subLink.path}
                                  to={subLink.path}
                                  className={`text-base ${
                                    location.pathname === subLink.path
                                      ? "text-gold"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-xl font-serif ${
                        location.pathname === link.path
                          ? "text-gold"
                          : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 mt-6 w-full max-w-xs"
              >
                <a
                  href="https://www.optimantra.com/optimus/om/public/getConsentForm?cnsntfrmId=65181&userId=&patientId=0&cnsntfrmfilledFormId=&isEdit=0&isPreview=0&isFormTemplate=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-foreground/70 hover:text-foreground transition-colors"
                >
                  Patient Portal
                </a>
                <Link to="/intake" className="w-full">
                  <Button variant="gold" size="lg" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;