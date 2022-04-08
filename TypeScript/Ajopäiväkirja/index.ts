import express from 'express';
import apiAjotRouter from './routes/apiAjot';
import virhekasittelija from './errors/virhekasittelija';

const app : express.Application = express();

const portti : number = Number(process.env.PORT) || 3104

app.use("/api/ajot", apiAjotRouter);

app.use(virhekasittelija);

app.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin : ${portti}`);
})