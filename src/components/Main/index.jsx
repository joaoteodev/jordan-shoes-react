import { imageShoes } from "../../assets/images/shoes";
import { ShoesCard } from "../ShoesCard";

import styles from "./styles.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <h2>Destaques</h2>
      <p>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.{" "}
      </p>

      <div className={styles.shoesList}>
        {imageShoes.map((shoes, index) => (
          <ShoesCard shoes={shoes} key={index} />
        ))}
      </div>
    </div>
  );
};
