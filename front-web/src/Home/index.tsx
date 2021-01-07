import './styles.css';
import { ReactComponent as MainImage } from './main.svg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Place your order <br /> we will deliver <br /> for you !!!
          </h1>
          <h3 className="home-subtitle">
            Choose your order and in a few <br /> minutes we will deliver on
            your door
          </h3>
          <a href="orders" className="home-btn-order">
            ORDER
          </a>
        </div>
        {/* SIDE-IMAGE */}
        <div className="home-image">
          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
