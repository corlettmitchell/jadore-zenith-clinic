import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/jadore-logo-full.png";

const hormoneSubLinks = [
  { name: "Hormone Therapy", path: "/hormone-therapy" },
  { name: "Peptide Therapy", path: "/services/peptide-therapy" },
  { name: "Weight Loss", path: "/services/weight-loss" },
];

const recoverySubLinks = [
  { name: "Cold Plunge Therapy", path: "/services/cold-plunge" },
  { name: "Infrared Sauna", path: "/services/infrared-sauna" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hormone Replacement", path: "/hormone-therapy", hasDropdown: true, dropdownKey: "hormone" },
  { name: "Recovery Services", path: "/services", hasDropdown: true, dropdownKey: "recovery" },
  { name: "About", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  const getSubLinks = (key: string) => {
    if (key === "hormone") return hormoneSubLinks;
    if (key === "recovery") return recoverySubLinks;
    return [];
  };

  const isActiveDropdown = (key: string) => {
    const links = getSubLinks(key);
    return links.some(l => location.pathname === l.path);
  };

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
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.dropdownKey!)}
                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    className={`link-underline text-sm font-sans tracking-wide transition-colors inline-flex items-center gap-1 ${
                      isActiveDropdown(link.dropdownKey!)
                        ? "text-gold"
                        : isScrolled
                          ? "text-foreground/80 hover:text-foreground"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${openDropdown === link.dropdownKey ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`link-underline text-sm font-sans tracking-wide transition-colors inline-flex items-center gap-1 ${
                      location.pathname === link.path
                        ? "text-gold"
                        : isScrolled
                          ? "text-foreground/80 hover:text-foreground"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {openDropdown === link.dropdownKey && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="bg-card border border-border rounded-sm shadow-luxury-lg py-2">
                          {getSubLinks(link.dropdownKey!).map((subLink) => (
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
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-center"
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === link.dropdownKey ? null : link.dropdownKey!)}
                        className={`text-xl font-serif inline-flex items-center gap-2 ${
                          isActiveDropdown(link.dropdownKey!)
                            ? "text-gold"
                            : "text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${mobileDropdown === link.dropdownKey ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === link.dropdownKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 mt-4 pb-2">
                              {getSubLinks(link.dropdownKey!).map((subLink) => (
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
