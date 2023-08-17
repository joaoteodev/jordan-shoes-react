import styles from "./styles.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}></div>
      <div className={styles.container}>
        <div className={styles.bannerInformation}>
          <h1 className={styles.title}>A melhor loja de Jordan</h1>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </div>
  );
};
