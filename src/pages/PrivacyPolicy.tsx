import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Database, 
  Target, 
  MessageSquare, 
  HardDrive, 
  Lock, 
  MapPin, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      icon: <Database size={24} />,
      title: "Information Collected",
      content: (
        <div className="space-y-4">
          <p>
            Tamar Dyson Legal Services collects personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us.
          </p>
          <p>
            The personal information we collect may include: names, email addresses, phone numbers, and any other information you choose to provide in your communications with us. We may also collect technical data such as your IP address and browser type through standard web logs.
          </p>
        </div>
      )
    },
    {
      icon: <Target size={24} />,
      title: "Purpose of Collection",
      content: (
        <div className="space-y-4">
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide legal services.</li>
            <li>Communicate with you about your case or potential representation.</li>
            <li>Send you administrative information or updates regarding our policies.</li>
            <li>Improve our website and user experience.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <MessageSquare size={24} />,
      title: "SMS/Text Communication",
      content: (
        <div className="space-y-4">
          <p>
            If you provide your mobile phone number, you may opt-in to receive SMS/text communications from us regarding your legal matter. 
          </p>
          <p>
            Message and data rates may apply. You can opt-out of these communications at any time by replying "STOP" to any message you receive from us. We do not share your mobile phone number with third parties for marketing purposes.
          </p>
        </div>
      )
    },
    {
      icon: <HardDrive size={24} />,
      title: "Storage and Retention",
      content: (
        <div className="space-y-4">
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.
          </p>
        </div>
      )
    },
    {
      icon: <Lock size={24} />,
      title: "Confidentiality",
      content: (
        <div className="space-y-4">
          <p>
            We maintain the confidentiality of your personal information in accordance with our professional obligations as a legal service provider. We do not sell, rent, or lease your personal information to third parties.
          </p>
          <p>
            We may share your information with trusted third-party service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
          </p>
        </div>
      )
    },
    {
      icon: <MapPin size={24} />,
      title: "California Privacy Rights (CPRA Notice)",
      content: (
        <div className="space-y-4">
          <p>
            If you are a California resident, you have specific rights regarding your personal information under the California Privacy Rights Act (CPRA). These include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to know what personal information we collect and how we use it.</li>
            <li>The right to delete personal information collected from you (subject to certain exceptions).</li>
            <li>The right to correct inaccurate personal information.</li>
            <li>The right to opt-out of the sale or sharing of personal information (we do not sell or share your information).</li>
            <li>The right to non-discrimination for exercising your privacy rights.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. 
          </p>
          <p>
            Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment.
          </p>
        </div>
      )
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Policy Updates",
      content: (
        <div className="space-y-4">
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. 
          </p>
          <p>
            If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tamar Dyson Legal Services</title>
        <meta name="description" content="Read the Privacy Policy of Tamar Dyson Legal Services. Learn how we collect, use, and protect your personal information in compliance with California CPRA." />
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
              Privacy Policy
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

export default PrivacyPolicy;
