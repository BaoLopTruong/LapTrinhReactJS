import { connect } from "react-redux"

const Counter = (props) =>{
    const increase = () =>{
        props.dispatch({
            type: "INCREMENT"
        })
    }
    const descrease = () =>{
        props.dispatch({
            type: "DECREMENT"
          });
    }
    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={descrease}>-1</button>
            <h3>{props.count}</h3>
        </div>
    )
   
}
const mapStateToProps = state =>{
    return{
        count: state.coutn
}
}

export default connect(mapStateToProps)(Counter)