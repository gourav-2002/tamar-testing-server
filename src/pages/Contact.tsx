import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | Tamar Dyson Legal Services</title>
        <meta name="description" content="Contact Tamar Dyson Legal Services to request a free VA appeals case review. No upfront fees. Representing veterans nationwide." />
      </Helmet>
      <Navbar />
      
      <main
  className="relative bg-[#1A241B] min-h-screen bg-cover bg-no-repeat bg-[center_top] lg:bg-fixed lg:bg-[right_top]"
  style={{
    backgroundImage: "url('/Contact-laptop.png')"
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
    {/* Breadcrumb Navigation */}
    <nav className="flex items-center space-x-2 text-white/60 text-xs uppercase tracking-widest font-sans mb-8">
      <Link to="/" className="hover:text-[#C9A84C] transition-colors">HOME</Link>
      <span>/</span>
      <span className="text-[#C9A84C]">CONTACT ME</span>
    </nav>

    {/* Top Header Text Section */}
    <div className="max-w-xl mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-2"
      >
        You served
        <br />
        your country.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-[#C9A84C] font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
      >
        Let me help you fight
        <br />
        for the benefits you earned.
      </motion.div>

      {/* Gold Horizontal Line Accent */}
      <div className="w-16 h-[2px] bg-[#C9A84C] mb-6"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/80 font-serif text-base sm:text-lg leading-relaxed"
      >
        Complete the form below for a free case review. I'll review your information and let you know if I can assist you.
      </motion.div>
    </div>

    {/* Main Form & Info Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Main Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="lg:col-span-7 bg-[#FBF9F5] rounded-2xl p-6 md:p-10 shadow-2xl border border-[#C9A84C]/30"
      >
        <div className="text-2xl md:text-3xl font-serif font-bold text-[#2F3E2F] mb-2">
          Request a Free Case Review
        </div>

        <div className="text-[#2F3E2F]/75 font-serif text-sm md:text-base mb-8 leading-relaxed">
          Please complete the form below and the preliminary screening questions. This helps us understand your situation and determine whether we can assist you.
        </div>

        {/* Contact Form Component */}
        <ContactForm mode="single" />
      </motion.div>

      {/* Right Column - Info Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="lg:col-span-5"
      >
        
      </motion.div>
    </div>

    {/* Disclaimer Note */}
    <div className="mt-16 text-center text-white/60 text-xs italic font-serif">
      Submitting this form does not create an attorney-client relationship. Representation begins only after a signed written agreement.
    </div>
  </div>
</main>

      <Footer />
    </>
  );
};

export default Contact;
