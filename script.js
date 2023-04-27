function hide (connection){
var listItem= document.querySelector(connection)
console.log(listItem);

listItem.remove()
}

function changeText(){
var name= document.querySelector("#name")
name.innerText= "Yazan Muqbel"
console.log(name)

}

