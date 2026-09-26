import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Experience = () => (
  <div>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>Pendekatan</p>
      <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>Workflow.</h2>
    </motion.div>
    <div className="mt-10 mx-auto max-w-4xl grid md:grid-cols-4 gap-4 px-8 pb-12">
      {['Inspect source data', 'Process Data', 'Check Formulas & Validation', 'Document the result'].map((step, index) => (
        <div key={step} className="bg-flashWhite/90 rounded-xl p-5 text-center shadow-card">
          <div className="text-jetLight text-3xl font-bold">0{index + 1}</div>
          <p className="mt-3 text-jetLight font-bold">{step}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Experience, 'work');