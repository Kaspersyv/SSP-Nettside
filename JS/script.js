


let mcstein = document.getElementById("mcstein");
let mcsaks = document.getElementById("mcsaks");
let mcpapir = document.getElementById("mcpapir");



let userInput = "";


let userscore = document.getElementById("usernum").innerText
let botscore = document.getElementById("botnum").innerText
let userval = 0
let compval = 0






mcstein.addEventListener("click", function(){
    userInput = "stein";

    mcstein.style.width = "23%";
    mcsaks.style.width = "20%";
    mcpapir.style.width = "20%";
    mcstein.style.margin = "0% -4.5% 0% 14.5%"

})
mcsaks.addEventListener("click", function(){
    userInput = "saks";

    mcstein.style.width = "20%";
    mcsaks.style.width = "23%";
    mcpapir.style.width = "20%";
    mcsaks.style.margin = "0% -4.5% 0% 38.5%"
})
mcpapir.addEventListener("click", function(){
    userInput = "papir";

    mcstein.style.width = "20%";
    mcsaks.style.width = "20%";
    mcpapir.style.width = "23%";
    mcpapir.style.margin = "0% -4.5% 0% 63.5%"
})


let botvar = ""
function guess(){
    console.log(userInput)
    let botguess = Math.floor(Math.random()*3)+1
    
    

    if (botguess == 1) {
        botvar = "stein"
        alert(botvar)
    }

    else if (botguess == 2) {
        botvar = "saks"
        alert(botvar)
    }

    else if (botguess == 3) {
        botvar = "papir"
        alert(botvar)
    }


    if (userInput == "stein" && botvar == "stein" ||
        userInput == "saks" && botvar == "saks" || 
        userInput == "papir" && botvar == "papir") {
        alert("Uavgjort")
        
    }

    else if (userInput == "stein" && botvar == "saks" ||
        userInput == "saks" && botvar == "papir" || 
        userInput == "papir" && botvar == "stein") {
        alert("Grattis!")
        userval +=1
        document.getElementById("usernum").innerText = userval
        
    }

    else if (userInput == "saks" && botvar == "stein" ||
        userInput == "papir" && botvar == "saks" || 
        userInput == "stein" && botvar == "papir") {
        alert("Trash!")
        compval += 1
        document.getElementById("botnum").innerText = compval
        
    }


    

}
