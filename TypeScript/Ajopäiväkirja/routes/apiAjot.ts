import { PrismaClient } from '@prisma/client';
import express from 'express';
import { Virhe } from '../errors/virhekasittelija';

const prisma : PrismaClient = new PrismaClient();

const apiAjotRouter : express.Router = express.Router();

apiAjotRouter.use(express.json());

apiAjotRouter.post("/", async (req : express.Request, res : express.Response, next : express.NextFunction) => {

    let pvm : string = "";
    if (typeof req.body.date != "string") {
        let date_obj = new Date();
        let day = date_obj.getDate();
        let month = date_obj.getMonth();
        let year = date_obj.getFullYear();
        pvm = `${day}.${month}.${year}`;
    } else {
        pvm = req.body.date;
    }
   
    if (typeof req.body.reitti == "string" && typeof req.body.km == "number" && typeof req.body.kayttajaId == "number") {
        try {
            const lisatty = await prisma.ajotieto.create({
                data : {
                    reitti : req.body.reitti,
                    km : req.body.km,
                    kayttajaId : req.body.kayttajaId,
                    date : pvm
                }
            });
            res.json(lisatty);

        } catch (e : any) {
            next(new Virhe());
        }
    } else {
        next(new Virhe(400, "Virheellinen pyynnön body"));
}});

apiAjotRouter.delete("/:id", async (req : express.Request, res : express.Response, next : express.NextFunction) => {

    
    if (await prisma.ajotieto.count({
        where : {
            id : Number(req.params.id)
        }
    })) {
        try {
            const poistettu = await prisma.ajotieto.delete({
                where : {
                    id : Number(req.params.id)
                }
            });
            
            res.json(poistettu);

        } catch (e : any) {
            next(new Virhe());
        }
    } else {
        next(new Virhe(404, "Virheellinen id"));
    }
})

apiAjotRouter.put("/:id", async (req : express.Request, res : express.Response, next : express.NextFunction) => {
    if (await prisma.ajotieto.count({
        where : {
            id : Number(req.params.id)
        }
        })) {
        if (typeof req.body.reitti == "string" && typeof req.body.km == "number" && typeof req.body.date == "string") {
            
            try {

                const paivitetty = await prisma.ajotieto.update({
                    where : {
                        id : Number(req.params.id)
                    },
                    data : {
                        reitti : req.body.reitti,
                        km : Number(req.body.km),
                        date : req.body.date
                    }
                });
                res.json(paivitetty);
            } catch (e : any) {
                next(new Virhe());
            }
        } else {
            next(new Virhe(400, "Virheellinen pyynnön body"));
        }

    } else {
        next(new Virhe(404, "Virheellinen id"));
    }
})

export default apiAjotRouter;