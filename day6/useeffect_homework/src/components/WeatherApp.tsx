// WeatherApp.tsx
import { useEffect, useState } from 'react';
import styles from './WeatherApp.module.css';

const API_KEY = 'c9a0ca46550648b29ce125849232709';

interface WeatherData {
  temp_c: number;
  condition: { text: string; icon: string };
  humidity: number;
  wind_kph: number;
}

interface HourData {
  time: string;
  temp_c: number;
  condition: { text: string; icon: string };
}

export default function WeatherApp() {
  const [city, setCity] = useState('Hanoi');
  const [input, setInput] = useState('Hanoi');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hours, setHours] = useState<HourData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Removed slide state, not needed for auto-scroll

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError('');
      try {
        const res1 = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=vi`);
        const data1 = await res1.json();
        const res2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`);
        const data2 = await res2.json();
        setWeather({
          temp_c: data1.current.temp_c,
          condition: data1.current.condition,
          humidity: data1.current.humidity,
          wind_kph: data1.current.wind_kph,
        });
        setHours(data2.forecast.forecastday[0].hour);
      } catch {
        setError('Không lấy được dữ liệu thời tiết.');
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  // Tìm vị trí giờ hiện tại
  const now = new Date();
  const nowHour = now.getHours();
  const startIdx = Math.max(0, hours.findIndex(h => new Date(h.time).getHours() === nowHour));
  // Remove unused variables after switching to auto-scroll

  return (
    <div className={styles.weatherApp}>
      <div className={styles.topBar}>
        <input
          className={styles.searchBar}
          placeholder="Hanoi"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') setCity(input); }}
        />
      </div>
      {loading ? (
        <div className={styles.loading}>Đang tải...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : weather && (
        <>
          <div className={styles.currentWeather}>
            <div className={styles.tempSection}>
              <span className={styles.temp}>{Math.round(weather.temp_c)}°</span>
              <span className={styles.condition}>{weather.condition.text}</span>
            </div>
            <img src={weather.condition.icon} alt={weather.condition.text} className={styles.weatherIcon} />
          </div>
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div>Humidity</div>
              <div className={styles.infoValue}>{weather.humidity}%</div>
            </div>
            <div className={styles.infoCard}>
              <div>Wind</div>
              <div className={styles.infoValue}>{weather.wind_kph.toLocaleString('vi-VN', { maximumFractionDigits: 1 })} km/h</div>
            </div>
          </div>
          <div className={styles.hourlySection}>
            <div className={styles.hourlyHeader}>Now</div>
            <div className={styles.hourlyListAuto}>
              {hours.map((h, idx) => (
                <div className={styles.hourCard} key={h.time}>
                  <img src={h.condition.icon} alt={h.condition.text} className={styles.hourIcon} />
                  <div className={styles.hourTemp}>{Math.round(h.temp_c)}°</div>
                  <div className={styles.hourTime}>{
                    idx === startIdx ? 'Now' : new Date(h.time).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
                  }</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
