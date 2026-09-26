import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => (
  <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
      <p className="mt-6 text-taupe text-[18px] max-w-2xl leading-[30px]">
        Available for data entry, Excel processing, data cleaning, document entry, CRM consolidation, and spreadsheet QA projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="mailto:myusuf130901@gmail.com" className="live-demo inline-flex items-center justify-center px-6 py-4 rounded-lg bg-night text-timberWolf font-bold hover:bg-battleGray hover:text-eerieBlack transition">
          myusuf130901@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/muhammad-aldi-yusuf-584739161" target="_blank" rel="noreferrer" className="live-demo inline-flex items-center justify-center px-6 py-4 rounded-lg bg-night text-timberWolf font-bold hover:bg-battleGray hover:text-eerieBlack transition">
          LinkedIn Profile
        </a>
        <a href="https://drive.google.com/file/d/1TIW9OB8uYmWlSroS_kWKBgcRe_L9WYDx/view?usp=drive_link" target="_blank" rel="noreferrer" className="live-demo inline-flex items-center justify-center px-6 py-4 rounded-lg bg-night text-timberWolf font-bold hover:bg-battleGray hover:text-eerieBlack transition">
          Portfolio PDF
        </a>
      </div>
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, 'contact');