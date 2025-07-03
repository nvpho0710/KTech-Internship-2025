
import styles from './tintuc.module.css';

type News = {
  title: string;
  image: string;
  views: number;
};

const newsList: News[] = [
  {
    title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
    image: 'images/samsung.png',
    views: 40,
  },
  {
    title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
    image: 'images/samsung.png',
    views: 40,
  },
  {
    title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
    image: 'images/samsung.png',
    views: 40,
  },
  {
    title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
    image: 'images/samsung.png',
    views: 40,
  },
];

export default function Tintuc() {
  return (
    <div className={styles.tintucWrap}>
      <h2 className={styles.title}>TIN MỚI</h2>
      <div className={styles.listNews}>
        {newsList.map((item, idx) => (
          <div className={styles.newsItem} key={idx}>
            <img src={item.image} alt={item.title} className={styles.newsImg} />
            <div className={styles.newsContent}>
              <div className={styles.newsTitle}>{item.title}</div>
              <div className={styles.newsViews}>{item.views} lượt xem</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
