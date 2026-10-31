import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    textOk,
    dd214,
    relationship,
    deniedBenefits,
    ratingDecision,
    claimTypes,
    currentRep,
    pastRep,
    referral,
    captchaToken,
  } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ error: 'reCAPTCHA verification is required.' });
  }

  try {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || '',
        response: captchaToken,
      }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return res.status(500).json({ error: 'Failed to verify reCAPTCHA. Please try again.' });
  }

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const claimList = Array.isArray(claimTypes) ? claimTypes.join(', ') : claimTypes || 'None selected';

  // Email to client (Tamar Dyson)
  const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f8f7f4; margin: 0; padding: 0; }
    .wrapper { max-width: 640px; margin: 40px auto; background: #ffffff; border: 1px solid #e0dcd5; }
    .header { background: #2F3E2F; padding: 36px 40px; }
    .header h1 { color: #C9A84C; font-size: 22px; margin: 0 0 4px; }
    .header p { color: rgba(255,255,255,0.7); font-size: 13px; margin: 0; }
    .body { padding: 36px 40px; }
    .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #999; font-family: sans-serif; margin-bottom: 4px; }
    .value { font-size: 16px; color: #2F3E2F; margin-bottom: 20px; }
    .divider { border: none; border-top: 1px solid #e0dcd5; margin: 28px 0; }
    .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #C9A84C; font-family: sans-serif; font-weight: bold; margin-bottom: 16px; }
    .footer { background: #f8f7f4; padding: 20px 40px; border-top: 1px solid #e0dcd5; font-size: 12px; color: #999; font-family: sans-serif; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Case Review Request</h1>
      <p>Submitted via tamardysonlegalservices.com</p>
    </div>
    <div class="body">

      <div class="section-title">Contact Information</div>

      <div class="label">Full Name</div>
      <div class="value">${firstName} ${lastName}</div>

      <div class="label">Email</div>
      <div class="value">${email}</div>

      <div class="label">Phone</div>
      <div class="value">${phone || '—'}</div>

      <div class="label">OK to Text?</div>
      <div class="value">${textOk || '—'}</div>

      <hr class="divider" />
      <div class="section-title">Eligibility Details</div>

      <div class="label">DD Form 214 — Honorable / General Under Honorable?</div>
      <div class="value">${dd214 || '—'}</div>

      <div class="label">Relationship to Veteran</div>
      <div class="value">${relationship || '—'}</div>

      <div class="label">Denied VA Benefits in Last 12 Months?</div>
      <div class="value">${deniedBenefits || '—'}</div>

      <div class="label">Has Copy of Most Recent Rating Decision?</div>
      <div class="value">${ratingDecision || '—'}</div>

      <hr class="divider" />
      <div class="section-title">Case Details</div>

      <div class="label">Type of VA Claim to Appeal</div>
      <div class="value">${claimList}</div>

      <div class="label">Currently Represented?</div>
      <div class="value">${currentRep || '—'}</div>

      <div class="label">Previously Represented?</div>
      <div class="value">${pastRep || '—'}</div>

      <div class="label">How Did They Find You?</div>
      <div class="value">${referral || '—'}</div>

    </div>
    <div class="footer">
      This inquiry was submitted through the contact form on tamardysonlegalservices.com. No attorney-client relationship has been created.
    </div>
  </div>
</body>
</html>
`;

  // Confirmation email to the user
  const userHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f8f7f4; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border: 1px solid #e0dcd5; }
    .header { background: #2F3E2F; padding: 36px 40px; }
    .header h1 { color: #C9A84C; font-size: 24px; margin: 0 0 6px; }
    .header p { color: rgba(255,255,255,0.7); font-size: 14px; margin: 0; }
    .body { padding: 36px 40px; color: #444; line-height: 1.8; font-size: 16px; }
    .highlight { color: #2F3E2F; font-weight: bold; }
    .divider { border: none; border-top: 1px solid #e0dcd5; margin: 28px 0; }
    .contact-block { background: #f8f7f4; padding: 20px 24px; border-left: 3px solid #C9A84C; margin-top: 24px; }
    .contact-block p { margin: 6px 0; font-size: 14px; color: #2F3E2F; }
    .footer { background: #f8f7f4; padding: 20px 40px; border-top: 1px solid #e0dcd5; font-size: 12px; color: #999; font-family: sans-serif; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Your Inquiry Has Been Received</h1>
      <p>Tamar Dyson Legal Services</p>
    </div>
    <div class="body">
      <p>Dear <span class="highlight">${firstName}</span>,</p>

      <p>Thank you for reaching out to <span class="highlight">Tamar Dyson Legal Services</span>. Your request for a free case review has been received and is under review.</p>

      <p>Tamar will personally review your information to determine whether she can assist with your VA appeal. You can expect a response within <span class="highlight">1–2 business days</span>.</p>

      <p>Please note that submitting this form does not create an attorney-client relationship. Representation begins only after a signed written agreement.</p>

      <div class="contact-block">
        <p><strong>Phone:</strong> (415) 463-7414</p>
        <p><strong>Email:</strong> assistant@tamardysonlegalservices.com</p>
        <p><strong>Office Hours:</strong> Monday – Thursday, 11:00 AM – 6:00 PM (PST)</p>
        <p><strong>Friday:</strong> By appointment only</p>
      </div>
    </div>
    <div class="footer">
      Tamar Dyson Legal Services &bull; Representing Veterans Nationwide &bull; No Attorney-Client Relationship Created
    </div>
  </div>
</body>
</html>
`;

  try {
    const fromAddress = `"Tamar Dyson Legal Services" <${process.env.SMTP_USER}>`;

    // Send notification to client
    await transporter.sendMail({
      from: fromAddress,
      to: process.env.SMTP_USER,
      subject: `New Case Review Request — ${firstName} ${lastName}`,
      html: clientHtml,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'Your Inquiry Has Been Received — Tamar Dyson Legal Services',
      html: userHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again or call us directly.' });
  }
}
