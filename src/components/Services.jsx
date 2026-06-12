import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '../hco';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const packages = [
  {
    key: 'neubau',
    price: '149',
    highlight: false,
    features: ['neubau.f1', 'neubau.f2', 'neubau.f3', 'neubau.f4'],
  },
  {
    key: 'neubauBuchung',
    price: '179',
    highlight: true,   // meistgewählt
    features: ['neubauBuchung.f1', 'neubauBuchung.f2', 'neubauBuchung.f3', 'neubauBuchung.f4'],
  },
  {
    key: 'redesign',
    price: '119',
    highlight: false,
    features: ['redesign.f1', 'redesign.f2', 'redesign.f3'],
  },
];

const PackageCard = ({ pkg }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`relative rounded-2xl p-6 flex flex-col gap-4 border
        ${pkg.highlight
          ? 'border-white/30 bg-white/10'
          : 'border-white/10 bg-white/5'
        }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-900
                         text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          {t('services.mostPopular')}
        </span>
      )}
      <h3 className="text-white text-[20px] font-bold">{t(`services.${pkg.key}.title`)}</h3>
      <p className="text-white/50 text-[13px]">{t(`services.${pkg.key}.description`)}</p>
      <p className="text-white text-[36px] font-black">
        {pkg.price} €
        <span className="text-white/40 text-[14px] font-normal ml-1">{t('services.oneTime')} + 20 € monatlich</span>
      </p>
      
      <ul className="flex flex-col gap-2 mt-2">
        {pkg.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-white/70 text-[14px]">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {t(`services.${pkg.key}.${f}`)}
          </li>
        ))}
      </ul>
      <a href="#contact" className="mt-auto">
        <motion.div
          className={`w-full text-center py-3 rounded-xl font-semibold text-[15px] transition-all duration-200 cursor-pointer
            ${pkg.highlight
              ? 'bg-white text-gray-900 hover:bg-white/90'
              : 'border border-white/20 text-white hover:border-white/50'
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          {t('services.cta')}
        </motion.div>
      </a>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('services.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('services.title')}</h2>
      </motion.div>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {t('services.description')}
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map(pkg => <PackageCard key={pkg.key} pkg={pkg} />)}
      </div>
      <div className="mt-8 text-center text-white/30 text-[13px]">
        {t('services.payment')}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');