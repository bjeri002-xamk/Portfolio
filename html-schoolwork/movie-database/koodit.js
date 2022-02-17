"use strict";
//Luodaan elokuva olio, joka sisältää kaikki syötetyt tiedot, sekä metodin, joka tulostaa olion tiedot.
function Elokuva(nimi,ohjaaja,julkaisuvuosi,kategoria,kuvanNimi,luokitus) {
    this.nimi = nimi;
    this.ohjaaja = ohjaaja;
    this.julkaisuvuosi = julkaisuvuosi;
    this.kategoria = kategoria;
    this.kuvanNimi = kuvanNimi;
    this.luokitus = luokitus;
    this.tulosta = function() {
        return "Elokuvan nimi: " + this.nimi + ", ohjaaja: " + this.ohjaaja + ", julkaisuvuosi: " + this.julkaisuvuosi + ", kategoria: " + this.kategoria + ", tähtiluokitus: " + this.luokitus;
    }
}
//Luodaan lista elokuville
let elokuvat = [];

//Luodaan metodi, jolla lisätään elokuvia listalle
function lisaaElokuva() {
    //Tyhjennetään tulostusalue, mikäli siinä on edellisiä tulostuksia
    document.getElementById("tulostusAlue").innerHTML = "";
    //Kerätään syötetyt tiedot oikeista paikoista
    let nimi = document.getElementById("nimi").value;
    let ohjaaja = document.getElementById("ohjaaja").value;
    let julkaisuvuosi = Number (document.getElementById("julkaisuvuosi").value);
    let kategoria = document.getElementById("kategoria").value;
    let juliste = "kuvat/" + document.getElementById("kuvanNimi").value;
    let luokitus = Number (document.getElementById("luokitus").value);

    //Tarkistetaan, että käyttäjä syöttää oikeita syötteitä, ja ilmoitetaan, mikäli syöte ei kelpaa
    if (nimi == 0 || ohjaaja == 0 || kategoria == 0 || juliste == "kuvat/") {
        document.getElementById("tulostusAlue").innerHTML = "Syötä kaikki tarvittavat tiedot.";
    }
    else if (julkaisuvuosi < 1 || julkaisuvuosi > 2021 || isNaN(julkaisuvuosi)) {
        document.getElementById("tulostusAlue").innerHTML = "Julkaisuvuosi ei kelpaa.";
        document.getElementById("julkaisuvuosi").value = "";
    } else if (luokitus < 1 || luokitus > 5 || isNaN(luokitus)) {
        document.getElementById("tulostusAlue").innerHTML = "luokituksen oltava luku väliltä 1-5."
        document.getElementById("luokitus").value = "";
    } else {
        //Mikäli syötteet on ok, luodaan uusi elokuvaolio syötetyillä tiedoilla ja lisätään se listan perälle.
        let elokuvaOlio = new Elokuva(nimi, ohjaaja, julkaisuvuosi, kategoria, juliste, luokitus);
        elokuvat.push(elokuvaOlio);

        //Tyhjennetään kentät uutta elokuvaa varten.
        document.getElementById("nimi").value = "";
        document.getElementById("ohjaaja").value = "";
        document.getElementById("julkaisuvuosi").value = "";
        document.getElementById("kategoria").value = "";
        document.getElementById("kuvanNimi").value = "";
        document.getElementById("luokitus").value = "";
        document.getElementById("nimi").focus();
    }
}

//Luodaan funktioita, jotka suoritetaan kyseisen hakunapin painalluksesta
function hakuNimella() {
    //Suoritetaan metodi jolla nollataan edellisen haun kuvat.
    kuvienNollaus();
    //luodaan tarvittavia muuttujia
    let haettuElokuva = document.getElementById("nimihaku").value;
    let tulostus = "";
    let kuva = "";
    let montako = 0;

    //Käydään läpi lista elokuvista
    for (let i = 0; i < elokuvat.length; i++) {
        //kun löytyy haettu elokuva:
        if (haettuElokuva == elokuvat[i].nimi) {
            //lisätään laskuriin 1
            montako++;
            //Otetaan tuloste ja haetun elokuvan kuvatiedot talteen
            tulostus = elokuvat[i].tulosta();
            kuva = elokuvat[i].kuvanNimi;
            //Suoritetaan metodi, jolla tulostetaan etistyt elokuvat
            kuvajateksti(kuva, tulostus);
        }
    }
    //Mikäli ei löytynyt yhtään osumaa, suoritetaan tämä
    if (montako == 0) {
        document.getElementById("tulostusAlue").innerHTML = "Ei hakua vastaavia elokuvia.";
    }
    //tyhjennetään hakukenttä
    document.getElementById("nimihaku").value = "";
}

function hakuOhjaajalla() {
    kuvienNollaus();
    let haettuOhjaaja = document.getElementById("ohjaajahaku").value;
    let tulostus = "";
    let kuva = "";
    let montako = 0;

    for (let i = 0; i < elokuvat.length; i++) {
        if (haettuOhjaaja == elokuvat[i].ohjaaja) {
            montako++;
            tulostus = elokuvat[i].tulosta();
            kuva = elokuvat[i].kuvanNimi;
            kuvajateksti(kuva, tulostus);
        }
    }
    if (montako == 0) {
        document.getElementById("tulostusAlue").innerHTML = "Ei hakua vastaavia elokuvia.";
    }
    document.getElementById("ohjaajahaku").value = "";
}

function hakuVuodella() {
    kuvienNollaus();
    let haettuVuosi = Number(document.getElementById("julkaisuvuosihaku").value);
    let tulostus = "";
    let kuva = "";
    let montako = 0;

    for (let i = 0; i < elokuvat.length; i++) {
        if (haettuVuosi == elokuvat[i].julkaisuvuosi) {
            montako++;
            tulostus = elokuvat[i].tulosta();
            kuva = elokuvat[i].kuvanNimi;
            kuvajateksti(kuva, tulostus);
        }
    }
    if (montako == 0) {
        document.getElementById("tulostusAlue").innerHTML = "Ei hakua vastaavia elokuvia.";
    }
    document.getElementById("julkaisuvuosihaku").value = "";
}

function hakuKategorialla() {
    kuvienNollaus();
    let haettuKategoria = document.getElementById("kategoriahaku").value;
    let tulostus = "";
    let kuva = "";
    let montako = 0;
    
    for (let i = 0; i < elokuvat.length; i++) {
        if (haettuKategoria == elokuvat[i].kategoria) {
            montako++;
            tulostus = elokuvat[i].tulosta();
            kuva = elokuvat[i].kuvanNimi;
            kuvajateksti(kuva,tulostus);
        }
    }
    
    if (montako == 0) {
        document.getElementById("tulostusAlue").innerHTML = "Ei hakua vastaavia elokuvia.";
    }
    document.getElementById("kategoriahaku").value = "";
}

function hakuLuokituksella() {
    kuvienNollaus();
    let haettuLuokitus = Number (document.getElementById("luokitushaku").value);
    let tulostus = "";
    let kuva = "";
    let montako = 0;

    for (let i = 0; i < elokuvat.length; i++) {
        if (haettuLuokitus == elokuvat[i].luokitus) {
            montako++;
            tulostus = elokuvat[i].tulosta();
            kuva = elokuvat[i].kuvanNimi;
            kuvajateksti(kuva, tulostus);
        }
    }
    if (montako == 0) {
        document.getElementById("tulostusAlue").innerHTML = "Ei hakua vastaavia elokuvia.";
    }
    document.getElementById("luokitushaku").value = "";
}

//Luodaan metodi, jolla voi tyhjentää aiempien hakujen tulostukset
function kuvienNollaus() {
    //Mikäli tulostusalueelle on luotu uusia "lapsia", poistetaan niitä yksitellen, kunnes kaikki on poistettu.
    //Näin saadaan tulostusalue tyhjennettyä aina uutta hakua varten.
    let kuvienLKM = document.getElementById("tulostusAlue").childNodes.length;
    let kuvat = document.getElementById("tulostusAlue");
    if (kuvienLKM > 0) {
        while (kuvienLKM > 0) {
            kuvat.removeChild(kuvat.childNodes[0]);
            kuvienLKM--;
        }
    }
}

//Luodaan metodi, jolla lisätään tulostusalueelle uusi paikka kuvalle ja tekstille
function kuvajateksti(kuva, tulostus) {
    let teksti = document.createTextNode(tulostus);
    let picture = document.createElement("img");
    document.getElementById("tulostusAlue").appendChild(picture);
    document.getElementById("tulostusAlue").appendChild(teksti);
    //Muokataan kuva alueen src halutun kuvan mukaiseksi
    picture.src = kuva;
    //Muokataan kuvaa
    picture.style.width = "150px";
    //Laitetaan kuvat ja tiedot allekkain
    picture.style.display = "block";
}