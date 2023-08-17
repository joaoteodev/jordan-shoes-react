import styles from "./styles.module.scss";

export const ShoesCard = ({ shoes }) => {
  return (
    <div className={styles.shoesCard}>
      <img src={shoes} alt="Jordan shoes" />
    </div>
  );
};
