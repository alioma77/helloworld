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

    // ----------------------------------


    const trafficLight = "gul"

    switch(trafficLight){
        case "grön": console.log("kör!")
            break
        case "gul": console.log("gör dig redo...")
            break
        case "röd": console.log("Stanna!")
            break

        default: console.log("okänd signal")
    }



    // --------------------------

    const weather = "regn"

    switch(weather){
        case "regn": console.log("ta med ett paraply!")
            break
        case "sol": console.log("glöm inte solglasögon!")
            break
        case "snö": console.log("ta på dig en varm jacka!")
            break

        default: console.log("kolla väderappen igen!")
    }



    // for-loop

    for (let i = 1; i<6; i++){
        console.log(i)
    }

     for (let i = 10; i > 0; i--){
        console.log(i)
    }

// i++  ---> i = i + 1

// i--  ---> i = i - 1



// ---------------------------

const fruits = ["banan", "äpple", "körsbär"]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}



// --------------------------

let energi = 3; 

while (energi > 0){
    console.log("sprang ett varv! energi kvar:" + energi);
    energi--; //minskar energi med 1 efter varje varv
}
console.log("slut på energ! måste vila")
//Looppar tills satsen är klar, alltså tills energi är slut. 

// ---------------------------------


let elever = [
    {name: "Anna", poang: 85}, 
    {name: "Ali", poang: 1000},
    {name: "Björn", poang: 10},
]

for (let i = 0; i < elever.length; i++){
    console.log(elever[i].name + "-" + elever[i].poang)
}

for (const elev of elever){
    console.log(elev.namn)
}

