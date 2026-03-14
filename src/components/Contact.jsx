import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { SectionWrapper } from "../hco";
import { slideIn } from "../utils/motion";
import ContactVisual  from "./ContactVisuals";


const InputField = ({ label, error, children }) => (
  <div className="flex flex-col gap-2">
    <span className="text-white/70 text-[13px] font-medium uppercase tracking-widest">
      {label}
    </span>
    {children}
    <AnimatePresence>
      {error && (
        <motion.span
          className="text-red-400 text-[12px]"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

const inputClass = `
  w-full bg-white/5 border border-white/10 rounded-xl
  px-5 py-3.5 text-white text-[15px] placeholder:text-white/25
  focus:outline-none focus:border-white/60 focus:bg-white/8
  transition-all duration-200
`;

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    emailjs.send(
      'service_8ips6gu',
      'template_vxx33fp',
      {
        from_name:  form.name,
        to_name:    'Andrei',
        from_email: form.email,
        to_email:   'floreaalexandru146@gmail.com',
        message:    form.message,
      },
      'LRXh8xxa1zPZthHMd'
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      setErrors({ submit: t('contact.errorMessage') });
    });
  };

  return (
    <div className="flex xl:flex-row items-center flex-col-reverse gap-24 sm:gap-10 w-full">

      {/* ── Form panel ───────────────────────────────────── */}
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75]"
      >
        <p className={styles.sectionSubText}>{t('contact.getInTouch')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.contact')}</h3>

        {/* Divider */}
        <div className="mt-2 mb-8 h-[2px] w-16 rounded-full bg-white" />

        <AnimatePresence mode="wait">

          {/* ── Success state ── */}
          {sent ? (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center gap-5 py-16 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Check circle */}
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(128,77,238,0.15)", border: "1.5px solid rgba(128,77,238,0.4)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div>
                <p className="text-white text-[20px] font-bold mb-2">{t('contact.successMessage')}</p>
                <p className="text-white/40 text-[14px]">I'll reply within 24 hours.</p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-white text-[13px] underline underline-offset-4 hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>

          ) : (

            /* ── Form ── */
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Name + Email side by side on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-2">
                <InputField label={t('contact.yourName')} error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className={inputClass}
                  />
                </InputField>

                <InputField label={t('contact.yourEmail')} error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className={inputClass}
                  />
                </InputField>
              </div>

              <InputField label={t('contact.yourMessage')} error={errors.message}>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  className={`${inputClass} resize-none`}
                />
              </InputField>

              {/* Submit error */}
              <AnimatePresence>
                {errors.submit && (
                  <motion.p
                    className="text-red-400 text-[13px]"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  >
                    {errors.submit}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="relative group w-fit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Glow */}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "#ffffff border-box",
                    filter: "blur(10px)",
                    transform: "scaleY(0.8) translateY(6px)",
                  }}
                />
                <span
                  className="relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-gray-800 text-[15px]"
                  style={{ background: "#ffffff" }}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.send')}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>

            </motion.form>
          )}
        </AnimatePresence>

        {/* ── Direct contact links ─────────────────────── */}
        <div className="mt-10 sm:pb-0 pb-52 pt-8 border-t border-white/8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:floreaalexandru146@gmail.com"
            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5L2.25 6.75" />
            </svg>
            floreaalexandru146@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/andrei-alexandru-florea-6b50b1336/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

      </motion.div>

      {/* ── Earth Canvas ─────────────────────────────────── */}
      <ContactVisual />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");