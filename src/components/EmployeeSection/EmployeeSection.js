import Container from "../Container/Container";
import Employee from "./Employee";
import "./EmployeeSection.css";
import photo1 from "./assets/Emploee1.png";
import photo2 from "./assets/Emploee2.png";

const EmployeeSection = () => {
  return (
    <section className="employee-section" id="employee-section">
      <Container>
        <h2 className="our-specialists">Nasi specjaliści</h2>
        <Employee img={photo1} title="Jan Kowalski [HR]"></Employee>
        <Employee img={photo2} title="Jurek Kowalski [IT]"></Employee>
      </Container>
    </section>
  );
};

export default EmployeeSection;
