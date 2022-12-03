import styles from "./ItemCart.module.css";

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
      <div className={styles.line}>
      </div>
    </div>
  );
}
