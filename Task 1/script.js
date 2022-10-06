/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function calculate(event) {
    event.preventDefault();
    let lb = document.getElementById("search").value * 2.2046;
    // console.log(document.getElementById("search").value * 2.2046);

    let g = document.getElementById("search").value / 0.0010000;
    // console.log(document.getElementById("search").value / 0.0010000);

    let oz = document.getElementById("search").value * 35.274;
    // console.log(document.getElementById("search").value * 35.274);

    document.getElementById("output").innerText += (document.getElementById("search").value + ' ' + 'kg' + ' * 2.2046' + ' ' + '=' + ' ' + lb + ' ' + 'lb' + '\n');
    document.getElementById("output").innerText += (document.getElementById("search").value + ' ' + 'kg' + ' / 0.0010000' + ' ' + '=' + ' ' + g + ' ' + 'g' + '\n');
    document.getElementById("output").innerText += (document.getElementById("search").value + ' ' + 'kg' + ' * 35.274' + ' ' + '=' + ' ' + oz + ' ' + 'oz' + '\n');

    document.getElementById("output").style = "padding: 10px 10px; margin: 0px 70px; color: red; border: 3px solid green"
}
addEventListener('submit', calculate)