/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {
        let card = document.getElementById("output");
        card.style = "align-text: center "
        for (let i=0; i < data.length; i++) {
            let cardBody = document.createElement('div');
            cardBody.innerText = '\n' + data[i].brand + '\n' + data[i].models;
            cardBody.style = 'margin: 2px 2px; border: 3px solid green; background-color: yellow; text-align: center; padding-bottom: 15px';

            card.appendChild(cardBody)
        }
    })