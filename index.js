
let position = "first_num";
document.getElementById("first_num").addEventListener("click", function(){

     position = "first_num";
});
document.getElementById("second_num").addEventListener("click", function(){

    position = "second_num";
});
document.getElementById("middle").addEventListener("click", function(){

    position = "middle";
});


function addnumber(number) {
    //document.addEventListener("click")
    
    let num = document.getElementById(position).value+=number;
    console.log(num);
}

function calculate(){
    let first= parseInt(document.getElementById("first_num").value);
    let middle= document.getElementById("middle").value;
    
    let second= parseInt(document.getElementById("second_num").value);
    
    if (middle === "+"){
        console.log(first + second)
        document.getElementById("result").value = first + second;
    }
    if (middle === "-"){
        console.log(first - second)
        document.getElementById("result").value = first - second;
    }
    if (middle === ":"){
        console.log(first / second)
        document.getElementById("result").value = first / second;
    }
    if (middle === "x"){
        console.log(first + second)
        document.getElementById("result").value = first * second;
    }

}
