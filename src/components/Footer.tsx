import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2F3E2F] text-white/70 pt-[50px]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Divider */}
        <div className="w-full h-[1px] bg-[#C9A84C]/70 mb-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LEFT */}
          <div>

            <div className="mb-8">
  <a href="/">
    <img
      src="/mew-logo-footer.jpg"
      alt="Tamar Dyson Legal Services"
      className="h-32 w-auto object-contain"
    />
  </a>
</div>

            <p className="text-sm leading-relaxed max-w-sm text-white/60 mb-4">
              Providing experienced, careful, and steady advocacy for veterans who are challenging VA compensation decisions.
            </p>

            <p className="text-sm leading-relaxed max-w-sm text-white/60">
              Admitted to practice before: U.S. Court of Appeals for Veterans Claims, California Supreme Court, District of Columbia Court of Appeals. Member of the National Association of Veterans Advocates (NOVA).
            </p>

          </div>

          {/* CENTER */}
          <div>

            <h4 className="text-white font-serif font-semibold mb-8 tracking-wide">
              Quick Links
            </h4>

            <div className="flex flex-col space-y-4 text-base">
              <a href="/" className="hover:text-[#C9A84C] transition-colors">Home</a>
              <a href="/about" className="hover:text-[#C9A84C] transition-colors">About</a>
              {/* <a href="/blog" className="hover:text-[#C9A84C] transition-colors">Articles</a> */}
              <a href="/faq" className="hover:text-[#C9A84C] transition-colors">FAQ</a>
              <a href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
            </div>

          </div>

          {/* RIGHT */}
          <div>

            <h4 className="text-white font-serif font-semibold mb-8 tracking-wide">
              Contact Information
            </h4>

            <div className="space-y-6">

              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Phone
                </p>
                <p className="text-[#C9A84C] font-serif text-xl">
                  (415) 463-7414
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Email
                </p>
                
                <p className="text-[#C9A84C] font-serif break-all text-lg">
  <a
    href="mailto:assistant@tamardysonlegalservices.com"
    className="hover:underline"
  >
    assistant@tamardysonlegalservices.com
  </a>
</p>
              </div>

              <p className="text-base text-white/50">
                Representing veterans nationwide.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Tamar Dyson Legal Services. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end gap-4">

            {/* Legal Links */}

            

            <div className="flex items-center gap-6 text-sm text-white/50">

            <a
                href="/legal-disclaimer"
                className="hover:text-[#C9A84C] transition-colors"
              >
                Legal Disclaimer
              </a>

              <span className="w-[1px] h-3 bg-white/20"></span>

              <a
                href="/privacy-policy"
                className="hover:text-[#C9A84C] transition-colors"
              >
                Privacy Policy
              </a>

              <span className="w-[1px] h-3 bg-white/20"></span>

              <a
                href="/terms-and-conditions"
                className="hover:text-[#C9A84C] transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
