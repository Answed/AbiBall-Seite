
const btn = document.querySelector("button");

console.log(btn);

function getVal(val){
    alert(val);
}

btn.onclick = () =>{
    const val = document.querySelector("input").value;
    getVal(val);
}

