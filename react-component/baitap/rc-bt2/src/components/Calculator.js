//import SFunction from '../components/main.js'
function CalculatorFunction() {


    function AddFunction() {
        let a = parseInt(document.getElementById('idA').value);
        let b = parseInt(document.getElementById('idB').value);
        let S = a + b;
        document.getElementById('result').innerHTML = S;
    }
    function Subtraction() {
        let a = parseInt(document.getElementById('idA').value);
        let b = parseInt(document.getElementById('idB').value);
        let S = a - b;
        document.getElementById('result').innerHTML = S;
    }
    function Multiplication() {
        let a = parseInt(document.getElementById('idA').value);
        let b = parseInt(document.getElementById('idB').value);
        let S = a * b;
        document.getElementById('result').innerHTML = S;
    }
    function Division() {
        let a = parseInt(document.getElementById('idA').value);
        let b = parseInt(document.getElementById('idB').value);
        let S = a / b;
        document.getElementById('result').innerHTML = S;
    }

    //nghien cuu state trong reactjs
    // function Calculators(props){
    //     let a = parseFloat( document.querySelector("#idA").value );
    //     let b = parseFloat(document.getElementById("idB").value);
    //     if(props.value === "add"){
    //         let S = a + b;
    //     document.getElementById("kqua1").innerHTML = S;
    //     }
    //     else if(props.value  ==="sub"){
    //         let S = a - b;
    //     document.getElementById("result").innerHTML = S;
    //     }
    //     else if( props.value  ==="mul"){
    //         let S = a * b;
    //     document.getElementById("result").innerHTML = S;
    //     }
    //     else if( props.value  ==="div"){
    //         let S = a / b;
    //     document.getElementById("result").innerHTML = S;
    //     }
    //     else{
    //         document.getElementById("result").innerHTML = "Something Wrong. Try again.";
    //     }
    // }

    return (
        <div>
            <h1>CALCULATOR </h1>
            <form>
                <input id={"idA"} type={'text'} placeholder={'nhap so thu nhat'}></input> <br></br>
                <input id={"idB"} type={'text'} placeholder={'nhap so thu hai'}></input> <br></br>
                <input type={'button'} value={'add'} onClick={AddFunction} ></input>
                <input type={'button'} value={'sub'} onClick={Subtraction}></input>
                <input type={'button'} value={'mul'} onClick={Multiplication}></input>
                <input type={'button'} value={'div'} onClick={Division}></input> <br></br>
                <span>Results: </span> <span id={'result'}></span>
            </form>
        </div>
    )


}

export default CalculatorFunction;