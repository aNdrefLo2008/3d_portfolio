import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles';
import { Link } from 'react-router-dom';


const TECH_BADGES = [
  { label: "React",      x: "8%",   y: "18%", delay: 0.6 },
  { label: "Go",         x: "82%",  y: "22%", delay: 0.8 },
  { label: "Python",     x: "75%",  y: "68%", delay: 1.0 },
  { label: "Docker",     x: "6%",   y: "72%", delay: 1.2 },
  { label: "PostgreSQL", x: "88%",  y: "45%", delay: 0.7 },
  { label: "Three.js",   x: "3%",   y: "46%", delay: 0.9 },
  { label: "TensorFlow", x: "50%",  y: "78%", delay: 1.1 },
  { label: "Next.js",    x: "30%",  y: "14%", delay: 1.3 },
];

const FloatingBadge = ({ label, x, y, delay }) => (
  <motion.div
    className="absolute hidden xl:flex items-center px-3 py-1.5 rounded-full
               border border-white/10 bg-white/5 backdrop-blur-sm
               text-white/50 text-[12px] font-medium select-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
      opacity: [0, 0.7, 0.5, 0.7],
      scale:   [0.6, 1, 1, 1],
      y:       [0, -6, 0, -6, 0],
    }}
    transition={{
      opacity:  { delay, duration: 0.6 },
      scale:    { delay, duration: 0.4 },
      y:        { delay: delay + 0.6, duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    {label}
  </motion.div>
);

const Hero = () => {
  const { t } = useTranslation();

  const ROLES = t('hero.roles', { returnObjects: true });

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center">

      {/* ── Background orbs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: "10%", left: "60%",
            background: "radial-gradient(circle, rgba(128,77,238,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            bottom: "10%", left: "10%",
            background: "radial-gradient(circle, rgba(0,206,168,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ── Floating tech badges ─────────────────────────── */}
      {TECH_BADGES.map(b => <FloatingBadge key={b.label} {...b} />)}

      {/* ── Main content ─────────────────────────────────── */}
      <div className={`${styles.paddingX} relative z-10 sm:mt-0 max-w-5xl w-full mx-auto`}>

        {/* Eyebrow — statisch, kein opacity:0 */}
        <p className="text-indigo-200 text-[14px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase mb-4">
          {t('hero.greeting')}
        </p>

        {/* Name — LCP Element: kein motion, kein opacity:0, sofort sichtbar */}
        <h1 className="font-black text-[48px] sm:text-[72px] lg:text-[88px] leading-none mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2dfff] to-[#ffffff]">
            Andrei Florea
          </span>
        </h1>

        {/* Cycling role */}
        <div className="h-[44px] sm:h-[52px] flex items-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              className="text-[20px] sm:text-[28px] font-semibold text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          className="text-white/50 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10 hidden xs:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Primary CTA */}
          <Link to="https://calendly.com/afgmedia15/introductory-call">
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Glow layer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #ffffff) padding-box, linear-gradient(135deg, #ff6ec4, #7873f5) border-box",
                  filter: "blur(12px)",
                  transform: "scaleY(0.85) translateY(6px)",
                }}
              />
              <div
                className="bg-white-100 relative px-8 py-4 rounded-2xl font-semibold text-gray-800 text-[16px] sm:text-[18px] text-center"
              >
                {t('hero.startWorking')}
              </div>
            </motion.div>
          </Link>

          {/* Secondary CTA */}
          <a href="#contact">
            <motion.div
              className="px-8 py-4 rounded-2xl font-semibold text-white/80 text-[16px] sm:text-[18px] text-center
                         border border-white/20 hover:border-white/50 hover:text-white
                         transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {t('hero.getInTouch')}
            </motion.div>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: "1.0", label: t('hero.stats.gpa')            },
            { value: "5+",  label: t('hero.stats.projects')       },
            { value: "4",   label: t('hero.stats.languages')      },
            { value: "3",   label: t('hero.stats.certifications') },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-white font-black text-[20px] sm:text-[28px] leading-none">{value}</span>
              <span className="text-white/40 text-[12px] sm:text-[13px] mt-1 uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-white/30 text-[11px] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;