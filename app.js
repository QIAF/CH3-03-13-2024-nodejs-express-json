const fs = require('fs');
const express = require("express");

const app = express();
const PORT = 8000;

// midleware untuk membaca require JSON dari request body (JANGAN SAMPE KELEWAT)
app.use(express.json());

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
    totalData: customers.length,
    data:{
        customers: customers,
    },
});
});
// create data baru
app.post("/api/v1/customers", (req, res) => {
    console.log(req.body);

    costumers.push(req.body);
    fs.writeFile(`${__dirname}/data/dummy.json`,
    JSON.stringify(costumers),
    (err) => {
        if (err) {
            res.status(500).json({
                status:"error",
                message:"Gagal menyimpan",
            });
        }else{
        res.status(201).json({
            status : "success",
            data :{
                costumer: notStrictEqual.body,
            },
        });

        }

    }
);
    // res.send("oke udah");
})

app.listen(PORT, () => {
    console.log(`App running on port : ${PORT}`)
})