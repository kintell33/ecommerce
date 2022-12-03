import Button from "./Button";
import styles from "./ItemMenu.module.css";

export default function ItemMenu({
  imageUrl,
  name,
  price,
  id,
  color,
  onAdd,
}: {
  imageUrl: string;
  name: string;
  id: number;
  price: number;
  color: string;
  onAdd: (id: number) => void;
}) {
  const handleAdd = (e: any) => {
    console.log(e);
    onAdd(id);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <img
        className={styles.image}
        src={imageUrl}
        alt={"food item"}
        height={"200px"}
        width={"200px"}
      ></img>
      <div>
        <p>{name}</p>
        <h1>${price}</h1>
        <div className={styles.button}>
          <Button id={id} onClick={handleAdd}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
