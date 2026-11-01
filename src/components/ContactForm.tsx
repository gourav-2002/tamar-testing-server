import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

const Recaptcha: React.FC<{
  onChange: (token: string | null) => void;
  resetSignal: number;
}> = ({ onChange, resetSignal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!RECAPTCHA_SITE_KEY) return;

    let cancelled = false;
    const tryRender = () => {
      if (cancelled || widgetIdRef.current !== null) return;
      if (!window.grecaptcha || !containerRef.current) {
        setTimeout(tryRender, 200);
        return;
      }
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token) => onChange(token),
        'expired-callback': () => onChange(null),
      });
    };
    tryRender();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
      onChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  return <div ref={containerRef} />;
};

type FormMode = 'single' | 'multistep';

interface ContactFormProps {
  mode?: FormMode;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  textOk: string;
  dd214: string;
  relationship: string;
  deniedBenefits: string;
  ratingDecision: string;
  claimTypes: string[];
  currentRep: string;
  pastRep: string;
  referral: string;
}

const CLAIM_OPTIONS = [
  'Denial of compensation or pension',
  "Appeal to Board of Veteran's Claims",
  'Special monthly compensation',
  'Clear and Unmistakable Error (CUE)',
  'Denial of Application for Increased Compensation due to Unemployability (TDIU)',
];

const RELATIONSHIP_OPTIONS = [
  'Veteran',
  "Veteran's Spouse",
  "Veteran's Dependent Child",
  "Veteran's Dependent Parent",
];

const REFERRAL_OPTIONS = [
  'Va.gov',
  'VA Office of General Counsel (OGC) website',
  "National Association of Veteran's Advocates",
  'Internet search',
  'Other',
];

const inputClass =
  'w-full border border-deep-olive/20 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors';
const labelClass =
  'block text-[10px] uppercase tracking-widest text-deep-olive/60 font-bold mb-2';
const radioGroupClass = 'flex flex-wrap gap-6 mt-2';
const radioLabelClass = 'flex items-center gap-2 cursor-pointer';

const emptyForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  textOk: '',
  dd214: '',
  relationship: 'Veteran',
  deniedBenefits: '',
  ratingDecision: '',
  claimTypes: [],
  currentRep: '',
  pastRep: '',
  referral: 'Va.gov',
};

const ContactForm: React.FC<ContactFormProps> = ({ mode = 'single' }) => {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0);

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleClaim = (claim: string) => {
    setForm((prev) => ({
      ...prev,
      claimTypes: prev.claimTypes.includes(claim)
        ? prev.claimTypes.filter((c) => c !== claim)
        : [...prev.claimTypes, claim],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      setStatus('error');
      setErrorMsg('Please complete the reCAPTCHA verification.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setCaptchaToken(null);
      setCaptchaResetSignal((n) => n + 1);
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <CheckCircle2 className="text-luxury-gold mb-6" size={56} />
        <h3 className="text-deep-olive font-serif font-bold text-2xl mb-4">
          Your Request Has Been Received
        </h3>
        <p className="text-deep-olive/70 max-w-md leading-relaxed">
          Thank you for reaching out. Tamar will personally review your information and respond
          within 1–2 business days. A confirmation has been sent to <strong>{form.email}</strong>.
        </p>
        <p className="text-deep-olive/40 text-sm mt-6 italic">
          Submitting this form does not create an attorney-client relationship.
        </p>
      </motion.div>
    );
  }

  // ─── Single-page layout (used on /contact page) ───────────────────────────
  if (mode === 'single') {
    return (
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Contact Information - Name */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              required
              className={inputClass}
              value={form.firstName}
              onChange={(e) => set('firstName', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              required
              className={inputClass}
              value={form.lastName}
              onChange={(e) => set('lastName', e.target.value)}
            />
          </div>
        </div>

        {/* Contact Information - Email */}
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            required
            className={inputClass}
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
          />
        </div>

        {/* Contact Information - Phone */}
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            required
            className={inputClass}
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
        </div>

        {/* Text OK */}
        <div>
          <p className="text-sm font-semibold mb-2">Is it okay to send text messages to this number?</p>
          <div className={radioGroupClass}>
            {['Yes', 'No'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_textOk"
                  value={v}
                  checked={form.textOk === v}
                  onChange={() => set('textOk', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Preliminary Screening Questions */}

        {/* Q1: Relationship */}
        <div>
          <p className="font-semibold mb-2">
            1. What is your relationship to the veteran?
          </p>
          <div className="space-y-2">
            {[
              'I am the veteran.',
              "I am the veteran's spouse or surviving spouse.",
              'I am a family member assisting the veteran.',
              'I am an authorized representative or fiduciary.',
              'Other (please specify).'
            ].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_relationship"
                  value={v}
                  checked={form.relationship === v}
                  onChange={() => set('relationship', v)}
                />
                {v}
              </label>
            ))}
          </div>
          {form.relationship === 'Other (please specify).' && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Please specify your relationship"
                className={inputClass}
                value={form.relationshipOther || ''}
                onChange={(e) => set('relationshipOther', e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Q2: Discharge Characterization */}
        <div>
          <p className="font-semibold mb-2">
            2. What is the characterization of discharge shown on the veteran's DD Form 214?
          </p>
          <div className="space-y-2">
            {[
              'Honorable',
              'General (Under Honorable Conditions)',
              'Other Than Honorable (OTH)',
              'Bad Conduct',
              'Dishonorable',
              'Not Sure / Not Applicable'
            ].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_dd214"
                  value={v}
                  checked={form.dd214 === v}
                  onChange={() => set('dd214', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q3: Claim / Assistance Type (Multiple Selections) */}
        <div>
          <p className="font-semibold mb-3">
            3. What type of assistance are you seeking?
          </p>
          <div className="space-y-3">
            {[
              'Appeal a VA decision denying disability compensation or pension benefits.',
              'Appeal a VA disability rating or effective date.',
              'Appeal a denial of Total Disability Based on Individual Unemployability (TDIU).',
              'Seek Special Monthly Compensation (SMC) based on an existing VA decision.',
              'Challenge a prior VA decision based on Clear and Unmistakable Error (CUE).',
              'File a new claim for VA benefits.',
              'Request an increased disability rating without appealing a VA decision.',
              'Other / Not Sure.'
            ].map((opt) => (
              <label key={opt} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.claimTypes ? form.claimTypes.includes(opt) : false}
                  onChange={() => toggleClaim(opt)}
                  className="mt-1"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q4: Recent VA Decision */}
        <div>
          <p className="font-semibold mb-2">
            4. When was the most recent VA decision issued concerning the benefits you want to appeal?
          </p>
          <div className="space-y-2">
            {[
              'Within the past 12 months.',
              'More than 12 months ago.',
              'I have not received a VA decision.',
              'Not Sure.'
            ].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_recentDecision"
                  value={v}
                  checked={form.recentDecision === v}
                  onChange={() => set('recentDecision', v)}
                />
                {v}
              </label>
            ))}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">
              If available, please provide the date of the decision:
            </label>
            <input
              type="date"
              className={inputClass}
              value={form.decisionDate || ''}
              onChange={(e) => set('decisionDate', e.target.value)}
            />
          </div>
        </div>

        {/* Q5: Rating Decision Copy */}
        <div>
          <p className="font-semibold mb-2">
            5. Do you have a copy of the VA decision or decisions you want reviewed?
          </p>
          <div className={radioGroupClass}>
            {['Yes', 'No'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_rating"
                  value={v}
                  checked={form.ratingDecision === v}
                  onChange={() => set('ratingDecision', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q6: Number of Issues */}
        <div>
          <p className="font-semibold mb-2">
            6. Approximately how many separate disability issues or benefit determinations are you seeking to appeal?
          </p>
          <div className="space-y-2">
            {['1–3', '4–10', '11–19', '20 or more', 'Not Sure'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_issueCount"
                  value={v}
                  checked={form.issueCount === v}
                  onChange={() => set('issueCount', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q7: Medical Diagnosis */}
        <div>
          <p className="font-semibold mb-2">
            7. Do you have a current medical diagnosis for the disability or disabilities you want to appeal?
          </p>
          <div className="space-y-2">
            {['Yes, for all.', 'Yes, for some.', 'No.', 'Not Sure.'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_medicalDiagnosis"
                  value={v}
                  checked={form.medicalDiagnosis === v}
                  onChange={() => set('medicalDiagnosis', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q8: Current Rep */}
        <div>
          <p className="font-semibold mb-2">
            8. Are you currently represented before VA by an attorney, Veterans Service Organization (VSO), or another accredited representative?
          </p>
          <div className={radioGroupClass}>
            {['Yes', 'No'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_currentRep"
                  value={v}
                  checked={form.currentRep === v}
                  onChange={() => set('currentRep', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q9: Past Rep */}
        <div>
          <p className="font-semibold mb-2">
            9. Have you previously been represented before VA by an attorney, Veterans Service Organization (VSO), or another accredited representative?
          </p>
          <div className={radioGroupClass}>
            {['Yes', 'No'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_pastRep"
                  value={v}
                  checked={form.pastRep === v}
                  onChange={() => set('pastRep', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q10: Digital Communication */}
        <div>
          <p className="font-semibold mb-2">
            10. Are you willing and able to communicate electronically, upload documents through a secure client portal, and sign documents electronically?
          </p>
          <div className="space-y-2">
            {['Yes', 'I may need assistance.', 'No'].map((v) => (
              <label key={v} className={radioLabelClass}>
                <input
                  type="radio"
                  name="single_digitalComm"
                  value={v}
                  checked={form.digitalComm === v}
                  onChange={() => set('digitalComm', v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Q11: Referral */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            11. How did you hear about Tamar Dyson Legal Services?
          </label>
          <select
            className={inputClass}
            value={form.referral}
            onChange={(e) => set('referral', e.target.value)}
          >
            {REFERRAL_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">
              If referred by someone, please provide their name (optional):
            </label>
            <input
              type="text"
              className={inputClass}
              value={form.referrerName || ''}
              onChange={(e) => set('referrerName', e.target.value)}
            />
          </div>
        </div>

        {/* Recaptcha */}
        <div>
          <Recaptcha onChange={setCaptchaToken} resetSignal={captchaResetSignal} />
        </div>

        {/* Error State */}
        {status === 'error' && (
          <p className="text-red-600 text-sm">{errorMsg}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading' || (!!RECAPTCHA_SITE_KEY && !captchaToken)}
          className="w-full bg-luxury-gold text-deep-olive font-bold py-4 uppercase tracking-widest shadow-lg hover:brightness-110 transition disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Request Free Case Review'}
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-deep-olive/40 italic text-center">
          Submitting this form does not create an attorney-client relationship. Representation begins
          only after a signed written agreement.
        </p>
      </form>
    );
  }

  // ─── Multi-step layout (used on Home page) ───────────────────────────────
  const stepCount = 3;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-deep-olive">

      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: stepCount }, (_, i) => (
          <React.Fragment key={i}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step > i + 1
                  ? 'bg-luxury-gold text-deep-olive'
                  : step === i + 1
                  ? 'bg-deep-olive text-white'
                  : 'bg-deep-olive/10 text-deep-olive/40'
              }`}
            >
              {step > i + 1 ? '✓' : i + 1}
            </div>
            {i < stepCount - 1 && (
              <div
                className={`flex-1 h-px transition-colors ${
                  step > i + 1 ? 'bg-luxury-gold' : 'bg-deep-olive/20'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1 — Personal Info */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl md:text-2xl">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border p-3 rounded-lg w-full focus:outline-none focus:border-luxury-gold"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={(e) => set('firstName', e.target.value)}
              />
              <input
                className="border p-3 rounded-lg w-full focus:outline-none focus:border-luxury-gold"
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={(e) => set('lastName', e.target.value)}
              />
            </div>

            <input
              type="email"
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:border-luxury-gold"
              placeholder="Email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
            />

            <input
              type="tel"
              className="w-full border p-3 rounded-lg focus:outline-none focus:border-luxury-gold"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
            />

            <div>
              <p className="font-semibold mb-2">Is it ok to send a text to this number?</p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_textOk"
                      value={v}
                      checked={form.textOk === v}
                      onChange={() => set('textOk', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">(Carrier rates may apply.)</p>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-deep-olive text-white px-6 py-3 rounded-full hover:bg-luxury-gold hover:text-deep-olive transition w-full sm:w-auto"
            >
              Next →
            </button>

            <p className="text-xs text-gray-500">
              Submitting this questionnaire does not create an attorney-client relationship.
              Representation begins only after a signed agreement.
            </p>
          </motion.div>
        )}

        {/* STEP 2 — Eligibility */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl md:text-2xl">Eligibility Details</h3>

            <div>
              <p className="font-semibold mb-2">
                Does your DD Form 214 state Honorable or General Under Honorable Conditions?
              </p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_dd214"
                      value={v}
                      checked={form.dd214 === v}
                      onChange={() => set('dd214', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">What is your relationship to the Veteran?</p>
              <select
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-luxury-gold"
                value={form.relationship}
                onChange={(e) => set('relationship', e.target.value)}
              >
                {RELATIONSHIP_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Have you been denied VA benefits within the last 12 months?
              </p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_denied"
                      value={v}
                      checked={form.deniedBenefits === v}
                      onChange={() => set('deniedBenefits', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Do you have a copy of your most recent rating decision?
              </p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_rating"
                      value={v}
                      checked={form.ratingDecision === v}
                      onChange={() => set('ratingDecision', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border px-6 py-3 rounded-full w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-deep-olive text-white px-6 py-3 rounded-full hover:bg-luxury-gold hover:text-deep-olive transition w-full sm:w-auto"
              >
                Next →
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Submitting this questionnaire does not create an attorney-client relationship.
              Representation begins only after a signed agreement.
            </p>
          </motion.div>
        )}

        {/* STEP 3 — Case Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl md:text-2xl">Case Details</h3>

            <div>
              <p className="font-semibold mb-3">What type of VA claim do you want to appeal?</p>
              <div className="space-y-3">
                {CLAIM_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.claimTypes.includes(opt)}
                      onChange={() => toggleClaim(opt)}
                      className="mt-1"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Are you currently represented by an attorney or accredited representative?
              </p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_currentRep"
                      value={v}
                      checked={form.currentRep === v}
                      onChange={() => set('currentRep', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Have you ever been represented by an attorney or accredited representative?
              </p>
              <div className={radioGroupClass}>
                {['Yes', 'No'].map((v) => (
                  <label key={v} className={radioLabelClass}>
                    <input
                      type="radio"
                      name="ms_pastRep"
                      value={v}
                      checked={form.pastRep === v}
                      onChange={() => set('pastRep', v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">How did you find Tamar Dyson Legal Services?</p>
              <select
                className="w-full border p-3 rounded-lg focus:outline-none focus:border-luxury-gold"
                value={form.referral}
                onChange={(e) => set('referral', e.target.value)}
              >
                {REFERRAL_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <Recaptcha onChange={setCaptchaToken} resetSignal={captchaResetSignal} />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">{errorMsg}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="border px-6 py-3 rounded-full w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={status === 'loading' || (!!RECAPTCHA_SITE_KEY && !captchaToken)}
                className="bg-deep-olive text-white px-6 py-3 rounded-full hover:shadow-xl transition w-full sm:w-auto disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Submit Pre-Consultation Questionnaire'}
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Submitting this questionnaire does not create an attorney-client relationship.
              Representation begins only after a signed agreement.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
