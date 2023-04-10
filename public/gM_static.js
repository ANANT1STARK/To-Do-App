let x = Math.floor((Math.random() * 1643) + 1);
let quote;
fetch("https://type.fit/api/quotes")
.then(function(response) {
return response.json();
})
.then(async function(data) {
quote = await data[x]
// console.log(data[x]);
document.getElementById('quote').textContent = quote.text
document.getElementById('author').textContent = `--${quote.author}`
// console.log(x)
});