import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Shield, 
  Scale, 
  Star, 
  CheckCircle2, 
  Quote,
  ArrowRight,
  Users // <-- Ye import missing tha!
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Using a placeholder URL since the local asset may not be available in the development environment
const tamarPhoto = "https://picsum.photos/seed/tamar-dyson-legal/800/1200";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  const timeline = [
    { year: "1974", event: "Enlisted in the Women's Army Corps" },
    { year: "Career", event: "Earned commission as a U.S. Army Officer" },
    { year: "Post-Service", event: "Pursued and obtained VA disability benefits" },
    { year: "40+ Years", event: "Practicing attorney in litigation and government law" },
    { year: "Today", event: "Exclusively representing veterans in VA appeals" }
  ];

  const credentials = [
    {
      icon: <Scale size={32} />,
      title: "U.S. Court of Appeals for Veterans Claims",
      desc: "Admitted to practice"
    },
    {
      icon: <Award size={32} />,
      title: "California Supreme Court",
      desc: "Admitted to practice"
    },
    {
      icon: <Shield size={32} />,
      title: "District of Columbia Court of Appeals",
      desc: "Admitted to practice"
    },
    {
      icon: <Star size={32} />,
      title: "National Association of Veterans Advocates (NOVA)",
      desc: "Member"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Tamar Dyson | VA Appeals Attorney | Tamar Dyson Legal Services</title>
        <meta name="description" content="Learn about Tamar Dyson — retired U.S. Army Captain, VA-accredited attorney with 40+ years of legal experience, exclusively representing veterans in VA appeals nationwide." />
      </Helmet>
      <Navbar />
      
      <main className="bg-white overflow-hidden">

        {/* Section 1 — Cinematic Hero Banner */}
        <section className="relative bg-[#2B3A2C] min-h-screen hidden lg:flex items-center overflow-hidden py-24">

  {/* Background Pattern / Texture from top */}
  <div className="absolute inset-0 bg-cover bg-top mt-20 pointer-events-none" style={{ backgroundImage: "url('/about-hero.webp')" }}></div>

  <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">

    {/* LEFT CONTENT */}
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        {/* Line 1 - Larger Text */}
        <motion.div
          variants={itemVariants}
          className="text-white font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-1"
        >
          A Veteran.
        </motion.div>

        {/* Line 2 - Larger Text */}
        <motion.div
          variants={itemVariants}
          className="text-white font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-2"
        >
          An Attorney.
        </motion.div>

        {/* Line 3 - Gold Accent Title - Larger Text */}
        <motion.div
          variants={itemVariants}
          className="text-[#dbbc65] font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
        >
          Your Advocate.
        </motion.div>

        {/* Horizontal Gold Line Accent */}
        <motion.div
          variants={itemVariants}
          className="w-28 h-[2px] bg-[#dbbc65] mt-6"
        ></motion.div>
      </motion.div>

      {/* Stats Grid Cards with Icons */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
        {[
          { icon: Scale, label: "40+ YEARS", sub: "LEGAL EXPERIENCE" },
          { icon: Star, label: "U.S. ARMY", sub: "RETIRED CAPTAIN" },
          { icon: Users, label: "NATIONWIDE", sub: "ALL 50 STATES" }
        ].map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.15), duration: 0.6 }}
              className="bg-[#1f2b20]/60 border border-[#dbbc65]/40 rounded-sm p-4 flex flex-col items-center text-center hover:border-[#dbbc65] transition-all"
            >
              {/* Gold Icon */}
              <div className="text-[#dbbc65] mb-2">
                <IconComponent size={24} strokeWidth={1.5} />
              </div>

              {/* Gold Main Label */}
              <div className="text-[#dbbc65] font-serif font-bold text-sm sm:text-base leading-tight mb-1">
                {stat.label}
              </div>

              {/* Subtext */}
              <div className="text-white/70 font-sans text-[9px] sm:text-[10px] uppercase tracking-widest leading-tight">
                {stat.sub}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

   
  </div>
</section>

<section className="block lg:hidden pt-28 px-4 bg-[#2B3A2C] mt-16 text-white">
  <div className="max-w-170 mx-auto text-center">

    {/* Main Headline */}
    <div className="mb-8">
      <div className="text-white font-serif font-bold text-4xl sm:text-5xl leading-tight mb-1">
        A Veteran.
      </div>
      <div className="text-white font-serif font-bold text-4xl sm:text-5xl leading-tight mb-2">
        An Attorney.
      </div>
      <div className="text-[#dbbc65] font-serif font-bold text-4xl sm:text-5xl leading-tight">
        Your Advocate.
      </div>
      
      {/* Accent Gold Divider */}
      <div className="w-20 h-[2px] bg-[#dbbc65] mx-auto mt-6"></div>
    </div>

    {/* Mobile Banner Image */}
    <div className="mb-8">
      <img
        src="/about-mobile.webp"
        alt="Mobile Hero"
        className="w-full rounded-2xl object-cover shadow-lg border-4 border-[#dbbc65]"
      />
    </div>

    {/* Stats List Section */}
    <div className="grid grid-cols-1 gap-3 mb-8">
      {[
        { label: "40+ YEARS", sub: "LEGAL EXPERIENCE" },
        { label: "U.S. ARMY", sub: "RETIRED CAPTAIN" },
        { label: "NATIONWIDE", sub: "ALL 50 STATES" }
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-[#1f2b20]/80 border border-[#dbbc65]/40 rounded-sm py-3 px-4 flex items-center justify-between"
        >
          <span className="text-[#dbbc65] font-serif font-bold text-base tracking-wide">
            {stat.label}
          </span>
          <span className="text-white/80 font-sans text-xs uppercase tracking-widest font-medium">
            {stat.sub}
          </span>
        </div>
      ))}
    </div>

    {/* Action Button */}
    <div className="mb-8">
      <Link
        to="/contact"
        className="w-full bg-[#dbbc65] text-[#1a1a2e] font-sans font-semibold px-6 py-4 rounded-none hover:brightness-110 transition-all shadow-md text-base flex items-center justify-center gap-2"
      >
        <span>Request a Free Case Review</span>
        <span className="text-xl">→</span>
      </Link>
    </div>

  </div>
</section>

        {/* Section 2 — Split Story Section */}
        <section className="py-[100px] px-6 bg-[#FBF9F5] text-center border-y border-[#C9A84C]/20">
  <div className="max-w-4xl mx-auto">
    
    {/* Section Top Label */}
    <div className="text-[#C9A84C] font-sans font-semibold text-xs uppercase tracking-[0.3em] mb-6">
      FROM THE UNIFORM TO THE COURTROOM
    </div>

    {/* Main Headline */}
    <div className="text-3xl md:text-5xl font-serif font-bold text-[#2F3E2F] mb-8 leading-tight">
      Built on Service. Guided by Experience.
    </div>

    {/* Content Paragraph */}
    <div className="text-[#2F3E2F]/80 text-lg md:text-xl leading-relaxed font-serif max-w-3xl mx-auto mb-10">
      I enlisted in the Women’s Army Corps in 1974, later commissioning as an officer and retiring as a captain. My military service and more than 40 years of legal experience have given me a unique perspective on the challenges veterans face. Today, I focus exclusively on representing veterans, bringing discipline, experience, and a deep commitment to those who have served.
    </div>

    {/* Accent Divider */}
    <div className="w-24 h-[2px] bg-[#C9A84C] mx-auto"></div>

  </div>
</section>

        {/* Section 5 — Military Service Timeline */}
        <section className="py-[90px] px-6 bg-[#FBF9F5]">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 text-[#C9A84C] font-sans font-semibold text-xs uppercase tracking-[0.3em] mb-4">
        <span className="w-8 h-px bg-[#C9A84C]"></span>
        <span>MY JOURNEY</span>
        <span className="w-8 h-px bg-[#C9A84C]"></span>
      </div>

      <div className="text-3xl md:text-5xl font-serif font-bold text-[#2F3E2F] mb-4">
        A Lifetime of Service
      </div>

      <div className="text-[#2F3E2F]/80 font-serif text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        My military service and legal career have given me a unique perspective and a deep commitment to advocating for veterans.
      </div>
    </div>

    {/* 4-Card Journey Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          img: "/journey-1.webp",
          badgeIcon: Award,
          tag: "1974",
          title: "Enlisted Service",
          desc: "Driven by a desire to serve my country, I enlisted in the Women's Army Corps in 1974."
        },
        {
          img: "/journey-2.webp",
          badgeIcon: Shield,
          tag: "U.S. ARMY OFFICER",
          title: "Commissioned Officer",
          desc: "I was later commissioned as an officer, ultimately retiring as a captain."
        },
        {
          img: "/journey-3.webp",
          badgeIcon: Scale,
          tag: "40+ YEARS OF EXPERIENCE",
          title: "A Career in Law",
          desc: "More than 40 years of legal experience, including civil litigation and administrative law."
        },
        {
          img: "/journey-4.webp",
          badgeIcon: Users,
          tag: "CONTINUING THE MISSION",
          title: "Advocating for Veterans Today",
          desc: "Today, I focus exclusively on representing veterans in appeals of VA compensation and pension decisions."
        }
      ].map((card, i) => {
        const IconComponent = card.badgeIcon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-[#C9A84C]/20"
          >
            {/* Image Container - Auto height based on image aspect ratio */}
            <div className="relative w-full bg-[#f4f2ec] overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-auto block object-cover"
              />
              {/* Circular Gold Icon Badge at bottom-left */}
              <div className="absolute left-4 bottom-3 w-11 h-11 rounded-full bg-[#C9A84C] border-2 border-white flex items-center justify-center text-white shadow-md z-10">
                <IconComponent size={20} strokeWidth={2} />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-5 flex-1 flex flex-col">
              {/* Tag / Category */}
              <div className="text-[#C9A84C] font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
                {card.tag}
              </div>

              {/* Title */}
              <div className="text-[#2F3E2F] font-serif font-bold text-xl mb-3 leading-snug">
                {card.title}
              </div>

              {/* Description */}
              <div className="text-[#2F3E2F]/75 font-serif text-sm leading-relaxed mt-auto">
                {card.desc}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

  </div>
</section>

        

        {/* Section 7 — CTA Banner */}
        <section className="relative py-32 px-6 bg-[#2B3A2C] text-center overflow-hidden">
  
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('/about-bottom.webp')" }}></div>
  <div className="absolute inset-0 bg-[#1a241b]/80 pointer-events-none"></div>

  <div className="relative z-10 max-w-5xl mx-auto">
    
    {/* Top Sublabel */}
    <div className="text-[#dbbc65] font-sans font-semibold text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
      READY TO MOVE FORWARD?
    </div>

    {/* Main Headline */}
    <div className="text-white font-serif font-bold text-4xl md:text-6xl mb-8 leading-tight">
      Request a Free Case Review
    </div>

    {/* Description Paragraph */}
    <div className="text-white/80 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-serif italic">
      No attorney’s fees upfront. Just an honest review of your VA decision.
    </div>

    {/* CTA Button */}
    <Link 
      to="/contact"
      className="inline-flex items-center group bg-[#dbbc65] text-[#1a1a2e] font-sans font-bold px-10 py-5 rounded-none hover:brightness-110 transition-all shadow-xl uppercase tracking-[0.2em] text-sm gap-2"
    >
      <span>Request a Free Case Review</span>
      <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
    </Link>

  </div>
</section>

      </main>
      
      <Footer />
    </>
  );
};

export default About;