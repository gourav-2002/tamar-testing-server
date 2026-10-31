import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  Scale,
  UserCheck,
  Award,
  Clock,
  Phone,
  Mail,
  Menu,
  Plus,
  X,
  Quote,
  Briefcase,
  Medal,
  Handshake,
  AlertTriangle,
  FileSearch,
  Repeat,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Shield,
  MessageSquare,
  Search,
  Calculator,
  Landmark,
  Trophy,
  Trash2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hero = () => {
  return (

    <>
      <section
  className="relative min-h-screen hidden lg:flex items-center overflow-hidden pt-20 mt-8 bg-cover bg-center"
  style={{
    backgroundImage: "url('/background-hero-tamar-2.webp')",
  }}
>
  {/* Left Vertical Decorative Line */}
  <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-px bg-gold/40 hidden xl:block"></div>

  <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      {/* Accent Horizontal Decorative Line */}
      <div className="w-12 h-[2px] bg-[#dbbc65] mb-6"></div>

      {/* Main Tagline */}
      <div className="text-[#dbbc65] font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 uppercase tracking-tight">
        IF YOU SERVED,
        <br />
        YOU DESERVE.
      </div>

      {/* Subheading */}
      <div className="text-white font-serif font-semibold text-2xl md:text-3xl leading-snug mb-6">
        You do not have to navigate the VA appeals process alone.
      </div>

      {/* Paragraph */}
      <div className="text-white/80 font-serif text-lg md:text-xl leading-relaxed mb-10">
        If you have received a VA decision that does not reflect the benefits you earned through your service, I am here to help.
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <Link to="/contact">
          <button className="bg-[#dbbc65] text-[#1a1a2e] font-sans font-semibold px-7 py-4 rounded-none hover:brightness-110 transition-all shadow-md text-base md:text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
            <span>Request a Free Case Review</span>
            <span className="text-xl">→</span>
          </button>
        </Link>

        <Link to="/contact">
          <button className="border border-[#dbbc65]/60 text-white font-sans font-medium px-7 py-4 rounded-none hover:bg-white/10 transition-all text-base md:text-lg text-center w-full sm:w-auto">
            No Attorney's Fees Upfront
          </button>
        </Link>
      </div>
    </motion.div>

    {/* Right Content - Person Image */}
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute right-0 bottom-0 h-full w-1/2 hidden lg:block"
    >
      <div className="relative h-full w-full">
        <img
          src="/tamar-dyson-hero.png"
          alt="Tamar Dyson"
          className="w-full h-full object-contain object-bottom"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  </div>
</section>

      <section className="block lg:hidden pt-28 px-4 bg-white mt-16">
        <div className="max-w-170 mx-auto text-center">

          <span className="text-[#C9A84C] font-sans font-bold text-xl uppercase tracking-[0.2em] block mb-6">
            IF YOU SERVED - YOU DESERVE
          </span>
          <h1 className="text-5xl font-serif font-bold text-[#C9A84C] mb-6">
            You Served Your Country.
          </h1>

          <h2 className="text-4xl font-serif font-bold text-[#2F3E2F] mb-8">
            You Do Not Have to Navigate the VA Alone.
          </h2>

          <p className="text-gray-600 mb-6 text-base font-bold">
            If you have received a VA decision that does not reflect the benefits you believe you earned, I am here to help.
          </p>

          <div className="mb-6 mt-2">
            <Link
              to="/contact"
              className="bg-[#dbbc65] text-[#2F3E2F] font-sans font-bold px-8 py-4 rounded-none hover:brightness-110 transition-all shadow-lg text-lg inline-block"
            >
              Request a Free Case Review
            </Link>
          </div>

          <img
            src="/mobile-banner-tamar.jpg"
            alt="Mobile Hero"
            className="w-full rounded-3xl object-cover shadow-lg mb-6 border-7 border-[#c9a84c]"
          />


        </div>
      </section>

    </>
  );
};

const Intro = () => {
  return (
    <section
  id="about"
  className="relative py-[100px] bg-[#2B3A2C] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="overflow-hidden shadow-2xl">
        <img
          src="/fight-for-veterans.webp"
          alt="Veterans Advocacy"
          className="w-full h-[380px] md:h-[450px] object-cover"
        />
      </div>
    </motion.div>

    {/* RIGHT SIDE - CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Section Sub-label */}
      <div className="text-[#dbbc65] font-sans font-semibold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
        FIGHTING FOR VETERANS
      </div>

      {/* Main Title Section */}
      <div className="text-white font-serif font-bold text-3xl md:text-5xl leading-tight mb-8">
        Experienced Advocacy
        <br />
        for VA Appeals
      </div>

      {/* Content Paragraphs */}
      <div className="space-y-6 text-white/80 font-serif text-base md:text-lg leading-relaxed">
        <div>
          My practice is devoted exclusively to representing veterans in appeals of VA compensation and pension decisions.
        </div>

        <div>
          The VA system is complex. Deadlines matter. Evidence matters. The language in a decision matters.
        </div>

        <div>
          I bring more than 40 years of legal experience and a lifelong connection to military service to every case I accept.
        </div>
      </div>
    </motion.div>

  </div>
</section>
  );
};

const AboutSection = () => {
  const steps = [
    {
      icon: <FileSearch size={22} />,
      title: "Comprehensive Case Review",
      text: "Every appeal begins with a detailed analysis of your VA decision, service record, and supporting documentation."
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: "Evidence & Record Evaluation",
      text: "Medical records, service history, and prior rulings are carefully examined to identify procedural or legal error."
    },
    {
      icon: <Scale size={22} />,
      title: "Structured Legal Strategy",
      text: "Appeals are prepared with disciplined argument, legal clarity, and adherence to strict procedural rules."
    },
    {
      icon: <Shield size={22} />,
      title: "Direct Personal Representation",
      text: "You work directly with me throughout the appeal process — with consistent communication and steady guidance."
    }
  ];

  return (
    <section className="pt-4 pb-28 bg-[#f8f7f4]">
      <div className="w-full grid lg:grid-cols-2">



        {/* RIGHT DARK PANEL */}
        <div className="bg-[#2F3E2F] text-white px-12 py-16 flex flex-col justify-center">

          <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
            ABOUT TAMAR DYSON
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-12">
            I am a retired U.S. Army Officer &
            <span className="block text-[#C9A84C] mt-3">
              a VA-accredited attorney.
            </span>
          </h2>

          <div className="space-y-10">

            <p className="font-normal text-base mb-4 text-white/85">
              I enlisted in the Women’s Army Corps in 1974 and later earned my commission as an officer. Military service is part of my family’s history - my aunt served during World War II, and my sister and cousins also wore the uniform. Service is something I deeply respect.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              After leaving active duty, I pursued and obtained my own service-connected disability benefits. I understand firsthand how challenging the VA system can be.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              I have been an attorney for more than four decades. Over the course of my career, I practiced litigation with established law firms and served as an attorney for the State of California’s Environmental Protection Agency. My legal work has always required careful analysis, disciplined preparation, and clear written advocacy.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              Today, I focus exclusively on VA appeals.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              I am accredited by the Department of Veterans Affairs and admitted to practice before the U.S. Court of Appeals for Veterans Claims, the California Supreme Court, and the District of Columbia Court of Appeals. I am also a member of the National Association of Veterans Advocates (NOVA).
            </p>


          </div>

        </div>

        {/* LEFT IMAGE */}
        <div className="relative h-[600px] lg:h-auto overflow-hidden group">

          <img
            src="/approach-every.jpg"
            alt="Professional Legal Office"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[#C9A84C]/0 transition-all duration-500 group-hover:bg-[#C9A84C]/10"></div>

        </div>

      </div>
    </section>
  );
};


const WhyChoose = () => {
  const features = [
    {
      icon: <Scale size={28} />,
      title: "Focused Appellate Advocacy",
      text: "I concentrate exclusively on appeals of VA decisions. Appeals require careful legal analysis, attention to detail, and a clear understanding of procedural rules. My practice is built around that work."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Decades of Legal Experience",
      text: "I have more than 41 years of experience as an attorney. My background in litigation and government practice provides a strong foundation for analyzing complex decisions and identifying legal error."
    },
    {
      icon: <Medal size={28} />,
      title: "Appreciation of your sacrifices in serving our country",
      text: "As a retired Army officer from a family with a tradition of service, I understand the culture, the language, and the commitment that military service represents."
    },
    {
      icon: <Handshake size={28} />,
      title: "Personal Experience With the VA",
      text: "I have personally navigated the VA disability system. I know how confusing and discouraging it can feel. That perspective informs how I approach every client’s case - with patience, clarity, and respect."
    },
    {
      icon: <Handshake size={28} />,
      title: "A Direct and Personal Relationship",
      text: "When you contact my office, you work directly with me. Your case is not handed off to a large team. I review your file, evaluate your decision, and guide your appeal."
    }
  ];

  //   return (
  //     <section className="pb-20 bg-[#f8f7f4]">
  //       <div className="max-w-7xl mx-auto px-6">

  //         {/* TOP HEADING */}
  //         <div className="text-center max-w-3xl mx-auto mb-20">

  //           <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
  //             Why Choose Tamar Dyson
  //           </span>

  //           <h2 className="text-[#2F3E2F] font-serif font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
  //   Dedicated Legal Advocacy
  //   <span className="block text-[#C9A84C] mt-3">
  //     Built on Experience & Service.
  //   </span>
  // </h2>

  //           <p className="text-[#555555] text-lg leading-relaxed">
  //             Many veterans face denials not because their claims lack merit,
  //             but because the legal process is complex and procedural.
  //             Appeals require discipline, analysis, and careful preparation.
  //           </p>

  //         </div>

  //         {/* 5 CARDS GRID */}
  //         <div className="space-y-8">

  //   {/* First Row - 3 Cards */}
  //   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  //     {features.slice(0, 3).map((item, idx) => (
  //       <motion.div
  //         key={idx}
  //         initial={{ opacity: 0, y: 40 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ delay: idx * 0.12 }}
  //         className="group bg-white p-8 rounded-3xl border border-[#e8e6df]
  //                    shadow-sm hover:shadow-xl
  //                    transition-all duration-500 hover:-translate-y-2"
  //       >
  //         <div className="w-12 h-12 rounded-xl bg-[#1B2D4F]/5 
  //                         flex items-center justify-center mb-6 
  //                         text-[#C9A84C] 
  //                         group-hover:bg-[#C9A84C] 
  //                         group-hover:text-white 
  //                         transition-all duration-500">
  //           {item.icon}
  //         </div>

  //         <h3 className="text-[#2F3E2F] font-serif font-bold text-lg mb-4 leading-snug">
  //           {item.title}
  //         </h3>

  //         <p className="text-[#555555] text-sm leading-relaxed">
  //           {item.text}
  //         </p>
  //       </motion.div>
  //     ))}
  //   </div>

  //   {/* Second Row - Centered 2 Cards */}
  //   <div className="flex justify-center">
  //     <div className="grid sm:grid-cols-2 gap-8 max-w-3xl w-full">
  //       {features.slice(3).map((item, idx) => (
  //         <motion.div
  //           key={idx + 3}
  //           initial={{ opacity: 0, y: 40 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ delay: (idx + 3) * 0.12 }}
  //           className="group bg-white p-8 rounded-3xl border border-[#e8e6df]
  //                      shadow-sm hover:shadow-xl
  //                      transition-all duration-500 hover:-translate-y-2"
  //         >
  //           <div className="w-12 h-12 rounded-xl bg-[#1B2D4F]/5 
  //                           flex items-center justify-center mb-6 
  //                           text-[#C9A84C] 
  //                           group-hover:bg-[#C9A84C] 
  //                           group-hover:text-white 
  //                           transition-all duration-500">
  //             {item.icon}
  //           </div>

  //           <h3 className="text-[#2F3E2F] font-serif font-bold text-lg mb-4 leading-snug">
  //             {item.title}
  //           </h3>

  //           <p className="text-[#555555] text-sm leading-relaxed">
  //             {item.text}
  //           </p>
  //         </motion.div>
  //       ))}
  //     </div>
  //   </div>

  // </div>

  //       </div>
  //     </section>
  //   );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-off-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Quote className="text-luxury-gold/20" size={80} fill="currentColor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-deep-olive font-serif italic text-2xl md:text-3xl leading-relaxed mb-10"
        >
          "Tamar's expertise and dedication were evident from our first meeting. She understood the complexities of my service record and fought tirelessly to correct a decade-old injustice. I finally have the peace of mind I deserve."
        </motion.p>

        <div className="w-24 h-px bg-luxury-gold mx-auto mb-6"></div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-luxury-gold font-sans font-bold uppercase tracking-widest text-sm"
        >
          JAMES M., U.S. MARINE CORPS VETERAN
        </motion.span>
      </div>
    </section>
  );
};

const bodyParts = ["Left Arm", "Right Arm", "Left Leg", "Right Leg"];



const MissionBanner = () => {
  return (
    <section className="relative py-[90px] bg-[#FBF9F5] overflow-hidden border-y border-[#C9A84C]/20">
  <div className="relative max-w-4xl mx-auto px-6 text-center">

    {/* Section Label */}
    <div className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-6">
      MY MISSION
    </div>

    {/* Primary Statement */}
    <div className="text-[#2F3E2F] font-serif font-bold text-2xl md:text-4xl leading-[1.4] mb-6">
      My mission is to provide experienced, careful, and steady advocacy for veterans challenging VA
compensation decisions. I am committed to clarity, integrity, and respectful representation at
every stage of the appeals process.

    </div>

    

    {/* Divider Accent */}
    <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto"></div>

  </div>
</section>
  );
};

const Contact = () => {
  return (
    <section
  id="contact"
  className="relative py-[120px] bg-[#FBF9F5] overflow-hidden"
>
  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE */}
    <div className="text-[#2F3E2F]">

      <div className="flex items-center gap-3 text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-6">
        <span>GET STARTED</span>
        <span className="w-10 h-px bg-[#C9A84C]"></span>
      </div>

      <div className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-6">
        Start With a
        <span className="block text-[#2F3E2F] mt-1">
          Free Case Review
        </span>
      </div>

      <p className="text-[#2F3E2F]/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-serif">
        Complete the Pre-Consultation Questionnaire and I will review your VA decision to determine whether I can assist you. There are no upfront fees, and all information is confidential.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">

        {/* Call Directly */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Phone size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#2F3E2F]/60 font-semibold mb-1">
              CALL DIRECTLY
            </p>
            <p className="text-xl font-serif font-bold text-[#2F3E2F]">
              (415) 463-7414
            </p>
          </div>
        </div>

        {/* Vertical Separator for Desktop */}
        <div className="hidden sm:block w-px h-12 bg-[#C9A84C]/40"></div>

        {/* Email Me */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#2F3E2F]/60 font-semibold mb-1">
              EMAIL ME
            </p>
            <p className="text-sm md:text-base font-serif font-bold text-[#2F3E2F] break-all">
              <a
                href="mailto:assistant@tamardysonlegalservices.com"
                className="hover:underline"
              >
                assistant@tamardysonlegalservices.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE MULTI-STEP FORM */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#C9A84C]/20"
    >
      <ContactForm mode="multistep" />
    </motion.div>

  </div>
</section>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tamar Dyson Legal Services | VA Appeals Attorney</title>
        <meta name="description" content="Providing experienced, careful, and steady advocacy for veterans challenging VA compensation decisions nationwide." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <MissionBanner />
        <Intro />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
