// vienas budas
// function httpGet(theUrl) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, false); // false for synchronous request
//     xmlHttp.send(null);
//     return JSON.parse(xmlHttp.responseText);
// }


// for (var i = 0; i < duomenys.data.length; i++) {
//     console.log(duomenys.data[i].name);
//     console.log(duomenys.data[i].price_usd);
// }

// kitas budas
const btnGet = document.querySelector('#get');
const tBody = document.querySelector('#tBody');
// let all = [];

btnGet.addEventListener('click', function (e) {
    tBody.innerHTML = '';
    fetch('https://api.coinlore.com/api/tickers/')
        .then(response =>
            response.json()
        )
        .then(
            response => {
                response.data.forEach((data) => {
                    // all.push(data);
                    const trEl = document.createElement('tr');
                    const tdName = document.createElement('td');
                    const tdSymbol = document.createElement('td');
                    const tdUSD = document.createElement('td');
                    const tdEUR = document.createElement('td');
                    tdName.textContent = data.name;
                    tdSymbol.textContent = data.symbol;
                    tdUSD.textContent = data.price_usd;
                    tdEUR.textContent = data.price_usd * 0.91;
                    trEl.appendChild(tdName);
                    trEl.appendChild(tdSymbol);
                    trEl.appendChild(tdUSD);
                    trEl.appendChild(tdEUR);
                    tBody.appendChild(trEl);  
                });
                // console.log(sortUSD(all)); 
            }
        );
});


const sortUSD = (data) => {
    data.sort(function(a, b) {
        if (a.price_usd < b.price_usd) {
            return -1;
        } else if (b.price_usd < a.price_usd) {
            return 1;
        } else {
            return 0;
        }
    });
}





