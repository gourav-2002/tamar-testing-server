import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Briefcase, 
  FilePlus, 
  DollarSign, 
  Search, 
  Clock, 
  User, 
  MapPin,
  AlertCircle,
  Map, 
  Award 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    icon: <Briefcase size={24} />,
    question: "What types of cases do you handle?",
    answer: `My practice is limited to appeals of previously decided VA compensation and pension claims. This includes Supplemental Claims, Higher-Level Review, Board of Veterans’ Appeals cases, Clear and Unmistakable Error (CUE), earlier effective date issues, Special Monthly Compensation, and TDIU cases that have been initially denied.

If you disagree with a VA decision that has already been issued, I may be able to help.`
  },
  {
    icon: <FilePlus size={24} />,
    question: "Do you handle new claims?",
    answer: `No. I do not represent veterans in filing new claims or standalone requests for increased ratings.

If you are seeking assistance with an initial claim or certain increase requests, the Department of Veterans Affairs maintains a list of recognized Veterans Service Organizations that may assist you:
https://www.va.gov/ogc/apps/accreditation/accredvso.asp`
  },
  {
    icon: <DollarSign size={24} />,
    question: "How much does it cost to hire you?",
    answer: `There are no upfront attorney’s fees. In most appeals, attorney’s fees are contingent upon recovery of past-due benefits and are capped at 20% of the retroactive benefits awarded, consistent with VA regulations. This means that attorney’s fees are only paid if additional retroactive benefits are awarded. The fee agreement will be fully explained before representation begins so you can make an informed decision.`
  },
  {
    icon: <Search size={24} />,
    question: "What happens during a free case review?",
    answer: `You will be asked to complete a Pre-Consultation Questionnaire and provide a copy of your most recent VA decision.

I will review the decision to determine whether there are appeal options that I can assist with. If your matter falls within the scope of my practice, we will discuss next steps.

Submitting a questionnaire does not create an attorney-client relationship. Representation begins only after a signed agreement.`
  },
  {
    icon: <Clock size={24} />,
    question: "How long does a VA appeal take?",
    answer: `Appeals can take time. The length depends on the type of appeal, the evidence involved, and the VA’s current processing timelines.

Part of my role is to help you understand what to expect at each stage and to ensure that deadlines are met and submissions are properly prepared.`
  },
  {
    icon: <User size={24} />,
    question: "Will I work directly with you?",
    answer: `Yes. Although I use a consultant for particular cases I personally review and handle the cases I accept. You will communicate directly with me regarding your appeal.`
  },
  {
    icon: <AlertCircle size={24} />,
    question: "What if I have already been denied more than once?",
    answer: `Multiple denials do not necessarily mean a claim lacks merit. Sometimes decisions contain legal or factual errors, or important evidence was not properly considered.

Each case must be evaluated individually. A careful review of the decision and the record is essential.`
  },
  {
    icon:<MapPin size={24} />,
    question: "Do you represent veterans nationwide?",
    answer: `Yes. I represent veterans in appeals across the United States.`
  },
  {
    icon: <Award size={24} />,
    question: "What makes your practice different?",
    answer: `My practice is devoted exclusively to VA appeals. I bring more than four decades of legal experience, a background in litigation and government service, and personal familiarity with the VA disability system.

I approach each case with preparation, discipline, and respect for the veteran I represent.`
  }
];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Tamar Dyson Legal Services</title>
        <meta name="description" content="Find answers to common questions about VA appeals, attorney fees, case reviews, and how Tamar Dyson Legal Services can help veterans challenge VA compensation decisions." />
      </Helmet>
      <Navbar />
      <main className="bg-off-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-deep-olive py-20 pt-60">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-luxury-gold font-serif font-bold text-4xl md:text-5xl"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-off-white/80 mt-4 font-sans text-lg max-w-2xl"
            >
              Everything you need to know about VA appeals and working with Tamar Dyson Legal Services.
            </motion.p>
            <div className="w-20 h-1 bg-luxury-gold mt-6"></div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="overflow-hidden border border-deep-olive/10 shadow-sm rounded-xl">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`w-full flex items-center justify-between p-6 transition-all duration-300 outline-none ${
                      isOpen ? 'bg-deep-olive text-white' : 'bg-off-white text-deep-olive hover:bg-deep-olive/5'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-luxury-gold">
                        {faq.icon}
                      </span>
                      <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-left">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-luxury-gold flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="bg-white p-8 border-t border-deep-olive/5 text-deep-olive/80 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
