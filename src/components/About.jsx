import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hco';

const ServiceCard = ({ index, id, Icon }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="relative group cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% -20%, rgba(128,77,238,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Card */}
      <div
        className="relative h-full rounded-2xl px-6 py-8 flex flex-col gap-4 transition-colors duration-300"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Top purple accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(128,77,238,0.65), transparent)',
          }}
        />

        {/* Card number */}
        <span
          className="absolute top-4 right-5 text-[11px] font-mono"
          style={{ color: 'rgba(255,255,255,0.12)' }}
        >
          0{index + 1}
        </span>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(128,77,238,0.09)',
            border: '1px solid rgba(128,77,238,0.22)',
          }}
        >
          <Icon size={22} style={{ color: 'rgba(255,255,255,0.75)' }} />
        </div>

        {/* Title */}
        <h3
          className="text-[16px] font-semibold leading-snug"
          style={{ color: 'rgba(255,255,255,0.88)' }}
        >
          {t(`about.cards.${id}.title`)}
        </h3>

        {/* Description — only on sm+ screens */}
        <p
          className="hidden sm:block text-[13px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          {t(`about.cards.${id}.desc`)}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-0 sm:mt-20">

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('about.overview')}</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        {t('about.description')}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="mt-12 h-px w-32"
        style={{
          background: 'linear-gradient(90deg, rgba(128,77,238,0.5), transparent)',
        }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Service cards */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            index={i}
            id={service.id}
            Icon={service.Icon}
          />
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(About, 'about');