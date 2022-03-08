import express from 'express';

const app : express.Application = express();

const portti : number = Number(process.env.PORT) || 3102;

let kuntatiedot = require('./kunnat.json');

interface Kunta {
    id? : number,
    nimi : string,
    kuntamuoto : string,
    asukkaita : number,
    maakunta? : string
};

interface Maakunta {
    nimi : string,
    kaupunkeja : number,
    asukasmaara : number
}

app.get("/kunnat", (req: express.Request, res : express.Response) : void => {
    
    let kunnat : Kunta[] = kuntatiedot.map((kunta : any) => {
        if (kunta.nimi_fi === kunta.nimi_sv) {
            return {
                nimi : kunta.nimi_fi,
                kuntamuoto : kunta.kuntamuoto,
                asukkaita : kunta.asukkaita
            }
        } else {
            return {
                nimi : `${kunta.nimi_fi} (${kunta.nimi_sv})`,
                kuntamuoto : kunta.kuntamuoto,
                asukkaita : kunta.asukkaita
            }
        }
    });
    res.json(kunnat);
});

app.get("/kunnat/:id", (req : express.Request, res : express.Response) : void => {
    
    let kunta : Kunta | undefined = kuntatiedot.map((kunta : any) => {
        
        if (kunta.nimi_fi === kunta.nimi_sv) {
            return {
                id : kunta.kuntanro,
                nimi : kunta.nimi_fi,
                kuntamuoto : kunta.kuntamuoto,
                asukkaita : kunta.asukkaita
            }
        } else {
            return {
                id : kunta.kuntanro,
                nimi : `${kunta.nimi_fi} (${kunta.nimi_sv})`,
                kuntamuoto : kunta.kuntamuoto,
                asukkaita : kunta.asukkaita
            }
        }
    }).find((kunta : Kunta) => kunta.id === Number(req.params.id));
    
    if (kunta) {
        res.json(kunta);
    } else {
        res.json({virhe : `Kuntaa ei löydy`});
    }
    
});

app.get("/maakunnat/:maakunta_nimi", (req : express.Request, res : express.Response) : void => {
    
    let mkAsukkaat : number = 0;
    let mkKaupunkeja : number = 0;
    let mk : string = "";
    let kunta : string = "";

    for (let i = 0; i < kuntatiedot.length; i++) {
        
        let re = /\ä/gi;
        kunta = kuntatiedot[i].maakuntanimi_fi.replace(re, "a").toLowerCase();
        re = /\å/gi;
        kunta = kunta.replace(re, "o");
        re = /\ö/gi;
        kunta = kunta.replace(re, "o");

        if (req.params.maakunta_nimi === kunta) {
            mk = `${kuntatiedot[i].maakuntanimi_fi} (${kuntatiedot[i].maakuntanimi_sv})`;
            mkAsukkaat = mkAsukkaat + kuntatiedot[i].asukkaita;
            mkKaupunkeja++;
        }
    };

    if (mk === "") {
        res.json({virhe : `Maakuntaa ei löydy`});
    } else {
        let foundMK : Maakunta = {
            nimi : mk,
            kaupunkeja : mkKaupunkeja,
            asukasmaara : mkAsukkaat
        }
        res.json(foundMK);
    }
});

app.listen(portti, () => {
    console.log(`Palvelin yhdistetty porttiin : ${portti}`);
});