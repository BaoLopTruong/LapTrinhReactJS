function Alert(props) {
    return (
        <div className="alert alert-warning" role="alert">
  <h1> { props.text} </h1>
      </div>
    );
}
 
export default Alert;