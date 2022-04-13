import AddFunction from '../components/main.js'
function CalculatorFunction (){
    return(
        <div>
            <h1>CALCULATOR </h1>
        <form>
            <input id={"idA"} type={'text'} placeholder={'nhap so thu nhat'}></input> <br></br>
            <input id={"idB"} type={'text'} placeholder={'nhap so thu hai'}></input> <br></br>
            <span>Results: </span> <span id={'result'}></span>
            <input type={'button'} value={'+'} onclick={<AddFunction></AddFunction>} ></input>
            <input type={'button'} value={'-'}></input>
            <input type={'button'} value={'*'}></input>
            <input type={'button'} value={'/'}></input>
        </form>
        </div>
    )


}

export default CalculatorFunction;