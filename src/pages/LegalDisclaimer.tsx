import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Scale, 
  UserCheck, 
  ShieldAlert, 
  Award, 
  Megaphone, 
  ExternalLink 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalDisclaimer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      icon: <Scale size={24} />,
      title: "No Legal Advice",
      content: (
        <div className="space-y-4">
          <p>
            The information provided on this website is for general informational purposes only and does not constitute legal advice. You should not act or rely on any information on this website without seeking the advice of a qualified attorney licensed in your jurisdiction.
          </p>
          <p>
            Legal matters are complex and fact-specific. The content here may not reflect the most current legal developments or the specific laws applicable to your individual situation.
          </p>
        </div>
      )
    },
    {
      icon: <UserCheck size={24} />,
      title: "No Attorney-Client Relationship",
      content: (
        <div className="space-y-4">
          <p>
            Your use of this website, and your communication with Tamar Dyson Legal Services through this website, does not create an attorney-client relationship. An attorney-client relationship is only formed when you and Tamar Dyson Legal Services have both signed a formal written engagement agreement.
          </p>
          <p>
            Submitting a contact form, sending an email, or leaving a voicemail does not mean that Tamar Dyson Legal Services represents you.
          </p>
        </div>
      )
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Confidential Information Warning",
      content: (
        <div className="space-y-4">
          <p>
            Please do not send any confidential or sensitive information through the contact forms on this website or via email until an attorney-client relationship has been established. Any information sent to us before we have agreed to represent you may not be treated as privileged or confidential.
          </p>
        </div>
      )
    },
    {
      icon: <Award size={24} />,
      title: "No Guarantee of Results",
      content: (
        <div className="space-y-4">
          <p>
            Any testimonials, case results, or descriptions of past matters on this website are intended to provide information about the experience of Tamar Dyson Legal Services. They do not constitute a guarantee, warranty, or prediction regarding the outcome of your specific legal matter. Every case is different and must be evaluated on its own merits.
          </p>
        </div>
      )
    },
    {
      icon: <Megaphone size={24} />,
      title: "Advertising Notice",
      content: (
        <div className="space-y-4">
          <p>
            In some jurisdictions, this website may be considered attorney advertising. The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.
          </p>
        </div>
      )
    },
    {
      icon: <ExternalLink size={24} />,
      title: "Third-Party Links",
      content: (
        <div className="space-y-4">
          <p>
            This website may contain links to third-party websites for your convenience. Tamar Dyson Legal Services does not endorse, and is not responsible for, the content or practices of any third-party sites. Your use of such sites is at your own risk.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Disclaimer | Tamar Dyson Legal Services</title>
        <meta name="description" content="Review the legal disclaimer for Tamar Dyson Legal Services. Submitting a contact form does not create an attorney-client relationship. No legal advice is provided through this website." />
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
              Legal Disclaimer
            </motion.h1>
            <div className="w-20 h-1 bg-luxury-gold mt-6"></div>
          </div>
        </section>

        {/* Content Section - Accordion */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            {sections.map((section, idx) => {
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
                        {section.icon}
                      </span>
                      <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-left">
                        {section.title}
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
                          {section.content}
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

export default LegalDisclaimer;
