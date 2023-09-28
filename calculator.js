 

function ac(){
    document.getElementById("srceen").value="";
}
function show(input){
    document.getElementById("srceen").value+=input;
}
function cal(){
    var output= eval(document.getElementById("srceen").value)
    document.getElementById("srceen").value=output;
}

