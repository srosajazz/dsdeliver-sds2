import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
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
            <Link to="/orders" className="home-btn-order">
              PLACE YOUR ORDER
            </Link>
          </div>
          {/* SIDE-IMAGE */}
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
