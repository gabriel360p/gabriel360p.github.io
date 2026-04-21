/*

    SCRIPT CONVERSOR DE MOEDAS

*/

const coinsArray = [{
    id: 0,
    name: "Dólar",
    simbol: "US$",
    cotation: 4.97,
    countryFlag: "./assets/icons/eua-icon.png",
    placeholder: "Dólares Americanos",
},
{
    id: 1,
    name: "Libra",
    simbol: "£",
    cotation: 6.73,
    countryFlag: "./assets/icons/reino-unido-icon.png",
    placeholder: "Libras",
},
{
    id: 2,
    name: "Euro",
    simbol: "£",
    cotation: 5.90,
    countryFlag: "./assets/icons/alemanha-icon.png",
    placeholder: "Euros",
},
{
    id: 3,
    name: "Bitcoin",
    simbol: "₿",
    cotation: 350.000,
    countryFlag: "./assets/icons/bitcoin-icon.png",
    placeholder: "Bitcoins",
}
]

document.querySelector(".btn-convert").addEventListener('click', function () {
    const valueInReal = document.querySelector(".input.value-cotation").value;
    if ((valueInReal == 0) || (valueInReal == null)) {
        alert("Nenhum valor foi informado!");
    } else {
        document.querySelector(".value-input").innerHTML = `R$ ${valueInReal}`

        console.log(valueInReal);
        let coinOption = document.querySelector(".input.to").value
        console.log(coinOption);

        const coin = coinsArray.find(c => c.id == coinOption)
        console.log(coin)
        document.querySelector(".country-flag-output").src = `${coin.countryFlag}`

        document.querySelector(".value-output").innerHTML =
            `${coin.simbol} ${(valueInReal / coin.cotation).toFixed(2)} ${coin.placeholder}`
    }
})



