function AddFunction(){
    let soA = document.getElementById('idA').value;
    let soB = document.getElementById('idB').value;
    let S = soA + soB;
    console.log(S);
    document.getElementById('result').innerHTML = S;
}
export default AddFunction;
