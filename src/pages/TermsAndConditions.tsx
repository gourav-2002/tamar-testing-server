import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Minus, 
  Globe, 
  AlertCircle, 
  Copyright, 
  ShieldX, 
  Gavel, 
  Edit3 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      icon: <Globe size={24} />,
      title: "Use of Website",
      content: (
        <div className="space-y-4">
          <p>
            By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          <p>
            You may use this website for lawful purposes only. You agree not to use the website in any way that violates any applicable federal, state, local, or international law or regulation.
          </p>
        </div>
      )
    },
    {
      icon: <AlertCircle size={24} />,
      title: "No Reliance",
      content: (
        <div className="space-y-4">
          <p>
            The information presented on or through this website is made available solely for general informational purposes. We do not warrant the accuracy, completeness, or usefulness of this information.
          </p>
          <p>
            Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the website, or by anyone who may be informed of any of its contents.
          </p>
        </div>
      )
    },
    {
      icon: <Copyright size={24} />,
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Tamar Dyson Legal Services, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
          </p>
        </div>
      )
    },
    {
      icon: <ShieldX size={24} />,
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            In no event will Tamar Dyson Legal Services, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites.
          </p>
          <p>
            This includes any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
          </p>
        </div>
      )
    },
    {
      icon: <Gavel size={24} />,
      title: "Governing Law",
      content: (
        <div className="space-y-4">
          <p>
            All matters relating to the website and these Terms and Conditions, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule.
          </p>
          <p>
            Any legal suit, action, or proceeding arising out of, or related to, these Terms and Conditions or the website shall be instituted exclusively in the federal courts of the United States or the courts of the State of California.
          </p>
        </div>
      )
    },
    {
      icon: <Edit3 size={24} />,
      title: "Modifications",
      content: (
        <div className="space-y-4">
          <p>
            We may revise and update these Terms and Conditions from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the website thereafter.
          </p>
          <p>
            Your continued use of the website following the posting of revised Terms and Conditions means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tamar Dyson Legal Services</title>
        <meta name="description" content="Read the Terms and Conditions of Tamar Dyson Legal Services. Understand the rules governing use of this website, intellectual property, limitation of liability, and governing law." />
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
              Terms & Conditions
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

export default TermsAndConditions;
