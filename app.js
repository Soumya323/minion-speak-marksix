var textarea = document.querySelector("#text-area");
var button = document.querySelector("#translate-button");
var resultText = document.querySelector("#result-text");

button.addEventListener("click", translateClicked);

function translateClicked() {
    var serverURL = "https://api.funtranslations.com/translate/minion.json?";
    var textQuery = "text=" + textarea.value;
    var queryURL = serverURL + textQuery;

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateResultUI(JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error', error);
        });

    // updateResultUI(" Hey kya bolti tuuu");
}

function updateResultUI(jsondata) {

    const data = JSON.parse(jsondata);
    result = data.contents.translated;
    resultText.innerText = result;
}

