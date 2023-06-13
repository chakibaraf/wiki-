

const form =document.querySelector("form");
const input =document.querySelector("input");
const errorMsg =document.querySelector(".error-msg");

form.addEventListener("submit",handleSubmit)

function handleSubmit(e){
    e.preventDefault()


if(input.value === "" ){
    errorMsg.textContent ="veuillez remplir le champ";
    return;
} else {
    errorMsg.textContent ="";
    wikiApiCall(input.value);
}

}

async function wikiApiCall(searchInput){
    const response = await fetch (`https://`)
}

