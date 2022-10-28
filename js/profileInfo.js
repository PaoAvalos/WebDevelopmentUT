function saveEmail(){
    let inputEmail = document.getElementById("emailInput").value
    localStorage.setItem('inputEmail', inputEmail)
}

function showInfo(){
    const personInfo = document.getElementById("personInfo")
    if (personInfo.style.display === "block") {
        personInfo.style.display = "none"
    } else {
        personInfo.style.display = "block"
        const email = localStorage.getItem("inputEmail")
        personInfo.getElementsByTagName("P")[0].innerHTML = "noname"
        for (let i = 0; i < people.length; i++) {
            if (people[i].email === email){
                personInfo.getElementsByTagName("P")[0].innerHTML = people[i].name
            }
        }
        personInfo.getElementsByTagName("P")[1].innerHTML = localStorage.getItem("inputEmail")
    }
}

const people = [
    {name:"Nolan Surname", email:"nolan@gmail.com"},
    {name:"Poland Japan", email:"poland.japan@gmail.com"},
    {name:"Saiki Kusuo", email:"saiki.kusuo@gmail.com"}
]
