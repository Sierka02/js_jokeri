const list = document.querySelector('table');
const jokeri = [];

const getRandomIntNumberInRange = (min, max) => { /*valitaan satunnainen numero kahden arvon väliltä*/
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListener('click', () => { /*lisätään eventlistener painikkeelle, joka suorittaa funktiot painikkeen sisällä*/
    const row = list.insertRow(0); /*asetetaan uusi rivi taulun alkuun*/
    const rowNumbers = [];

    for (let i = 0; i < 7; i++) { /*toistolause, joka suorittaa funktion 7 kertaa*/
        const randNumber = getRandomIntNumberInRange(1,9);
        const cell = row.insertCell(i);
        cell.innerHTML = randNumber;
        rowNumbers.push(randNumber);
    }

    jokeri.push(rowNumbers);

    const pElement = document.querySelector('p');
    pElement.textContent = 'valmiita rivejä: ' + arrayLength(); 
})

const arrayLength = () => {
    return jokeri.length;
}


