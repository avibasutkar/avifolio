import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, Radio, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader, TacticalCornerBracket, TacticalBadge } from './TacticalUI';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>('');

  const WHATSAPP_NUMBER = '917259999521';
  const DISPLAY_PHONE = '+91 7259999521';

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setFormStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        setFormStatus('error');
        setErrorMessage('Please enter a valid email address.');
        return;
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setFormStatus('error');
      setErrorMessage('Message must be at least 5 characters long.');
      return;
    }

    setFormStatus('submitting');

    // Build structured WhatsApp message
    const formattedMessage = `👋 Hi Avinash,

*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim() || 'Not specified'}
*Subject:* ${formData.subject.trim() || 'Portfolio Inquiry'}

*Message:*
${formData.message.trim()}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    setLastWhatsAppUrl(waUrl);

    setTimeout(() => {
      setFormStatus('success');

      // Open WhatsApp chat in a new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#22c55e', '#06b6d4', '#f59e0b'],
        });
      } catch (err) {
        // Silently ignore if canvas not supported
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="COMMUNICATION_LINK // 05"
          title="Get In Touch"
          subtitle="Have an opportunity, internship, project idea, or simply want to connect? Transmission lines are open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md relative">
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="br" />

              <div className="flex items-center gap-2 mb-4">
                <TacticalBadge variant="amber">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>TRANSMISSION_STATION</span>
                </TacticalBadge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Let's Build Something Great Together
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am actively seeking Data Scientist, Data Analyst, and Python Developer roles. Feel free to reach out directly via WhatsApp, email, or LinkedIn.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 font-mono text-xs">
                {/* WhatsApp & Phone Item */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">WHATSAPP / PHONE</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-sans text-sm font-semibold flex items-center gap-1.5"
                      >
                        <span>{DISPLAY_PHONE}</span>
                        <ExternalLink className="w-3 h-3 text-emerald-500" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Open WhatsApp Chat directly"
                      aria-label="Open WhatsApp chat directly"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleCopy(DISPLAY_PHONE, 'phone')}
                      className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
                      title="Copy Phone Number"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block uppercase">PRIMARY_EMAIL</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-cyan-400 transition-colors truncate block font-sans text-sm font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">CURRENT_LOCATION</span>
                    <span className="text-slate-800 dark:text-slate-200 font-sans text-sm font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Links */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  SOCIAL_NETWORKS:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form with WhatsApp Redirect */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md relative">
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="tr" />
              <TacticalCornerBracket position="bl" />
              <TacticalCornerBracket position="br" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                    TRANSMISSION_INPUT // WHATSAPP DIRECT
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                </div>
                <TacticalBadge variant="green" glow>
                  <WhatsAppIcon className="w-3 h-3" />
                  <span>WHATSAPP // {DISPLAY_PHONE}</span>
                </TacticalBadge>
              </div>

              {/* Quick WhatsApp helper note */}
              <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-800 dark:text-emerald-300 flex flex-wrap items-center justify-between gap-2">
                <span>Direct dispatch routed to WhatsApp (+91 7259999521).</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-emerald-600 dark:hover:text-emerald-200 inline-flex items-center gap-1"
                >
                  <span>Quick Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Redirecting to WhatsApp...
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Your transmission has been formatted and redirected to WhatsApp for <strong>{DISPLAY_PHONE}</strong>. If WhatsApp did not open automatically, click below:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={lastWhatsAppUrl || `https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Open WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Job Opportunity / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Message Content *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-emerald-500/25 active:scale-[0.99]"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>PREPARING WHATSAPP DISPATCH...</span>
                        </>
                      ) : (
                        <>
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>SEND VIA WHATSAPP ({DISPLAY_PHONE})</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
