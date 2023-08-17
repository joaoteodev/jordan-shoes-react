import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.highlight}>
        Compras acima de <span>R$ 70,00</span> tem <span>frete grátis</span>
      </p>
      <p className={styles.title}>JordanShoes</p>
    </header>
  );
};
