import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Money in check.<br className="sm:block hidden" /> Business on track.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Track every dollar. Stay on top of your business. From smart transaction logging to detailed visual reports, MoneyTrack simplifies financial management for entrepreneurs and small business owners.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
