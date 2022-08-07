const pusher = (inp) => {
    // document.getElementsById("output").innerHTML= "A";
    // if (inp === "/" || inp === "*" || inp === "-" || inp === "+"  ) {
    //     console.log("object");
    //     equal()
    // }
     const asad = document.getElementById("output").innerText;
     console.log(asad);
     const res = asad+inp 
     document.getElementById("output").innerHTML = res;
}
var cleaner= ()=>{
    const asad = document.getElementById("output").innerText;
    console.log(asad);
    document.getElementById("output").innerHTML = "";
    
}
var equal = () => {
    const asad = document.getElementById("output").innerText;
    console.log(asad);
    var res = eval(asad);
    document.getElementById("output").innerHTML = res;
    // cleaner();
}