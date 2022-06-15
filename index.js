import express from 'express';
import cors from 'cors';

const app = express(); // Cria um servidor
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

const hoje = new Date();
let isTodayHoliday = false;
let holidayPosition = 0;

for (let i = 0; i < holidays.length; i++) {
    if (holidays[i].date == hoje.toLocaleDateString()) {
        isTodayHoliday = true;
        holidayPosition = i;
    }
}
  
// Configura uma função pra ser executada quando bater um GET na rota "/holidays"
app.get("/holidays", (req, res) => {
    // Manda como resposta o array holidays
    res.send(holidays);
});

// Configura uma função pra ser executada quando bater um GET na rota "/is-today-holiday"
app.get("/is-today-holiday", (req, res) => {
    // Manda como resposta o array holidays
    if (isTodayHoliday) {
        res.send(`Sim, hoje é ${holidays[holidayPosition].name}`);
    }
    else {
        res.send(`Não, hoje não é feriado`);
    }
});

// Configura o servidor para rodar na porta 5000
app.listen(5000);