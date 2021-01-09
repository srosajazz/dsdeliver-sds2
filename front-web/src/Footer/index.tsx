import './styles.css';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App developed during the second event DevSuperior Week
      <div className="footer-icons">
        <a href="https://github.com/srosajazz/dsdeliver-sds2" target="_new">
          <GithubIcon />
        </a>

        <a href="https://www.linkedin.com/in/sergiorosa1/" target="_new">
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
