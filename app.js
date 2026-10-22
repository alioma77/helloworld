let age = 16 
let hasTicket = false
let withAdult = true 

if (age >= 15 && hasTicket === true){
    console.log("välkommen in i BIO")
}

    else {
        console.log("gå köp ticket din åsna")
    }



// = ---> tilldela nytt värde
// == ---> kolla om (värdet) är truthy
// === ---> kolla om (värdet) är exakt samma som (värdet) i typ och värde

const isLoggedIn = true
const userRole = "admin"

if (isLoggedIn === true){
    if (userRole === "admin"){
        console.log("Välkommen till Adminpanelen!")
    } else {
        console.log("Välkommen vanlig användare!")
    }
}
    else{
        console.log("Du måste logga in först!")
    }