const fs = require('fs');
const express = require("express");

const app = express();
const PORT = 8000;

// midleware  (JANGAN SAMPE KELEWAT)
app.use(express.json)
// read file jsonnya
const customers = JSON.parse(
    fs.readFileSync(`${__dirname}/data/dummy.json`)
);

// localhost
app.get("/", (req, res, next) => {
    res.send("<p>Hallo FSW 1 TERCINTA </p>");
});

app.get("/api/v1/customers", (req, res, next) => {
    res.status(200).json({
    status:"success",
    totalData:customers.length,
    data:{
        customers,
    },
})
});
// create data baru
app.post("/api/v1/customers", (req, res) => {
    console.log(req.body);

    const newCostumer = req.body;

    costumers.push(newCustomer);

    fs.writeFile(`${__dirname}/data/dummy.json`,
    JSON.stringify(costumers),
    (err) => {
        res.status(201).json({
            status : "success",
            data :{
                costumer: newCustomer,
            },
        });
    }
);
    res.send("oke udah");
})

app.listen(PORT, () => {
    console.log(`App running on port : ${PORT}`)
})