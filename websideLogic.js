let namelist = ["Arwed", "Test"];
let isNameinList = false;

const btn = document.querySelector("button");

console.log(btn);

function checkList(val){
    namelist.forEach(function(name, index) {
        if (val == name){
            alert(val + " ist in der Liste")
            namelist.splice(index);
            isNameinList = true;
        }
        else {isNameinList = false}
    })
    if (!isNameinList){
        alert("Der eingegebene Name ist nicht in der Liste")
    }
}

btn.onclick = () =>{
    const val = document.querySelector("input").value;
    checkList(val);
}

