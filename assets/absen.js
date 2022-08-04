const dataAbsen = "absen-history";

function checkForStorage() {
    return typeof(Storage) !== "undefined"
   }

/*function store() {
    if($("#absenName").val() == "") return true
    const dataData = {
      absenName: $("#absenName").val(),
      absenPekerjaan: $("#absenPekerjaan").val(),
      absenInstansi:  $("#absenInstansi").val(),
    };
    putHistory(dataData);
    renderHistory();
} jquery framework*/

function store() {
    if(document.getElementById("absenName").value == "") return true
    const dataData = {
      absenName: document.getElementById("absenName").value,
      absenPekerjaan: document.getElementById("absenPekerjaan").value,
      absenInstansi: document.getElementById("absenInstansi").value,
      absenKepuasan: document.getElementById("myRange").value,
    };
    document.getElementById("absenName").value=""
    document.getElementById("absenPekerjaan").value=""
    document.getElementById("absenInstansi").value=""
    document.getElementById("myRange").value=0
    putHistory(dataData);
    renderHistory();
}

function putHistory(data) {
if (checkForStorage()) {
    let historyAbsen = null;
    if (localStorage.getItem(dataAbsen) === null) {
        historyAbsen = [];
    } else {
        historyAbsen = JSON.parse(localStorage.getItem(dataAbsen));
    }

    historyAbsen.unshift(data);

    if (historyAbsen.length > 10) {
        historyAbsen.pop();
    }

    localStorage.setItem(dataAbsen, JSON.stringify(historyAbsen));
    }
}

function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(dataAbsen)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyAbsen = showHistory();
    let historyList = document.querySelector("#data-Absen");
  
    historyList.innerHTML = "";
  
  
    for (let dataData of historyAbsen) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + dataData.absenName + "</td>";
        row.innerHTML += "<td>" + dataData.absenPekerjaan + "</td>";
        row.innerHTML += "<td>" + dataData.absenInstansi + "</td>";
        row.innerHTML += "<td>" + dataData.absenKepuasan + "</td>";
        historyList.appendChild(row);
    }
 }

 const submitBtn = document.getElementById('submitBtn');
 submitBtn.addEventListener("click", store);

renderHistory();