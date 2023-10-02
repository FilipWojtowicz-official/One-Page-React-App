import "./Employee.css";

const Employee = ({ img, title }) => {
  return (
    <div className="employee">
      <div className="employee-photo">
        <img src={img} alt="employee" className="employee-photo" />
      </div>
      <div className="employee-details">
        <p className="employee-details-name">{title}</p>
        <p className="employee-details-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
          nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
          lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
          tincidunt libero ultrices in.
        </p>
      </div>
    </div>
  );
};

export default Employee;
