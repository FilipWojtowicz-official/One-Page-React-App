import "./Main.css";
import Container from "../Container/Container";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="shadow">
          <Container>
            <h1 className="heading">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="text-header">Nie wierz nam na słowo - sprawdź</p>
            <a href="#offer-section" className="offer-btn">
              oferta
            </a>
          </Container>
        </div>
      </main>
    </>
  );
};
export default Main;
