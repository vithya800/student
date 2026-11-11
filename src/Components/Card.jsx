import react from "react";
function Card(props){
  return(
    <div>
      <h2>student card</h2>
      <p>Name:{props.name}</p>
      <p>Department:{props.department}</p>
      <p>CGPA:{props.cgpa}</p>
    </div>
  )
}
export default Card