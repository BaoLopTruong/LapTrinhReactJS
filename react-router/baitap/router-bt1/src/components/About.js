import { useLocation } from "react-router-dom";
function About() {
  const { state } = useLocation();
    console.log(state);
  return (
    <div>
      <h3>Id selected {state.form.email} </h3>
      <h3>Id selected {state.form.text} </h3>

    </div>
  );
}

export default About;