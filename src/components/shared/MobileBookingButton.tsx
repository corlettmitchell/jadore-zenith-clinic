import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const MobileBookingButton = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-charcoal/95 backdrop-blur-md border-t border-gold/20 p-4"
    >
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 w-full bg-gold text-charcoal font-sans font-medium py-4 rounded-sm shadow-gold"
      >
        <Calendar size={20} />
        <span>Book Consultation</span>
      </Link>
    </motion.div>
  );
};

export default MobileBookingButton;
