import { useLocation } from "react-router-dom";
function Home() {
    const { state } = useLocation();
    console.log(state);

    return (
        <div>
        <h3>Info Account </h3> <br></br>
        <h2> Email: {state.email }</h2> <br></br>
        <h2>Password: {state.password }</h2>
      </div>
    );
}
export default Home;