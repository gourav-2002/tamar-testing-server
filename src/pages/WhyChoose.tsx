import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  User, 
  Scale, 
  Quote,
  CalendarCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const valueProps = [
    {
      icon: <Search size={48} className="text-luxury-gold" />,
      title: "Experienced Analysis",
      desc: "I look beyond the outcome of a VA decision to understand how VA got there, what may have been missed, and what options remain."
    },
    {
      icon: <User size={48} className="text-luxury-gold" />,
      title: "Direct Attorney Access",
      desc: "When you work with my firm, you work directly with me."
    },
    {
      icon: <Scale size={48} className="text-luxury-gold" />,
      title: "Candid, Honest Guidance",
      desc: "I will tell you honestly what I see in your case and whether I believe I can help."
    }
  ];

  const testimonials = [
    {
      quote: "After a challenging experience of navigating VA disability claims both with and without representation, for years with little success, I was referred to Tamar Dyson Legal Services. Tamar and her team provided a thorough, knowledgeable education, along with a professional approach that was comforting and considerate of my service-connected symptoms. The communications were consistent and well-informed. It was reassuring to know I had representation from a veteran who is passionate about justice for disabled veterans. I would absolutely recommend her services.",
      author: "Ralph Bowie, Veteran, US Navy"
    },
    {
      quote: "Tamar Dyson was relentless in advocating for me. My case required patience, persistence, and someone who was willing to keep fighting when the process became difficult—and Tamar never backed down. She kept me informed, treated me with genuine respect, and approached my case as though the outcome mattered personally to her. Her knowledge and professionalism were exceptional, but what impressed me most was her determination. I am incredibly grateful for her representation and would recommend Tamar Dyson without hesitation to any veteran who needs a knowledgeable, committed, and tenacious advocate in their corner.",
      author: "Terrence Higgs, U.S. Air Force Veteran"
    },
    {
      quote: "I have been represented over the past couple of years by Tamar. The decision to utilize her services was the best decision I have made in working with the VA and the claim process. I have found her to be professional and very responsive. She clearly understands the complicated process of dealing with the VA. I would highly recommend her and her office and would not hesitate in using her again to deal with the VA. She has my highest admiration and respect.",
      author: "Craig S. Bewsey, US Army"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose TDLS | Tamar Dyson Legal Services</title>
        <meta name="description" content="Why veterans choose Tamar Dyson Legal Services for complicated VA appeals requiring thoughtful legal analysis and seasoned judgment." />
      </Helmet>
      <Navbar />
      
      <main className="bg-off-white overflow-hidden pt-24">
        
        {/* Top Hero Section */}
        <section
  className="relative min-h-[550px] lg:min-h-[600px] hidden lg:flex items-center overflow-hidden py-16 lg:py-20 bg-cover bg-right bg-no-repeat"
  style={{
    backgroundImage: "url('/why-choose-us-banner.webp')",
  }}
>
  {/* Soft Light Overlay for Text Readability on Left Side */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/90 to-transparent lg:w-3/5 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
    <div className="max-w-xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sublabel */}
        <motion.div
          variants={itemVariants}
          className="text-[#C9A84C] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-3 block"
        >
          WHY VETERANS CHOOSE
        </motion.div>

        {/* Title without H tags */}
        <motion.div
          variants={itemVariants}
          className="text-[#2F3E2F] font-serif font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-5"
        >
          Tamar Dyson
          <br />
          Legal Services
        </motion.div>

        {/* Small Horizontal Gold Accent Line */}
        <motion.div
          variants={itemVariants}
          className="w-12 h-[2px] bg-[#C9A84C] mb-6"
        ></motion.div>

        {/* Paragraph Text */}
        <motion.div
          variants={itemVariants}
          className="text-[#2F3E2F]/85 font-serif text-base sm:text-lg leading-relaxed font-normal"
        >
          As a veteran, I understand what it means to serve our country. As an attorney, I maintain a boutique practice by choice. I am selective about the cases I take; I focus on veterans with complicated appeals requiring thoughtful legal analysis and seasoned judgment.
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

        <section className="relative px-6 pt-16 pb-20 block lg:hidden">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.span variants={itemVariants} className="text-luxury-gold font-sans font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                WHY VETERANS CHOOSE
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-deep-olive font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
                TAMAR DYSON LEGAL SERVICES
              </motion.h1>
              
              <motion.div variants={itemVariants} className="w-24 h-1 bg-luxury-gold/50 mb-8"></motion.div>
              
              <motion.p variants={itemVariants} className="text-deep-olive/80 font-serif text-2xl leading-relaxed">
                As a veteran, I understand what it means to serve our country. As an attorney, I maintain a boutique practice by choice. I am selective about the cases I take; I focus on veterans with complicated appeals requiring thoughtful legal analysis and seasoned judgment.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <img
                src="/about-hero.jpg"
                alt="Tamar Dyson"
                className="w-full max-w-md object-cover rounded-md shadow-2xl"
              />
            </motion.div>
            
         </div>
        </section>

       
        {/* Testimonials */}
        <section className="py-24 px-6 bg-[#FBF9F5]">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-center mb-16">
      <div className="h-px bg-[#C9A84C]/50 w-full max-w-[100px] md:max-w-[300px]"></div>
      <h2 className="text-3xl font-serif font-bold text-[#2F3E2F] mx-8 text-center uppercase tracking-widest whitespace-nowrap">
        WHAT VETERANS SAY
      </h2>
      <div className="h-px bg-[#C9A84C]/50 w-full max-w-[100px] md:max-w-[300px]"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "After a challenging experience of navigating VA disability claims both with and without representation, for years with little success, I was referred to Tamar Dyson Legal Services. Tamar and her team provided a thorough, knowledgeable education, along with a professional approach that was comforting and considerate of my service-connected symptoms. The communications were consistent and well-informed. It was reassuring to know I had representation from a veteran who is passionate about justice for disabled veterans. I would absolutely recommend her services.",
          author: "Ralph Bowie, Veteran, US Navy"
        },
        {
          quote: "Tamar Dyson was relentless in advocating for me. My case required patience, persistence, and someone who was willing to keep fighting when the process became difficult—and Tamar never backed down. She kept me informed, treated me with genuine respect, and approached my case as though the outcome mattered personally to her. Her knowledge and professionalism were exceptional, but what impressed me most was her determination. I am incredibly grateful for her representation and would recommend Tamar Dyson without hesitation to any veteran who needs a knowledgeable, committed, and tenacious advocate in their corner.",
          author: "Terrence Higgs, U.S. Air Force Veteran"
        },
        {
          quote: "I have been represented over the past couple of years by Tamar. The decision to utilize her services was the best decision I have made in working with the VA and the claim process. I have found her to be professional and very responsive. She clearly understands the complicated process of dealing with the VA. I would highly recommend her and her office and would not hesitate in using her again to deal with the VA. She has my highest admiration and respect.",
          author: "Craig S. Bewsey, US Army"
        }
      ].map((test, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm border border-[#C9A84C]/20 flex flex-col justify-between"
        >
          <div>
            <div className="flex mb-4 text-[#C9A84C]">
              <Quote size={40} className="fill-[#C9A84C]/20 text-[#C9A84C]" />
            </div>
            <p className="text-[#2F3E2F]/80 font-serif text-sm md:text-base leading-relaxed mb-8">
              "{test.quote}"
            </p>
          </div>
          <div>
            <div className="w-12 h-px bg-[#C9A84C] mb-4"></div>
            <p className="text-[#2F3E2F] font-serif font-bold text-base">
              — {test.author}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Bottom CTA */}
        <section className="bg-[#2B3A2C] py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    
    <div className="flex items-center gap-8">
      <div className="hidden md:flex w-24 h-24 rounded-full border border-[#C9A84C] items-center justify-center text-[#C9A84C] shrink-0">
        <CalendarCheck size={40} />
      </div>
      <div>
        <div className="text-white font-serif font-bold text-3xl md:text-4xl mb-3">
          Ready for a Fresh Look at Your Case?
        </div>
        <div className="text-white/80 font-sans text-lg max-w-xl leading-relaxed">
          No attorney’s fees upfront. No obligation. Just an honest review of your VA decision.
        </div>
      </div>
    </div>

    <Link 
      to="/contact"
      className="bg-[#C9A84C] text-[#2F3E2F] font-sans font-bold px-10 py-5 hover:brightness-110 transition-all uppercase tracking-[0.1em] shrink-0 text-center w-full lg:w-auto"
    >
      Request a Free Case Review
    </Link>

  </div>
</section>

      </main>
      
      <Footer />
    </>
  );
};

export default WhyChoose;
