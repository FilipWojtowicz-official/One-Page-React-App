import React from "react";
import Container from "../Container/Container";
import Employee from "./Employee";
import "./EmployeeSection.css";

const EmployeeSection = () => {
  return (
    <section className="employee-section" id="employee-section">
      <Container>
        <h2 className="our-specialists">Nasi specjaliści</h2>
        <Employee
          img="/src/assets/Emploee1.png"
          title="Jan Kowalski [HR]"
        ></Employee>
        <Employee
          img="/assets/Emploee2.png"
          title="Jurek Kowalski [IT]"
        ></Employee>
      </Container>
    </section>
  );
};

export default EmployeeSection;
