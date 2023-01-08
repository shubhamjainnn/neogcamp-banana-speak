var btnTranlate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/russian-accent.json"

function getTranslationURL (input) {
     return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log ("error occured ", error);
    alert("somthing wrong with server! try again after some time")

}

function clickhandler() {
var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;

})
.catch(errorHandler)
};






btnTranlate.addEventListener("click", clickhandler)