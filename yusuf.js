const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const input = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/9684404d399c226ecd3707c8/latest/${currencyFirst.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        const rate = data.conversion_rates[currencySecond.value];

        exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`

        equal.textContent = (input.value * rate).toFixed(2);
    });
}

currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
input.addEventListener('input',updateRate);  // bu 3 event içerdeki eur/dolar ve input değiştiğinde tekrardan tetiklenecek