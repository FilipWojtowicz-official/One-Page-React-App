import "./Header.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="navigation">
      <Container>
        <a href="/#" className="my-company">
          moja firma
        </a>
        <ul className="menu-list">
          <li className="li-navigation">
            <a href="#employee-section">o nas</a>
          </li>
          <li className="li-navigation">
            <a href="#offer-section">oferta</a>
          </li>
          <li className="li-navigation">
            <span className="disabled">kontakt</span>
          </li>
        </ul>
      </Container>
    </header>
  );
};
export default Header;
