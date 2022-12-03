import styles from  './Button.module.css';

export default function Button({onClick,id, children}:{onClick:(id:number)=>void,id:number,children:string}) {

    const handleClick = () => {
        onClick(id);
    }

    return <div className={styles.container} onClick={handleClick}>
        {children}
    </div>
}