import styles from "./Button.module.css";
import checked from "../assets/checked.svg";

export default function Button({
  onClick,
  id,
  added = false,
}: {
  onClick: (id: number) => void;
  id: number;
  added?: boolean;
}) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={added ? styles.containerAdded : styles.container}
      onClick={handleClick}
    >
      {added ? (
        <div className={styles.divCenter}>
          <img src={checked} alt="added"></img>
          <p>In Cart</p>
        </div>
      ) : (
        <div>
          <p>Add to Cart</p>
        </div>
      )}
    </div>
  );
}
