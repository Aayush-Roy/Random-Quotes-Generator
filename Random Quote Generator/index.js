const url = "https://api.quotable.io/random";
const msgContainer = document.querySelector("#quote");
const btn = document.querySelector("#btn");
const author = document.querySelector("#author");
const getQuote = async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    msgContainer.innerText = data.content;          
    author.innerHTML = "---"+data.author;
}
btn.addEventListener("click",getQuote);