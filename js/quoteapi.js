/* 

Quote categories 

#inspire
#management
#sports
#life
#funny
#love
#art
#students


*/

// const URL = "https://quotes.rest/qod"

const URL = "https://type.fit/api/quotes"

async function getQuote(){
    
    document.getElementById("quote").textContent = "Loading quote";
    document.getElementById("author").textContent = "API";

    let randomNumber = Math.floor(Math.random() * 1001);

    const response = await fetch(URL);
    const data = await response.json();

    const {text, author} = data[randomNumber]

    document.getElementById("quote").textContent = text;
    document.getElementById("author").textContent = author ? author : "unknown";

    let button = document.getElementById("generateQuote");
}

getQuote();
