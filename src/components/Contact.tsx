import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { 
  FiMail, FiPhone, FiLinkedin, FiGithub, FiCopy, FiCheck, FiSend 
} from 'react-icons/fi';
import toast from 'react-hot-toast';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!form.subject.trim()) tempErrors.subject = 'Subject is required.';

    if (!form.message.trim()) {
      tempErrors.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message prepared successfully. Please contact via email or LinkedIn.');
      // Reset form
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        toast.success('Phone number copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }).catch(() => {
      toast.error('Failed to copy to clipboard.');
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950 border-t border-zinc-900/50">
      
      {/* Background visual glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            07. Contact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto"
          >
            Whether you want to hire me, collaborate on AI projects, or discuss open-source tools, drop me a message.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-zinc-100">
                Let's build something epic.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If you prefer direct emails, phone consultations, or networking via social platforms, feel free to copy my credentials or click the portals below.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/10 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-850 text-primary">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block">Email Me</span>
                    <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-zinc-300 hover:text-zinc-100 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="p-2 border border-zinc-850 bg-zinc-900/60 hover:bg-zinc-850 hover:text-white rounded-lg text-zinc-400 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/10 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-850 text-cyan-400">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block">Call / WhatsApp</span>
                    <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-zinc-300 hover:text-zinc-100 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="p-2 border border-zinc-850 bg-zinc-900/60 hover:bg-zinc-850 hover:text-white rounded-lg text-zinc-400 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Social handles list */}
            <div className="flex items-center space-x-4 pt-6 border-t border-zinc-900/80">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold flex items-center space-x-2 transition-all"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold flex items-center space-x-2 transition-all"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold flex items-center space-x-2 transition-all"
              >
                <FiGithub className="w-4 h-4" />
                <span>Ryfio Org</span>
              </a>
            </div>

          </div>

          {/* Form UI (Right Column) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 dark:bg-zinc-900/5 backdrop-blur-md space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.name ? 'border-rose-500/60 focus:ring-rose-500/50' : 'border-zinc-800 focus:border-primary/50 focus:ring-primary/50'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-[11px] text-rose-400 font-medium">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-rose-500/60 focus:ring-rose-500/50' : 'border-zinc-800 focus:border-primary/50 focus:ring-primary/50'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <span className="text-[11px] text-rose-400 font-medium">{errors.email}</span>}
                </div>

              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all ${
                    errors.subject ? 'border-rose-500/60 focus:ring-rose-500/50' : 'border-zinc-800 focus:border-primary/50 focus:ring-primary/50'
                  }`}
                  placeholder="e.g., Project Proposal, Internship Request"
                />
                {errors.subject && <span className="text-[11px] text-rose-400 font-medium">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Your Message
                  <span className="text-[10px] text-zinc-600 lowercase font-medium ml-1.5">(min. 10 chars)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message ? 'border-rose-500/60 focus:ring-rose-500/50' : 'border-zinc-800 focus:border-primary/50 focus:ring-primary/50'
                  }`}
                  placeholder="Tell me about your product needs, team timelines, or agentic goals..."
                />
                {errors.message && <span className="text-[11px] text-rose-400 font-medium">{errors.message}</span>}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-primary hover:bg-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 text-sm transition-all shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] disabled:opacity-50"
              >
                <FiSend className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
