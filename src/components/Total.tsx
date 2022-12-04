import styles from "./Total.module.css";

export default function Total({
  subtotal,
  tax,
}: {
  subtotal: number;
  tax: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>Subtotal:</div>
        <div>${subtotal}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Tax:</div>
        <div>${(subtotal * tax).toFixed()}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Total:</div>
        <div className={styles.total}>
          ${(subtotal + subtotal * tax).toFixed()}
        </div>
      </div>
    </div>
  );
}
