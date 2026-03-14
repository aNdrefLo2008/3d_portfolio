import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

const TECH_STACK = ["React", "Go", "Python", "PostgreSQL", "Docker", "Next.js", "TensorFlow", "D3.js"];
const DOT_COLORS = ["#22c55e", "#804dee", "#f59e0b", "#3b82f6"];

const ContactVisual = () => {
  const { t } = useTranslation();

  const STATUS_ITEMS = [
    { label: t('contactVisual.status.label'),    value: t('contactVisual.status.value'),    dot: DOT_COLORS[0] },
    { label: t('contactVisual.location.label'),  value: t('contactVisual.location.value'),  dot: DOT_COLORS[1] },
    { label: t('contactVisual.response.label'),  value: t('contactVisual.response.value'),  dot: DOT_COLORS[2] },
    { label: t('contactVisual.languages.label'), value: t('contactVisual.languages.value'), dot: DOT_COLORS[3] },
  ];

  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden">

      {/* ── Grid background ───────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* ── Floating particles ────────────────────────── */}
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Glow orb ──────────────────────────────────── */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #051333 0%, transparent 70%)",
          filter: "blur(30px)",
          top: "15%", left: "20%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Main card ─────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-sm mx-auto flex flex-col gap-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-2">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-[20px] flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #051333 0%, #091352 100%)" }}
          >
            AF
          </div>
          <div>
            <p className="text-white font-bold text-[17px] leading-tight">Andrei-Alexandru Florea</p>
            <p className="text-white/40 text-[13px]">{t('contactVisual.role')}</p>
          </div>
        </div>

        {/* Status items */}
        <div
          className="rounded-2xl flex flex-col"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {STATUS_ITEMS.map(({ label, value, dot }, i) => (
            <motion.div
              key={label}
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: i < STATUS_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="text-white/35 text-[12px] uppercase tracking-widest">{label}</span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: dot }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <span className="text-white text-[13px] font-medium">{value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-1">
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full text-[11px] font-medium text-white/50"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.06 }}
              whileHover={{ scale: 1.08, color: "rgba(255,255,255,0.9)" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Availability bar */}
        <motion.div
          className="rounded-xl px-5 py-3.5 flex items-center gap-3 mt-1"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-green-400 text-[13px] font-medium">
            {t('contactVisual.availability')}
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ContactVisual;