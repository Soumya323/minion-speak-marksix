var textarea = document.querySelector("#text-area");
var button = document.querySelector("#translate-button");
var resultTextArea = document.querySelector("#result-text-area");

button.addEventListener("click", translateClicked);

function translateClicked() {
    var serverURL = "https://api.funtranslations.com/translate/minion.json?";
    var textQuery = "text=" + textarea.value;
    var queryURL = serverURL + textQuery;

    resultTextArea.value = "minion translating...  beee bop boop.... ";

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateResultUI(JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error', error);
        });

    // TestResult(" Hey kya bolti tuuu");
}

function updateResultUI(jsondata) {
    const data = JSON.parse(jsondata);
    result = data.contents.translated;
    resultTextArea.value = result;
}

function TestResult(data) {
    resultTextArea.value = data;
}

