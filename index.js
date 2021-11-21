
const moneyElem = document.getElementById("money")
const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
})

async function moneyCount() {
    const amountRaised = await fetch("https://tscache.com/donation_total.json")
      .then(res => res.json())
      .then(data => data.count)
    moneyElem.innerText = currency.format(amountRaised)
}
moneyCount()