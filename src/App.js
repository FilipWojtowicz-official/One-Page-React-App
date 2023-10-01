import React from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import EmployeeSection from "./components/EmployeeSection/EmployeeSection";
import OfferSection from "./components/OfferSection/OfferSection";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <EmployeeSection></EmployeeSection>
      <OfferSection></OfferSection>
      <Footer></Footer>
    </>
  );
}
export default App;
