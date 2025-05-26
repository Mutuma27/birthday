function ujumbe(){
    alert("Karibu Nairobi");
}
let r=7
const pi=3.142

function cir(){
    let circum=2*pi*r;
    document.write("<h4>The circumference is</h4> "+circum)
}
function Area(){
    let area=pi*(r**2)
    document.write("<h4>The area is</h4> "+area)
    if(area>150){
        document.write("<h5>This is a statement</h5>")
    }
    else{
        document.write("<h5>That is also a statement</h5>")
    }
}
