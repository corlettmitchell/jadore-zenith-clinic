import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/jadore-logo-full.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hormone Therapy", path: "/hormone-therapy" },
  { name: "Services", path: "/services" },
  { name: "Aesthetics", path: "/aesthetics" },
  { name: "About", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              className="h-12 md:h-14 w-auto object-cover object-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`link-underline text-sm font-sans tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-gold"
                    : isScrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
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
            className="fixed inset-0 z-40 lg:hidden bg-background pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
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
