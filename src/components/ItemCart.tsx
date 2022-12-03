import styles from "./ItemCart.module.css";
import add from "../assets/add.svg";
import reduce from "../assets/reduce.svg";

export default function ItemCart({
  id,
  imageUrl,
  name,
  price,
  amount,
  onAdd,
  onRemove,
}: {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  amount: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.counter}>{amount}</div>
        <img
          className={styles.image}
          src={imageUrl}
          alt={"food item"}
          height={"80px"}
          width={"80px"}
        ></img>
        <div className={styles.itemDetail}>
          <span>{name}</span>
          <span className={styles.price}>${price}</span>
        </div>
      </div>
      <div className={styles.itemActions}>
        <div className={styles.add} onClick={() => {onRemove(id)}}>
          <img
            src={reduce}
            alt={"reduce item"}
            height={"20px"}
            width={"20px"}
          ></img>
        </div>
        <div>{amount}</div>
        <div className={styles.remove} onClick={() => {onAdd(id)}}>
          <img
            src={add}
            alt={"add more item"}
            height={"20px"}
            width={"20px"}
          ></img>
        </div>
        <h1>
            ${price * amount}
        </h1>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
