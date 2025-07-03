import styles from './phukien.module.css';
type Props = {
    title?: string;
    price?: number;
    image?: string;
    priceOld?: number;
}
const newList: Props[] = [
    {
        title: 'Cáp chuyển đổi USB Type-C sang SD',
        price: 100000,
        image: 'images/type-c-20-w.png',
        priceOld: 120000,},

    {
        title: 'Cáp chuyển đổi USB Type-C sang HDMI',  
        price: 150000,
        image: 'images/type-c-20-w.png',
        priceOld: 180000,
    },

    {
        title: 'Cáp chuyển đổi USB Type-C sang HDMI',  
        price: 150000,
        image: 'images/airpod-3.png',
        priceOld: 180000,
    },
    {
        title: 'Cáp chuyển đổi USB Type-C sang HDMI',  
        price: 150000,
        image: 'images/airpod-3.png',
        priceOld: 180000,
    }
];

export default function Phukien() {
  return (
    <div className={styles.listNew}>
        <h2 className={styles.title}>Phụ kiện</h2>
        <div className={styles.listNews}>
            {newList.map((item, idx) => (
            <div className={styles.newsItem} key={idx}>
                <img src={item.image} alt={item.title} className={styles.newsImages} />
                <div className="newsContent">
                <div className={styles.newsTitle}>{item.title}</div>
                <div className={styles.newsViews}>
                    <div className={styles.newsPrice}>{item.price} đ</div>
                    {item.priceOld && <div className={styles.newsPriceOld}>{item.priceOld} đ</div>}
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}