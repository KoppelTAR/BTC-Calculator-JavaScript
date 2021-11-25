const calculateBtn = document.querySelector('.calculate');
const answer = document.querySelector('.answer');
const inputField = document.querySelector('input[type="number"]');
const selector = document.querySelector('#mySelect')

calculateBtn.addEventListener('click',calculate)

function calculate() {
    let amount = inputField.value;
    let currency = selector.value;
    let url = `https://api.coindesk.com/v1/bpi/currentprice.json`
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let calcAnswer = null;
        let rateUSD = data.bpi.USD.rate_float;
        let rateEUR = data.bpi.EUR.rate_float;
        let rateGBP = data.bpi.GBP.rate_float;    
        
        switch (currency) 
        {
            case "USD":
                calcAnswer = amount*rateUSD
              break;
            case "EUR":
                calcAnswer = amount*rateEUR
              break;
            case "GBP":
                calcAnswer = amount*rateGBP
              break;
        }
        
        answer.innerHTML = calcAnswer.toFixed(2)
        
});

}