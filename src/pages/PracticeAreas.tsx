import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldX, 
  Gavel, 
  Star, 
  Search, 
  Calendar, 
  Briefcase, 
  Info,
  Scale,
  Award,
  Flag
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const appealTypes = [
    {
      id: "01",
      icon: <ShieldX size={48} />,
      title: "Denial of Service Connection",
      tagline: "Your service deserves recognition. A denial is not the end.",
      content: "If the VA denied service connection, you have the right to appeal via Supplemental Claim or Higher-Level Review at the VA Regional Office, or to the Board of Veterans' Appeals. A denial often means the VA concluded evidence does not establish a nexus between your condition and military service. Timely action is critical to preserve appeal rights."
    },
    {
      id: "02",
      icon: <Gavel size={48} />,
      title: "Appeals to the Board of Veterans' Appeals",
      tagline: "The Board provides an independent review of Regional Office decisions.",
      content: "If your claim was denied or you disagree with your VA Rating Decision, you may appeal to the BVA. Three options: Direct Review (no new evidence), Evidence Submission, or Hearing before a Veterans Law Judge. The Board reviews whether VA correctly applied federal law, regulations, and precedent. A successful BVA appeal may result in reversal, remand, or award of retroactive compensation. Strict filing deadlines apply."
    },
    {
      id: "03",
      icon: <Star size={48} />,
      title: "Special Monthly Compensation (SMC)",
      tagline: "Many veterans qualify — most are never told.",
      content: "SMC is an additional tax-free benefit for veterans whose service-connected disabilities result in severe impairment beyond the standard rating schedule. May be available for loss of use of a limb, loss of vision or hearing, need for Aid and Attendance, Housebound status, anatomical loss, or certain combinations of high disability ratings. Many veterans qualify but are never informed by the VA. SMC benefits can significantly increase monthly compensation. Careful legal review is essential."
    },
    {
      id: "04",
      icon: <Search size={48} />,
      title: "Clear and Unmistakable Error (CUE)",
      tagline: "Some errors go back decades. So can the correction.",
      content: "A CUE claim argues the VA made a legal or factual error in a prior final decision that was undebatable and outcome-determinative. Unlike typical appeals, CUE does not involve new evidence — it challenges the original decision based on law and evidence that existed at the time. Examples include failure to apply correct law, ignoring service treatment records, misapplication of rating criteria, or incorrect effective date determinations. If proven, the prior decision can be revised as if the error never occurred — potentially resulting in decades of retroactive back pay. Highly technical — precise legal drafting is critical."
    },
    {
      id: "05",
      icon: <Calendar size={48} />,
      title: "Requests for Earlier Effective Date",
      tagline: "The date matters. Back pay depends on it.",
      content: "The effective date determines how far back retroactive benefits are paid. If the VA assigned an incorrect effective date, you may be entitled to additional back pay. Earlier effective date issues often arise from errors in when a claim was received, continuous pursuit of a claim, or application of the correct law at the time of original filing. These issues require careful review of the claims file and legal analysis."
    },
    {
      id: "06",
      icon: <Briefcase size={48} />,
      title: "Appeals of Denials of TDIU",
      tagline: "Unable to work because of your service? You may be entitled to 100%.",
      content: "TDIU allows veterans to receive compensation at the 100% rate if service-connected conditions prevent substantially gainful employment. Many veterans are denied because the VA concludes they can perform sedentary work, vocational evidence was not fully considered, medical opinions were improperly weighed, or the VA failed to consider combined effects of multiple disabilities. A denial does not mean ineligibility. If granted, TDIU provides compensation at the 100% rate, potential eligibility for additional VA benefits, and retroactive back pay. Appealing requires detailed legal and vocational analysis."
    }
  ];

  return (
    <>
      <Helmet>
        <title>VA Appeals I Handle | Tamar Dyson Legal Services</title>
        <meta name="description" content="Tamar Dyson handles VA appeals including denial of service connection, Board of Veterans' Appeals, Special Monthly Compensation, CUE claims, Earlier Effective Date, and TDIU appeals nationwide." />
      </Helmet>
      <Navbar />
      
      <main className="bg-white min-h-screen">
       

        <section className="relative mt-16 overflow-hidden bg-deep-olive">

  <div className="grid lg:grid-cols-2 items-center">

    {/* LEFT SIDE CONTENT */}
    <div className="relative flex items-center">

      <div className="relative max-w-xl mx-auto px-4 py-24 text-center lg:text-left">

        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          <span className="text-white">VA Appeals</span><br />
          <span className="text-luxury-gold">I Handle</span>
        </h1>

        <p className="text-off-white/80 text-lg md:text-xl leading-relaxed mb-12">
          If a VA decision has been issued and you disagree with the outcome, I may be able to help.
          My practice is limited exclusively to appeals of previously decided VA compensation and pension claims.
        </p>

        {/* STATS */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <Scale className="text-luxury-gold" size={28} />
            <div>
              <p className="text-white font-semibold text-lg">3 Appeal Types</p>
              <p className="text-white/60 text-sm">Exclusively handled</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <Award className="text-luxury-gold" size={28} />
            <div>
              <p className="text-white font-semibold text-lg">40+ Years</p>
              <p className="text-white/60 text-sm">Legal experience</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <Flag className="text-luxury-gold" size={28} />
            <div>
              <p className="text-white font-semibold text-lg">Nationwide</p>
              <p className="text-white/60 text-sm">Veterans represented</p>
            </div>
          </div>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center py-20">

      <div className="relative rotate-[-2deg]">

        <img
          src="/VA-Appeals-handle.jpg"
          alt="VA Appeals"
          className="
          w-[420px]
          rounded-[25px]
          border-[8px]
          border-luxury-gold
          shadow-2xl
          object-cover
          "
        />

      </div>

    </div>

  </div>

</section>
        

       

        {/* Section 3 — 6 Appeal Type Sections */}
        <section className="bg-white">
          {appealTypes.map((type, index) => {
            const isEven = (index + 1) % 2 === 0;
            const bgColor = isEven ? 'bg-deep-olive' : 'bg-off-white';
            const textColor = isEven ? 'text-white' : 'text-deep-olive';
            const mutedTextColor = isEven ? 'text-off-white/70' : 'text-deep-olive/70';
            const numberColor = isEven ? 'text-white' : 'text-deep-olive';
            
            return (
              <div 
                key={type.id} 
                className={`${bgColor} relative overflow-hidden border-b border-luxury-gold group transition-all duration-500 hover:border-l-[4px] hover:border-l-luxury-gold`}
              >
                {/* Decorative Background Number */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-12' : 'left-12'} pointer-events-none select-none`}>
                  <span className={`text-[20rem] font-serif font-bold ${numberColor} opacity-[0.06] leading-none`}>
                    {type.id}
                  </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                    
                    {/* Left/Right side (40% width) — Header Info */}
                    <div className="w-full md:w-[40%]">
                      <div className="text-luxury-gold mb-6">
                        {type.icon}
                      </div>
                      <h3 className={`text-3xl md:text-4xl font-serif font-bold ${textColor} mb-4 leading-tight`}>
                        {type.title}
                      </h3>
                      <p className="text-luxury-gold font-serif italic text-lg">
                        {type.tagline}
                      </p>
                    </div>

                    {/* Right/Left side (60% width) — Content */}
                    <div className="w-full md:w-[60%]">
                      <p className={`${mutedTextColor} text-lg leading-relaxed mb-8`}>
                        {type.content}
                      </p>
                      
                      

                      {/* Pill CTA Badge */}
                      <Link 
                        to="/contact"
                        className="inline-flex items-center bg-luxury-gold text-deep-olive font-sans font-bold px-4 py-2 rounded-full hover:brightness-90 transition-all text-xs uppercase tracking-widest group/pill"
                      >
                        Free Case Review Available
                        <span className="ml-2 group-hover/pill:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </section>

      

        {/* Section 5 — CTA Section */}
        <section className="py-24 px-6 bg-off-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-deep-olive mb-6">
              Not Sure If Your Case Qualifies?
            </h2>
            
            <p className="text-deep-olive/70 text-xl mb-12 leading-relaxed">
              Start with a free case review. I will evaluate your VA decision and let you know whether I can help — no upfront fees, no obligation.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-luxury-gold text-deep-olive font-sans font-bold px-10 py-5 hover:bg-soft-gold transition-all shadow-lg shadow-luxury-gold/20 uppercase tracking-widest text-sm"
            >
              Request a Free Case Review
            </Link>
          </div>
        </section>


          {/* Section 4 — Important Notice Banner */}
        <section className="bg-deep-olive py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-8">
              <Info className="text-luxury-gold" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              I Don't Handle New Claims.
            </h2>
            
            <p className="text-off-white/80 text-lg mb-10 leading-relaxed">
              My practice is limited to appeals of previously decided VA claims. If you are seeking assistance with an initial claim or certain increase requests, the Department of Veterans Affairs maintains a list of recognized Veterans Service Organizations that may assist you.
            </p>
            
            <a 
              href="https://www.va.gov/ogc/apps/accreditation/accredvso.asp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-luxury-gold font-sans font-bold uppercase tracking-widest text-sm hover:text-soft-gold transition-colors inline-flex items-center"
            >
              Visit VA.gov VSO Directory <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PracticeAreas;
