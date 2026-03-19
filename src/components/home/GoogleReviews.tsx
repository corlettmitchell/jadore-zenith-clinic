import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef, useState, useCallback } from "react";

interface Review {
  name: string;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Michael L",
    text: "Jadore Wellness is fantastic. The space is clean, calming, and very welcoming the moment you walk in. The staff is knowledgeable, professional, and takes the time to make sure you feel comfortable and taken care of. Everything feels very personalized and high quality, and you can tell they genuinely care about their clients and the results they deliver. I left feeling refreshed and well taken care of. Highly recommend Jadore Wellness to anyone looking for a great experience and excellent service. I'll definitely be back.",
    date: "1 week ago",
  },
  {
    name: "Yuliya N",
    text: "Highly recommend! I had a great experience at J'adore Wellness. The team is extremely professional and the clinic is very modern and clean. The hormone optimization program was explained in detail and I felt like the doctor really took time to go through my labs and symptoms. Highly recommend for anyone looking to improve energy, fitness, and overall health. Will be back again soon.",
    date: "1 week ago",
  },
  {
    name: "Chuan",
    text: "I've had a really great experience with J'adore Wellness. From the moment I walked in, the team took the time to really listen and understand what I was looking for rather than just rushing through an appointment. They explained everything clearly, answered all of my questions patiently, and made sure I felt comfortable with each step of the process. You can tell they genuinely care about their clients and take pride in their work. The whole experience was thoughtful, welcoming, and very personalized.",
    date: "1 week ago",
  },
  {
    name: "Varvara L",
    text: "I had a really great experience. The clinic is beautiful and the staff is super friendly. The doctor actually took time to go over my labs and explain everything about hormone optimization. It feels like a very professional, physician-led clinic and I left feeling great. Definitely recommend if you're looking for a wellness clinic in Oceanside. Really impressed with J'adore Wellness. The doctor took the time to review my labs in depth and explain everything clearly. Dr Oleg took care of me. The approach is very evidence-based and personalized. The recovery services are also great — cold plunge is getting those endorphins out after therapy.",
    date: "1 week ago",
  },
  {
    name: "Ari P",
    text: "J'adore Wellness is a great addition to the Oceanside wellness scene. The space is thoughtfully designed and the team clearly takes a modern, science-based approach to health and recovery. They offer a wide range of services—from hormone optimization and IV therapy to recovery tools like cold plunge and infrared sauna—so it feels like a true one-stop shop for people looking to improve how they feel and perform day to day. What really stands out is the focus on personalized care and making clients feel comfortable and informed throughout the process. If you're looking for a place that blends advanced wellness treatments with a welcoming environment, J'adore Wellness is definitely worth checking out.",
    date: "1 week ago",
  },
  {
    name: "Luda K",
    text: "I highly recommend J'adore Wellness. Dr. Oleg took the time to explain hormone balance in a way that made total sense. It's clear he truly cares about his patients.",
    date: "1 week ago",
  },
  {
    name: "Ivan K",
    text: "The team at J'adore Wellness is wonderful. The consultation was detailed and educational, and the clinic itself has such a relaxing and professional atmosphere.",
    date: "1 week ago",
  },
  {
    name: "Elina M",
    text: "Found J'adore Wellness for hormone optimization in Oceanside and was very impressed. The consultation was very detailed, the team clearly knows what they're doing. Highly recommend.",
    date: "1 week ago",
  },
  {
    name: "Kayla L",
    text: "Such a great experience!! I loved my time and well worth the money. I loved the complete suite of services—especially the sauna and cold plunge. Will be back!!",
    date: "1 week ago",
  },
  {
    name: "Blake S",
    text: "Dr. Oleg is incredibly personable and was able to curate a unique conversation on health and wellness tailored to my lab results which was greatly appreciated. He has a unique ability to create a proactive and positive experience when discussing men's health and is refreshingly genuine in outlining care path options / recommendations etc. 10/10 experience, thank you!",
    date: "1 day ago",
  },
  {
    name: "Jenn L",
    text: "I'd been dealing with perimenopause symptoms for a while, and my primary care doctor was pretty dismissive — basically told me I wasn't suffering enough to warrant any real conversation. J'adore was the opposite. The providers actually listened, took me seriously, and didn't make me feel like I was being dramatic. They started me on a low dose of hormones and within days I genuinely felt like myself again — mental clarity, better energy, mood lifted. I keep thinking about how different the last two years could have been. If you're on the fence, just go. The process was simple and fast, and I'm already looking forward to asking about peptides at my next visit.",
    date: "6 days ago",
  },
  {
    name: "Mary W",
    text: "Very inviting place and staff is so pleasant and informative. All my questions were answered in terms that were straightforward and also great follow-up. Felt at ease at all times and left fully revitalized. Definitely will be back to try more of their services! Give them a try, you won't be disappointed.",
    date: "1 week ago",
  },
  {
    name: "Ronita G",
    text: "J'adore Wellness is on point. The team is extremely knowledgeable and professional. They truly focus on helping you feel your best.",
    date: "1 week ago",
  },
  {
    name: "Julia D",
    text: "Absolutely loved my first visit here. The clinic is gorgeous and the staff is so welcoming. The consultation was very thorough and I felt like all of my questions were answered and health concerns were really listened to. The doctor laid out a great plan for my journey.",
    date: "1 week ago",
  },
  {
    name: "Jenna H",
    text: "I've known Dr. Ryabinin for years — even back when he was completing his surgery residency — and he has always been the kind of doctor who genuinely listens, not that fake buzz words \"what other questions do you have\" vibe. So seeing that same energy at J'adore Wellness in Oceanside, CA feels exactly right. The whole vibe of this physician-led clinic is warm, calm, and actually comforting. I've been working with him on hormone optimization, and he explains everything in a way that feels supportive and easy to understand. No pressure, no confusion — just real, thoughtful guidance. If you're looking for a wellness clinic in Oceanside that offers medical weight-loss support, TRT clinic services, recovery treatments, and patient-centered care, J'adore Wellness is such an easy yes. Oceanside truly lucked out with this one.",
    date: "1 week ago",
  },
  {
    name: "Cooper M",
    text: "Great service, and amenities. Quality care I would recommend to anyone! Thanks again Dr. Oleg.",
    date: "1 week ago",
  },
];

const CHAR_LIMIT = 180;
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/J'adore+Wellness";

const ReviewCard = ({ review, onReadMore }: { review: Review; onReadMore: (review: Review) => void }) => {
  const isLong = review.text.length > CHAR_LIMIT;

  return (
    <div className="h-full rounded-sm border border-border bg-card p-6 flex flex-col shadow-luxury">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-gold text-gold" />
        ))}
      </div>
      <div className="flex-1 mb-4">
        <p className="body-regular text-foreground/80 italic">
          "{isLong ? `${review.text.slice(0, CHAR_LIMIT).trimEnd()}…` : review.text}"
        </p>
        {isLong && (
          <button
            onClick={() => onReadMore(review)}
            className="inline-flex items-center gap-1 mt-2 text-xs font-sans text-gold hover:text-gold-light transition-colors"
          >
            Read more
          </button>
        )}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-sans text-sm font-medium text-foreground">
          {review.name}
        </span>
        <span className="text-xs text-muted-foreground font-sans">
          {review.date}
        </span>
      </div>
    </div>
  );
};

const ReviewModal = ({ review, onClose }: { review: Review; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-card border border-border rounded-sm p-8 shadow-luxury-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-gold text-gold" />
          ))}
        </div>

        <p className="body-regular text-foreground/80 italic leading-relaxed mb-6">
          "{review.text}"
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-sans text-sm font-medium text-foreground">
            {review.name}
          </span>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-xs text-muted-foreground font-sans">
              {review.date}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GoogleReviews = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const autoScrollPlugin = useRef(
    AutoScroll({ speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true, startDelay: 0 })
  );

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-sans text-muted-foreground ml-1">
              5.0 · {reviews.length} reviews
            </span>
          </div>

          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Patient Reviews
          </span>
          <h2 className="heading-section">What Our Patients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoScrollPlugin.current]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <ReviewCard review={review} onReadMore={setSelectedReview} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 border-gold/30 text-gold hover:bg-gold hover:text-charcoal" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 border-gold/30 text-gold hover:bg-gold hover:text-charcoal" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-gold hover:text-gold-light transition-colors tracking-wide uppercase"
          >
            See All Reviews on Google
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
