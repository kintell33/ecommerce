import styles from './App.module.css';
import ItemMenu from "./components/ItemMenu";
import Swiper from 'swiper';
import 'swiper/css';

const menu = [
  {
    id: 1,
    name: "French Fries With Ketchup",
    price: 10,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048559452011368529/image.png",
  },
  {
    id: 1,
    name: "Salmon and Vegetables",
    price: 23,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048564026327699456/image.png",
  },
  {
    id: 1,
    name: "Spaghetti with Meat Sauce",
    price: 13,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048564067176034324/image.png",
  },
  {
    id: 1,
    name: "French Fries With Ketchup",
    price: 10,
    imageUrl:
      "https://cdn.discordapp.com/attachments/245307844478369793/1048559452011368529/image.png",
  },
];

function getColor(){ 
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Go Menu</h1>
      <div className={styles.menu}>
        {menu.map((e) => (
          <ItemMenu
            id={e.id}
            name={e.name}
            imageUrl={e.imageUrl}
            price={e.price}
            color={getColor()}
            onAdd={() => {}}
          ></ItemMenu>
        ))}
      </div>
    </div>
  );
}

export default App;
