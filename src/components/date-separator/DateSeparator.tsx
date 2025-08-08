import { formatDate } from "../../utils";
import styles from "./DateSeparator.module.css";

interface DateSeparatorProps {
  formattedDate: string;
}

const DateSeparator = ({ formattedDate }: DateSeparatorProps) => {
  return (
    <div className={styles.dateSeparator}>
      <div className={styles.divider} />
      {formatDate(formattedDate)}
      <div className={styles.divider} />
    </div>
  );
};

export default DateSeparator;
