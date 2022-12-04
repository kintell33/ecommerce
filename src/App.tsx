import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ItemCart from "./components/ItemCart";
import ItemMenu from "./components/ItemMenu";
import cartIcon from "./assets/cart.svg";
import Total from "./components/Total";

const menu = [
  {
    id: 1,
    name: "French Fries With Ketchup",
    price: 10,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048559452011368529/image.png",
    amount: 1,
  },
  {
    id: 2,
    name: "Salmon and Vegetables",
    price: 23,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048564026327699456/image.png",
    amount: 1,
  },
  {
    id: 3,
    name: "Spaghetti with Meat Sauce",
    price: 13,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048564067176034324/image.png",
    amount: 1,
  },
  {
    id: 4,
    name: "French Fries With Ketchup",
    price: 10,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048559452011368529/image.png",
    amount: 1,
  },
];

function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}

function App() {
  const [screen, setScreen] = useState(1);
  const [cart, setCart] = useState([]);
  const [tax] = useState(0.0975);

  const addItem = (id: number) => {
    let actualCart = structuredClone(cart);
    let item = actualCart.find((x: any) => x.id === id);

    if (!item) {
      actualCart.push(menu.find((x) => x.id === id));
      setCart(actualCart);
    }
  };

  const onAdd = (id: number) => {
    let actualCart = structuredClone(cart);

    actualCart = actualCart.map((e: any) => {
      if (e.id === id) {
        e.amount += 1;
      }
      return e;
    });

    setCart(actualCart);
  };

  const onRemove = (id: number) => {
    let actualCart = structuredClone(cart);

    actualCart = actualCart.map((e: any) => {
      if (e.id === id) {
        if (e.amount !== 0) e.amount -= 1;
      }

      return e;
    });

    setCart(actualCart);
  };

  const isInCart = (id: number) => {
    let actualCart = structuredClone(cart);
    let item = actualCart.find((x: any) => x.id === id);
    if (item) return true;

    return false;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.actions}>
          <div
            className={styles.mover}
            onClick={() => {
              setScreen(screen === 1 ? 2 : 1);
            }}
          >
            {screen === 1 && (
              <>
                <p>Go to Cart</p>
                <img src={cartIcon} alt={"cart"}></img>
              </>
            )}
            {screen === 2 && <p>Back to Menu</p>}
          </div>
        </div>
        {screen === 1 && (
          <div className={styles.items}>
            <h1 className={styles.title}>To Go Menu</h1>
            <div className={styles.menu}>
              {menu.map((e, i) => (
                <ItemMenu
                  key={i}
                  id={e.id}
                  added={isInCart(e.id)}
                  name={e.name}
                  imageUrl={e.imageUrl}
                  price={e.price}
                  color={getColor()}
                  onAdd={addItem}
                ></ItemMenu>
              ))}
            </div>
          </div>
        )}

        {screen === 2 && (
          <div className={styles.items}>
            <h1 className={styles.title}>Your Cart</h1>
            <div className={styles.menu}>
              {cart.length > 0 ? (
                <>
                  {cart.map((e: any, i) => (
                    <ItemCart
                      name={e.name}
                      imageUrl={e.imageUrl}
                      price={e.price}
                      amount={e.amount}
                      id={e.id}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      key={i}
                    ></ItemCart>
                  ))}
                  <div>
                    <Total subtotal={cart.reduce((a:any, c:any) => a + (c.amount * c.price), 0)} tax={tax}/>
                  </div>
                </>
              ) : (
                <div className={styles.title}>Your cart is empty.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
